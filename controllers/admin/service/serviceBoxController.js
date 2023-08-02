const service_box = require("../../../models").service_box
const { Op } = require("sequelize");
const path = require("path")
const fs = require('fs')


//get add page
exports.getAddPage = (req, res) => {
    res.render("admin/service/service_box/add", { title: "Service Box", userdetials: req.session.user })
}




//post data
exports.postData = async (req, res) => {
    let checkDuplicate = await service_box.findOne({ where: { title: req.body.title.trim() } })
    if (checkDuplicate) {
        req.toastr.error("title is already exist.");
        return res.redirect("/service-box-list")

    }
    else {
        let data = await service_box.create({
            title: req.body.title.trim(),
            description: req.body.description,
            icon: req.file.filename
        })
        req.toastr.success("Service Box is successfully added.");
        res.redirect("/service-box-list")
    }
}



//get list
exports.getlList = (req, res) => {
    service_box.findAll({})
        .then((data) => {
            res.render("admin/service/service_box/list", { title: "Service Box", userdetials: req.session.user, list: data })
        })
}


//delete data
exports.deleteData = (req, res) => {
    service_box.destroy({ where: { id: req.query.id } })
        .then((data) => {
            req.toastr.success("Service Box is successfully deleted.");
            res.redirect("/service-box-list")
        })
        .catch((error) => {
            req.toastr.error("Something unexpected happend.");
            res.redirect("/service-box-list")
        })
}



//get  updated page
exports.getUpdatePage = (req, res) => {

    service_box.findOne({ where: { id: req.query.id } })
        .then((data) => {
            res.render("admin/service/service_box/update", { title: "Service Box", userdetials: req.session.user, data: data })
        })
}


//store updated data
exports.updateStore = async (req, res) => {
    let getoldImage = await service_box.findOne({ where: { id: req.body.id } })
    let check_title = await service_box.findOne({ where: { title: req.body.title.trim(), id: { [Op.not]: req.body.id } } })

    if (req.file) {
        await fs.unlinkSync(path.join(__dirname, "..", "..", "..", "public", "/uploaded-files", `${getoldImage.icon}`))
    }



    if (check_title) {
        req.toastr.error("Title is already exist.");
        return res.redirect("/service-box-list")
    }
    else {
        service_box.update({
            title: req.body.title.trim(),
            description: req.body.description,
            icon: (req.file) ? req.file.filename : getoldImage.icon
        }, { where: { id: req.body.id } })
            .then((data) => {
                req.toastr.success("Service Box is sucessfully updated.");
                res.redirect("/service-box-list")
            })
            .catch((error) => {
                req.toastr.error("Something unexpected happend.");
                res.redirect("/service-box-list")
            })
    }
}