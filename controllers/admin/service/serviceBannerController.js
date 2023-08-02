const service_banner = require("../../../models").service_banner
const { Op } = require("sequelize");
const path = require("path")
const fs = require('fs')


//get banner
exports.addBanner = (req, res) => {
    res.render("admin/service/service_banner/add", { title: "Banner", userdetials: req.session.user })
}




//post data
exports.PostBanner = async (req, res) => {
    let checkDuplicateBanner = await service_banner.findOne({ where: { title: req.body.bannerTitle.trim() } })
    if (checkDuplicateBanner) {

        req.toastr.error("Service Banner is already exist.");
        return res.redirect("/add-service-banner")

    }
    let data = await service_banner.create({
        image: req.file.filename,
        title: req.body.bannerTitle.trim(),

    })
    req.toastr.success("Service Banner is successfully added.");
    res.redirect("/service-banner-list")
}




//get list
exports.bannerList = async (req, res) => {
    let banner = await service_banner.findAll({})
    res.render("admin/service/service_banner/list", { title: "Banner", userdetials: req.session.user, banner: banner })

}


//delete data
exports.deleteBanner = async (req, res) => {
    let data = await service_banner.destroy({ where: { id: req.query.bannerId } })

    req.toastr.success("Service Banner is successfully deleted.");

    res.redirect("/service-banner-list")
}




//get update data
exports.updateBanner = async (req, res) => {

    let updateBanner = await service_banner.findOne({ where: { id: req.query.bannerId } })
    res.render("admin/service/service_banner/update", { title: "Banner", userdetials: req.session.user, updateBanner: updateBanner })
}



//updated data store
exports.updateBannerById = async (req, res) => {

    let updateBanner = await service_banner.findOne({ where: { title: req.body.bannerTitle, id: { [Op.not]: req.body.b_Id } } })
    let updateBannerImage = await service_banner.findOne({ where: { id: req.body.b_Id } })

    if (req.file) {
        await fs.unlinkSync(path.join(__dirname, "..", "..", "..", "public", "/uploaded-files", `${updateBannerImage.image}`))
    }



    if (updateBanner) {
        req.toastr.error("Title is already exist.");
        return res.redirect("/service-banner-list")
    }
    else {
        await service_banner.update({
            image: (req.file) ? req.file.filename : updateBannerImage.image,
            title: req.body.bannerTitle,
        }, { where: { id: req.body.b_Id } }).then((data) => {

            req.toastr.success("Service Banner is successfully updated.");
            res.redirect("/service-banner-list")
        }).catch((data) => {
            req.toastr.error("Service Banner is not updated.");
            res.render("admin/service/service_banner/update", { title: "Banner", userdetials: req.session.user, updateBanner: updateBanner, errorMessage: "Service Banner is not update" })
        })
    }
}