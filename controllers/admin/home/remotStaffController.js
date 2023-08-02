const remote_staff = require("../../../models").remote_staff
const { Op } = require("sequelize");
const path = require("path")
const fs = require('fs')

//get add page
exports.getAddPage = (req, res) => {
    res.render("admin/home/remote_staff/add", { title: "Remote Staff", userdetials: req.session.user })
}




//post data
exports.postData = async (req, res) => {

    let checkDuplicate = await remote_staff.findOne({ where: { title: req.body.title.trim() } })
    if (checkDuplicate) {
        req.toastr.error("title is already exist.");
        return res.redirect("/remote-staff-list")
    }
    else {
        let data = await remote_staff.create({
            title: req.body.title.trim(),
            description: req.body.description,
            icon: req.file.filename
        })
        req.toastr.success("Remote Staff is successfully added.");
        res.redirect("/remote-staff-list")
    }
}



//get list    
exports.getlList = (req, res) => {
    remote_staff.findAll({})
        .then((data) => {
            res.render("admin/home/remote_staff/list", { title: "Remote Staff", userdetials: req.session.user, list: data })
        })
}


//delete data
exports.deleteData = (req, res) => {
    remote_staff.destroy({ where: { id: req.query.id } })
        .then((data) => {
            req.toastr.success("Remote Staff is successfully deleted.");
            res.redirect("/remote-staff-list")
        })
        .catch((error) => {
            req.toastr.error("Something unexpected happend.");
            res.redirect("/remote-staff-list")
        })
}


//get upadate page
exports.getUpdatePage = (req, res) => {

    remote_staff.findOne({ where: { id: req.query.id } })
        .then((data) => {
            res.render("admin/home/remote_staff/update", { title: "Remote Staff", userdetials: req.session.user, data: data })
        })
}



// update store
exports.updateStore = async (req, res) => {
    let getoldImage = await remote_staff.findOne({ where: { id: req.body.id } })
    let check_title = await remote_staff.findOne({ where: { title: req.body.title.trim(), id: { [Op.not]: req.body.id } } })

    // if (req.file) {
    //     await fs.unlinkSync(path.join(__dirname, "..", "..", "public", "/uploaded-files", `${getoldImage.icon}`))
    // }



    if (check_title) {
        req.toastr.error("Title is already exist.");
        return res.redirect("/remote-staff-list")
    }
    else {
        remote_staff.update({
            title: req.body.title.trim(),
            description: req.body.description,
            icon: (req.file) ? req.file.filename : getoldImage.icon
        }, { where: { id: req.body.id } })
            .then((data) => {
                req.toastr.success("remote staff is sucessfully updated.");
                res.redirect("/remote-staff-list")
            })
            .catch((error) => {
                req.toastr.error("Something unexpected happend.");
                res.redirect("/remote-staff-list")
            })
    }
}