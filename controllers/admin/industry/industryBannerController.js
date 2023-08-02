const industry_banner = require("../../../models").industry_banner
const { Op } = require("sequelize");
const path = require("path")
const fs = require('fs')
exports.addBanner = (req, res) => {
    res.render("admin/industry/industry_banner/add", { title: "Industry Banner", userdetials: req.session.user })
}



exports.PostBanner = async (req, res) => {
    let checkDuplicateBanner = await industry_banner.findOne({ where: { title: req.body.bannerTitle.trim() } })
    if (checkDuplicateBanner) {

        req.toastr.error("Industry Banner  is already exist.");
        // req.flash('error',"Industry Banner  is already exist") 
        return res.redirect("/add-industry-banner")

    }
    let data = await industry_banner.create({
        image: req.file.filename,
        title: req.body.bannerTitle.trim(),

    })
    req.toastr.success("Industry Banner  is successfully added.");
    // req.flash('success',"successful add")
    res.redirect("/industry-banner-list")
}





exports.bannerList = async (req, res) => {
    let banner = await industry_banner.findAll({})
    res.render("admin/industry/industry_banner/list", { title: "Industry Banner", userdetials: req.session.user, banner: banner })

}



exports.deleteBanner = async (req, res) => {
    let data = await industry_banner.destroy({ where: { id: req.query.bannerId } })

    req.toastr.success("Industry Banner  is successfully deleted.");

    res.redirect("/industry-banner-list")



}

exports.updateBanner = async (req, res) => {

    let updateBanner = await industry_banner.findOne({ where: { id: req.query.bannerId } })
    res.render("admin/industry/industry_banner/update", { title: "Industry Banner", userdetials: req.session.user, updateBanner: updateBanner })

}




exports.updateBannerById = async (req, res) => {
   console.log("idddd=======",req.body.id)
    let updateBanner = await industry_banner.findOne({ where: { title: req.body.bannerTitle, id: { [Op.not]: req.body.id } } })
    let updateBannerImage = await industry_banner.findOne({ where: { id: req.body.id } })

    if (req.file) {
        await fs.unlinkSync(path.join(__dirname, "..", "..", "..", "public", "/uploaded-files", `${updateBannerImage.image}`))
    }



    if (updateBanner) {
        req.toastr.error("Title is already exist.");
        return res.redirect("/industry-banner-list")
    }

    await industry_banner.update({
        image: (req.file) ? req.file.filename : updateBannerImage.image,
        title: req.body.bannerTitle,
    }, { where: { id: req.body.id } }).then((data) => {
        req.toastr.success("Industry Banner  is successfully updated.");
        res.redirect("/industry-banner-list")
    }).catch((data) => {
        req.toastr.error("Industry Banner  is not updated.");
        res.render("admin/industry/industry_banner/update", { title: "Industry Banner", userdetials: req.session.user, updateBanner: updateBanner, errorMessage: "Industry Banner  is not update" })
    })
}