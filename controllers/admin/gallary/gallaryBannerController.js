const gallary_banner=require("../../../models").gallary_banner
const { Op } = require("sequelize");
const  path=require("path")
const fs = require('fs')
exports.addBanner=(req,res)=>{
    res.render("admin/gallary/gallary_banner/add",{title:"Gallary Banner  ",userdetials:req.session.user})
}



exports.PostBanner=async(req,res)=>{
let checkDuplicateBanner=await  gallary_banner.findOne({where:{title: req.body.bannerTitle.trim()}})
    if(checkDuplicateBanner)
    {

       req.toastr.error("Gallary Banner  is already exist.");
      // req.flash('error',"Gallary Banner  is already exist") 
      return   res.redirect("/add-gallary-banner")

    }
 let data= await  gallary_banner.create({
        image: req.file.filename,
        title: req.body.bannerTitle.trim(),
        
    })
    req.toastr.success("Gallary Banner  is successfully added.");
   // req.flash('success',"successful add")
    res.redirect("/gallary-banner-list") 
}





exports.bannerList=async(req,res)=>{
   let banner=await gallary_banner.findAll({})
    res.render("admin/gallary/gallary_banner/list",{title:"Gallary Banner  ",userdetials:req.session.user,banner:banner})

}



exports.deleteBanner=async(req,res)=>{
 let data=   await gallary_banner.destroy({where:{id:req.query.bannerId}})
 
    req.toastr.success("Gallary Banner  is successfully deleted.");

    res.redirect("/gallary-banner-list")
 
        

}

exports.updateBanner=async(req,res)=>{

  let updateBanner=  await gallary_banner.findOne({where:{id:req.query.bannerId}})
    res.render("admin/gallary/gallary_banner/update",{title:"Gallary Banner  ",userdetials:req.session.user,updateBanner:updateBanner})   

}




exports.updateBannerById=async(req,res)=>{
   
    let updateBanner=  await gallary_banner.findOne({where:{title: req.body.bannerTitle ,id:{[Op.not]:req.body.b_Id}}})
    let updateBannerImage=  await gallary_banner.findOne({where:{id:req.body.b_Id}})
    
    //   if(req.file)
    //   {
    //     await  fs.unlinkSync(path.join(__dirname,"..","..","public","/uploaded-files",`${updateBannerImage.image}`))
    //   }

    

           if(updateBanner)
           {
          req.toastr.error("Title is already exist.");

            //req.flash('error',"title already exist")
           return res.redirect("/gallary-banner-list")
           }

  await  gallary_banner.update({
        image: (req.file)?req.file.filename:updateBannerImage.image,
        title: req.body.bannerTitle,
    },{where:{id:req.body.b_Id}}).then((data)=>{

        req.toastr.success("Gallary Banner  is successfully updated.");
          
       // req.flash('success',"successful update")
        res.redirect("/gallary-banner-list")
    }).catch((data)=>{
        req.toastr.error("Gallary Banner  is not updated.");
        
        //req.flash('success',"Gallary Banner  is not update try again")
        res.render("admin/gallary/gallary_banner/update",{title:"Gallary Banner  ",userdetials:req.session.user,updateBanner:updateBanner,errorMessage:"Gallary Banner  is not update"})
    })
}