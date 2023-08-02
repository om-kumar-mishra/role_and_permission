const service_main_title_page = require("../../../models").service_main_title_page
const { Op } = require("sequelize");
const path = require("path")
const fs = require('fs')



//get add page
exports.getAddPage = (req, res) => {
    res.render("admin/service/service_main_title_page/add", { title: "Service Main Title Page", userdetials: req.session.user })
}



//post dat
exports.postData = async (req, res) => {
    let checkDuplicate = await service_main_title_page.findOne({ where: { title: req.body.title.trim() } })
    if (checkDuplicate) {
        req.toastr.error("title is already exist.");
        return res.redirect("/service-main-title-page-list")

    }
    else {

        let data = await service_main_title_page.create({
            title: req.body.title.trim(),
            description: req.body.description,
        })
        req.toastr.success("Service Main Title Page is successfully added.");
        res.redirect("/service-main-title-page-list")
    }
}




//get list 
exports.getlList = (req, res) => {
    service_main_title_page.findAll({})
        .then((data) => {
            res.render("admin/service/service_main_title_page/list", { title: "Service Main Title Page", userdetials: req.session.user, list: data })
        })
}





//delete data
exports.deleteData = (req, res) => {
    service_main_title_page.destroy({ where: { id: req.query.id } })
        .then((data) => {
            req.toastr.success("Service Main Title Page is successfully deleted.");
            res.redirect("/service-main-title-page-list")
        })
        .catch((error) => {
            req.toastr.error("Something unexpected happend.");
            res.redirect("/service-main-title-page-list")
        })
}




//get updated data
exports.getUpdatePage = (req, res) => {

    service_main_title_page.findOne({ where: { id: req.query.id } })
        .then((data) => {
            res.render("admin/service/service_main_title_page/update", { title: "Service Main Title Page", userdetials: req.session.user, data: data })
        })
}




//store update data
exports.updateStore = async (req, res) => {
    let check_title = await service_main_title_page.findOne({ where: { title: req.body.title.trim(), id: { [Op.not]: req.body.id } } })


    if (check_title) {
        req.toastr.error("Title is already exist.");
        return res.redirect("/service-main-title-page-list")
    }
    else {

        service_main_title_page.update({
            title: req.body.title.trim(),
            description: req.body.description,

        }, { where: { id: req.body.id } })
            .then((data) => {
                req.toastr.success("Service Main Title Page is sucessfully updated.");
                res.redirect("/service-main-title-page-list")
            })
            .catch((error) => {
                req.toastr.error("Something unexpected happend.");
                res.redirect("/service-main-title-page-list")
            })
    }
}