const contact_banner=require("../../../models").contact_banner
const { Op } = require("sequelize");
const  path=require("path")
const fs = require('fs')
exports.addBanner=(req,res)=>{
    res.render("admin/contact_us/banner/add",{title:"Contact Banner ",userdetials:req.session.user})
}



exports.PostBanner=async(req,res)=>{
let checkDuplicateBanner=await  contact_banner.findOne({where:{title: req.body.bannerTitle.trim()}})


    if(checkDuplicateBanner)
    {
       req.toastr.error("Contact Banner  is already exist.");
      return   res.redirect("/add-contact-banner")
    }

 let data= await  contact_banner.create({
        image: req.file.filename,
        title: req.body.bannerTitle.trim(),
        
    })
    req.toastr.success("Contact Banner  is successfully added.");
    res.redirect("/contact-banner-list") 
}





exports.bannerList=async(req,res)=>{
   let banner=await contact_banner.findAll({})
    res.render("admin/contact_us/banner/list",{title:"Contact Banner ",userdetials:req.session.user,banner:banner})

}



exports.deleteBanner=async(req,res)=>{
 let data=   await contact_banner.destroy({where:{id:req.query.bannerId}})
 
    req.toastr.success("Contact Banner  is successfully deleted.");

    res.redirect("/contact-banner-list")
 
        

}

exports.updateBanner=async(req,res)=>{

  let updateBanner=  await contact_banner.findOne({where:{id:req.query.bannerId}})
    res.render("admin/contact_us/banner/update",{title:"Contact Banner ",userdetials:req.session.user,updateBanner:updateBanner})   

}




exports.updateBannerById=async(req,res)=>{
   
    let updateBanner=  await contact_banner.findOne({where:{title: req.body.bannerTitle ,id:{[Op.not]:req.body.b_Id}}})
    let updateBannerImage=  await contact_banner.findOne({where:{id:req.body.b_Id}})
    
    //   if(req.file)
    //   {
    //     await  fs.unlinkSync(path.join(__dirname,"..","..","public","/uploaded-files",`${updateBannerImage.image}`))
    //   }

    

           if(updateBanner)
           {
          req.toastr.error("Title is already exist.");

            //req.flash('error',"title already exist")
           return res.redirect("/contact-banner-list")
           }

  await  contact_banner.update({
        image: (req.file)?req.file.filename:updateBannerImage.image,
        title: req.body.bannerTitle,
    },{where:{id:req.body.b_Id}}).then((data)=>{

        req.toastr.success("Contact Banner  is successfully updated.");
          
       // req.flash('success',"successful update")
        res.redirect("/contact-banner-list")
    }).catch((data)=>{
        req.toastr.error("Contact Banner  is not updated.");
        
        //req.flash('success',"Contact Banner  is not update try again")
        res.render("admin/contact_us/banner/update",{title:"Contact Banner ",userdetials:req.session.user,updateBanner:updateBanner,errorMessage:"Contact Banner  is not update"})
    })
}