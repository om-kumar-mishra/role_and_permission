const industry_box = require("../../../models").industry_box
const { Op } = require("sequelize");
const path = require("path")
const fs = require('fs')

//get add page
exports.getAddPage = (req, res) => {
    res.render("admin/industry/industry_box/add", { title: "Industry Box", userdetials: req.session.user })
}





//post data
exports.postData = async (req, res) => {

    let checkDuplicateBanner = await industry_box.findOne({ where: { title: req.body.title.trim() } })
    if (checkDuplicateBanner) {
        req.toastr.error("title is already exist.");
        return res.redirect("/industry-box-list")

    }
    else {
        let data = await industry_box.create({
            title: req.body.title.trim(),
            description: req.body.description,
            icon: req.file.filename
        })
        req.toastr.success("Industry Box  is successfully added.");
        res.redirect("/industry-box-list")
    }
}



//get list
exports.getlList = (req, res) => {
    industry_box.findAll({})
        .then((data) => {
            res.render("admin/industry/industry_box/list", { title: "Industry Box", userdetials: req.session.user, list: data })
        })
}




//delete data
exports.deleteData = (req, res) => {
    industry_box.destroy({ where: { id: req.query.id } })
        .then((data) => {
            req.toastr.success("Industry Box  is successfully deleted.");
            res.redirect("/industry-box-list")
        })
        .catch((error) => {
            req.toastr.error("Something unexpected happend.");
            res.redirect("/industry-box-list")
        })
}



//get update page
exports.getUpdatePage = (req, res) => {

    industry_box.findOne({ where: { id: req.query.id } })
        .then((data) => {
            res.render("admin/industry/industry_box/update", { title: "Industry Box", userdetials: req.session.user, data: data })
        })
}



//update data store
exports.updateStore = async (req, res) => {

    let getoldImage = await industry_box.findOne({ where: { id: req.body.id } })
    let check_title = await industry_box.findOne({ where: { title: req.body.title.trim(), id: { [Op.not]: req.body.id } } })
    //let updateBannerImage=  awaitindustry_box.findOne({where:{id:req.body.mostId}})

    //  if(req.file)
    //  {
    //    await  fs.unlinkSync(path.join(__dirname,"..","..","public","/uploaded-files",`${getoldImage.icon}`))
    //  }

    if (check_title) {
        req.toastr.error("Title is already exist.");

        return res.redirect("/industry-box-list")
    }
    else {
        industry_box.update({
            title: req.body.title.trim(),
            description: req.body.description,
            icon: (req.file) ? req.file.filename : getoldImage.icon
        }, { where: { id: req.body.id } })
            .then((data) => {
                req.toastr.success("Industry Box  is sucessfully updated.");
                res.redirect("/industry-box-list")
            })
            .catch((error) => {
                req.toastr.error("Something unexpected happend.");
                res.redirect("/industry-box-list")
            })
    }
}