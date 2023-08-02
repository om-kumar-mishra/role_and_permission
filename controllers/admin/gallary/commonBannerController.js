const common_banner=require("../../../models").common_banner
const { Op } = require("sequelize");
const  path=require("path")
const fs = require('fs')



//get add page
exports.addBanner=(req,res)=>{
    res.render("admin/gallary/common_banner/add",{title:"Common Banner  ",userdetials:req.session.user})
}




//post data
exports.PostBanner=async(req,res)=>{
let checkDuplicate=await  common_banner.findOne({where:{title: req.body.bannerTitle.trim()}})
    if(checkDuplicate)
    {
       req.toastr.error("Common Banner   is already exist.");
      return   res.redirect("/add-common-banner")

    }
 let data= await  common_banner.create({
        image: req.file.filename,
        title: req.body.bannerTitle.trim(),
        
    })
    req.toastr.success("Common Banner   is successfully added.");
   // req.flash('success',"successful add")
    res.redirect("/common-banner-list") 
}





exports.bannerList=async(req,res)=>{
   let banner=await common_banner.findAll({})
    res.render("admin/gallary/common_banner/list",{title:"Common Banner  ",userdetials:req.session.user,banner:banner})

}



exports.deleteBanner=async(req,res)=>{
 let data=   await common_banner.destroy({where:{id:req.query.bannerId}})
 
    req.toastr.success("Common Banner   is successfully deleted.");

    res.redirect("/common-banner-list")
 
        

}

exports.updateBanner=async(req,res)=>{

  let updateBanner=  await common_banner.findOne({where:{id:req.query.bannerId}})
    res.render("admin/gallary/common_banner/update",{title:"Common Banner  ",userdetials:req.session.user,updateBanner:updateBanner})   

}




exports.updateBannerById=async(req,res)=>{
   
    let updateBanner=  await common_banner.findOne({where:{title: req.body.bannerTitle ,id:{[Op.not]:req.body.b_Id}}})
    let updateBannerImage=  await common_banner.findOne({where:{id:req.body.b_Id}})
    
    //   if(req.file)
    //   {
    //     await  fs.unlinkSync(path.join(__dirname,"..","..","public","/uploaded-files",`${updateBannerImage.image}`))
    //   }

    

           if(updateBanner)
           {
          req.toastr.error("Title is already exist.");

            //req.flash('error',"title already exist")
           return res.redirect("/common-banner-list")
           }

  await  common_banner.update({
        image: (req.file)?req.file.filename:updateBannerImage.image,
        title: req.body.bannerTitle,
    },{where:{id:req.body.b_Id}}).then((data)=>{

        req.toastr.success("Common Banner   is successfully updated.");
          
       // req.flash('success',"successful update")
        res.redirect("/common-banner-list")
    }).catch((data)=>{
        req.toastr.error("Common Banner   is not updated.");
        
        //req.flash('success',"Common Banner   is not update try again")
        res.render("admin/gallary/common_banner/update",{title:"Common Banner  ",userdetials:req.session.user,updateBanner:updateBanner,errorMessage:"Common Banner   is not update"})
    })
}