const video = require("../../../models").video
const { Op } = require("sequelize");
const path = require("path")
const fs = require('fs')


//get add page
exports.getAddPage = (req, res) => {
    res.render("admin/gallary/video/add", { title: "Video", userdetials: req.session.user })
}



//post data
exports.postData = async (req, res) => {
    let checkDuplicate = await video.findOne({ where: { video: req.file.filename } })

    if (checkDuplicate) {
        req.toastr.error("Video   is already exist.");
        return res.redirect("/add-video")
    }
    else {
        let data = await video.create({
            video: req.file.filename,
        })
        req.toastr.success("Video   is successfully added.");
        res.redirect("/common-video-list")
    }
}



//get list
exports.getlList = async (req, res) => {
    let list = await video.findAll({})
    res.render("admin/gallary/video/list", { title: "Video", userdetials: req.session.user, list: list })

}



//delete data
exports.deleteData = async (req, res) => {
    let data = await video.destroy({ where: { id: req.query.id } })
    req.toastr.success("Video   is successfully deleted.");
    res.redirect("/common-video-list")
}




//get update page
exports.getUpdatePage = async (req, res) => {
    let data = await video.findOne({ where: { id: req.query.id } })
    res.render("admin/gallary/video/update", { title: "Video", userdetials: req.session.user, data: data })
}




//update data store
exports.updateStore = async (req, res) => {
    let checkDuplicate = await video.findOne({ where: { video: req.file.filename, id: { [Op.not]: req.body.id } } })
    let oldImage = await video.findOne({ where: { id: req.body.id } })

    if (req.file) {
        await fs.unlinkSync(path.join(__dirname, "..", "..", "..", "public", "/uploaded-files", `${oldImage.video}`))
    }

    if (checkDuplicate) {
        req.toastr.error("Title is already exist.");
        return res.redirect("/common-video-list")
    }
    else {

        await video.update({
            video: (req.file) ? req.file.filename : oldImage.video,
        }, { where: { id: req.body.id } }).then((data) => {

            req.toastr.success("Video   is successfully updated.");
            res.redirect("/common-video-list")
        }).catch((data) => {
            req.toastr.error("Video   is not updated.");
            res.render("admin/gallary/video/update", { title: "Video", userdetials: req.session.user })
        })
    }
}