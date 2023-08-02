const Banner = require("../../../models").banner
const { Op } = require("sequelize");
const path = require("path")
const fs = require('fs')

//get banner
exports.addBanner = (req, res) => {
    res.render("admin/home/banner/add", { title: "Banner", userdetials: req.session.user })
}



//post banner
exports.PostBanner = async (req, res) => {
    let checkDuplicateBanner = await Banner.findOne({ where: { title: req.body.bannerTitle.trim() } })

    if (checkDuplicateBanner) {
        req.toastr.error("Banner is already exist.");
        return res.redirect("/add-banner")
    }

    let data = await Banner.create({
        image: req.file.filename,
        title: req.body.bannerTitle.trim(),
        sub_title: null,
        details: req.body.details
    })
    req.toastr.success("Banner is successfully added.");
    res.redirect("/get-banner-list")
}




//banner list
exports.bannerList = async (req, res) => {
 let hasValue=false
    req.session?.permissions?.forEach(async(element1,index)=>{
        if(element1.permission_slug=="view_banner")
        {
           
            hasValue=true
           
        }
       
})
if(hasValue)
{

    let banner = await Banner.findAll({})
    res.render("admin/home/banner/list", { title: "Banner", userdetials: req.session.user, list: banner, permission:req.session.permission })
}
else{
    req.toastr.success("you have not permission");
    return res.redirect("/error-page") 
}


  

}



//delete banne
exports.deleteBanner = async (req, res) => {




    let hasValue=false
    req.session?.permissions?.forEach(async(element1,index)=>{
        if(element1.permission_slug=="delete_banner")
        {
           
            hasValue=true
           
        }
       
})
if(hasValue)
{

    let data = await Banner.destroy({ where: { id: req.query.bannerId } })

    req.toastr.success("Banner is successfully deleted.");

    res.redirect("/get-banner-list")
}
else{
    req.toastr.success("you have not permission");
    return res.redirect("/error-page") 
}






   
  

}


//update banner
exports.updateBanner = async (req, res) => {

    let hasValue=false
    req.session?.permissions?.forEach(async(element1,index)=>{
        if(element1.permission_slug=="edit_banner")
        {
           
            hasValue=true
           
        }
       
})
if(hasValue)
{

    let updateBanner = await Banner.findOne({ where: { id: req.query.bannerId } })
    res.render("admin/home/banner/update", { title: "Banner", userdetials: req.session.user, updateBanner: updateBanner })
}
else{
    req.toastr.success("you have not permission");
    return res.redirect("/error-page") 
}



   

}



// store banner
exports.updateBannerById = async (req, res) => {

    let updateBanner = await Banner.findOne({ where: { title: req.body.bannerTitle, id: { [Op.not]: req.body.id } } })

    let updateBannerImage = await Banner.findOne({ where: { id: req.body.id } })

    if (req.file) {
        await fs.unlinkSync(path.join(__dirname, "..", "..", "..", "public", "/uploaded-files", `${updateBannerImage.image}`))
    }


    if (updateBanner) {
        req.toastr.error("Title is already exist.");
        return res.redirect("/get-banner-list")
    }
    else {

        await Banner.update({
            image: (req.file) ? req.file.filename : updateBannerImage.image,
            title: req.body.bannerTitle,

            sub_title: null,
            details: req.body.details
        }, { where: { id: req.body.id } }).then((data) => {

            req.toastr.success("Banner is successfully updated.");

            res.redirect("/get-banner-list")
        }).catch((data) => {
            req.toastr.error("Banner is not updated.");
            res.render("admin/home/banner/update", { title: "Banner", userdetials: req.session.user, updateBanner: updateBanner, errorMessage: "banner is not update" })
        })
    }
}