const images = require("../../../models").images
const { Op } = require("sequelize");
const path = require("path")
const fs = require('fs')

//get add page
exports.getAddPage = (req, res) => {
    res.render("admin/gallary/images/add", { title: "Images  ", userdetials: req.session.user })
}




//post data
exports.postData = async (req, res) => {
    let data = await images.create({
        image: req.file.filename,
    })

    req.toastr.success("Images is successfully added.");
    res.redirect("/common-image-list")
}




//get list
exports.getlList = async (req, res) => {
    let list = await images.findAll({})
    res.render("admin/gallary/images/list", { title: "Images  ", userdetials: req.session.user, list: list })

}



//delete data
exports.deleteData = async (req, res) => {
    let data = await images.destroy({ where: { id: req.query.id } })
    req.toastr.success("Images is successfully deleted.");
    res.redirect("/common-image-list")

}




//get update page
exports.getUpdatePage = async (req, res) => {
    let data = await images.findOne({ where: { id: req.query.id } })
    res.render("admin/gallary/images/update", { title: "Images  ", userdetials: req.session.user, data: data })
}




//updated data store
exports.updateStore = async (req, res) => {
    let oldImage = await images.findOne({ where: { id: req.body.id } })
    if (req.file) {
        await fs.unlinkSync(path.join(__dirname, "..", "..", "..", "public", "/uploaded-files", `${oldImage.image}`))
    }

    await images.update({
        image: (req.file) ? req.file.filename : oldImage.image,
    }, { where: { id: req.body.id } })
        .then((data) => {
            req.toastr.success("Images is successfully updated.");
            res.redirect("/common-image-list")
        }).catch((data) => {
            req.toastr.error("Images is not updated.");
            res.render("admin/gallary/images/update", { title: "Images  ", userdetials: req.session.user,  errorMessage: "Images is not update" })
        })
}