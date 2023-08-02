const industry_main_title_page = require("../../../models").industry_main_title_page
const { Op } = require("sequelize");
const path = require("path")
const fs = require('fs')


//get add page
exports.getAddPage = (req, res) => {
    res.render("admin/industry/industry_main_title_page/add", { title: "Industry Main Title Page", userdetials: req.session.user })
}





//post data
exports.postData = async (req, res) => {

    let checkDuplicate = await industry_main_title_page.findOne({ where: { title: req.body.title.trim() } })
    if (checkDuplicate) {
        req.toastr.error("title is already exist.");
        return res.redirect("/industry-main-title-page-list")
    }
    else {

        let data = await industry_main_title_page.create({
            title: req.body.title.trim(),
            description: req.body.description,
        })
        req.toastr.success("Industry Main Title Page is successfully added.");
        res.redirect("/industry-main-title-page-list")
    }
}





//get list
exports.getlList = (req, res) => {
    industry_main_title_page.findAll({})
        .then((data) => {
            res.render("admin/industry/industry_main_title_page/list", { title: "Industry Main Title Page", userdetials: req.session.user, list: data })
        })
}





//delete data
exports.deleteData = (req, res) => {
    industry_main_title_page.destroy({ where: { id: req.query.id } })
        .then((data) => {
            req.toastr.success("Industry Main Title Page is successfully deleted.");
            res.redirect("/industry-main-title-page-list")
        })
        .catch((error) => {
            req.toastr.error("Something unexpected happend.");
            res.redirect("/industry-main-title-page-list")
        })
}



//get update page
exports.getUpdatePage = (req, res) => {

    industry_main_title_page.findOne({ where: { id: req.query.id } })
        .then((data) => {
            res.render("admin/industry/industry_main_title_page/update", { title: "Industry Main Title Page", userdetials: req.session.user, data: data })
        })
}




//post update data
exports.updateStore = async (req, res) => {
    let getoldImage = await industry_main_title_page.findOne({ where: { id: req.body.id } })
    let check_title = await industry_main_title_page.findOne({ where: { title: req.body.title.trim(), id: { [Op.not]: req.body.id } } })

    if (check_title) {
        req.toastr.error("Title is already exist.");
        return res.redirect("/industry-main-title-page-list")
    }
    else {

        industry_main_title_page.update({
            title: req.body.title.trim(),
            description: req.body.description,

        }, { where: { id: req.body.id } })
            .then((data) => {
                req.toastr.success("Industry Main Title Page is sucessfully updated.");
                res.redirect("/industry-main-title-page-list")
            })
            .catch((error) => {
                req.toastr.error("Something unexpected happend.");
                res.redirect("/industry-main-title-page-list")
            })
    }
}