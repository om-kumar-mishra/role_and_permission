const event = require("../../../models").event
const { Op } = require("sequelize");
const path = require("path")
const fs = require('fs')
const {Eventimages,Event} = require("../../../model1/EventRelationMongoose")


//get add page
exports.getAddPage = (req, res) => {
    res.render("admin/gallary/event/add", { title: "Event ", userdetials: req.session.user })
}




//post data
exports.postData = async (req, res) => {
    let checkDuplicate = await Event.findOne({ title: req.body.title.trim() } )

    if (checkDuplicate) {
        req.toastr.error("Event is already exist.")
        return res.redirect("/add-event")
    }
    else {

        const data = new Event({
            image: req.file.filename,
            title: req.body.title.trim(),
        })
        const result = await data.save();
        console.log(result
        )



        // let data = await event.create({
        //     image: req.file.filename,
        //     title: req.body.title.trim(),

        // })
        req.toastr.success("Event  is successfully added.");

        res.redirect("/event-list")
    }
}



//get list
exports.getlList = async (req, res) => {
    let list = await Event.find()
    res.render("admin/gallary/event/list", { title: "Event ", userdetials: req.session.user, list: list })

}



//delete data
exports.deleteData = async (req, res) => {
    // let data = await event.destroy({ where: { id: req.query.id } })
    let data = await Event.deleteOne({ _id: req.query.id })

    req.toastr.success("Event  is successfully deleted.");

    res.redirect("/event-list")
}




//get updated data
exports.getUpdatePage = async (req, res) => {
    // let data = await event.findOne({ where: { id: req.query.id } })
    let data = await Event.findOne({ _id: req.query.id } )

    res.render("admin/gallary/event/update", { title: "Event ", userdetials: req.session.user, data: data })

}




exports.updateStore = async (req, res) => {

    let checkDuplicate = await Event.findOne({   title: req.body.title, id: { $ne: req.body.id } })
    let oldImag = await Event.findOne( { _id: req.body.id  })

    // if (req.file) {
    //     await fs.unlinkSync(path.join(__dirname, "..", "..", "..", "public", "/uploaded-files", `${oldImag.image}`))
    // }



    if (checkDuplicate) {
        req.toastr.error("Title is already exist.");
        return res.redirect("/event-list")
    }
    else {
        Event.findOne({ _id: req.body.id})
        .then((result)=>{
            result.image=(req.file) ? req.file.filename : oldImag.image,
            result.title=req.body.title,
            result.save()
            .then((data)=>{
                req.toastr.success("Event  is successfully updated.");
                res.redirect("/event-list")
            })
            .catch((error)=>{
                req.toastr.error("Event  is not updated.");
                res.redirect("/event-list")
            })
        })
        .catch((error)=>{
            req.toastr.error("Event  is not updated.");
            res.redirect("/event-list")
        })

        // await event.update({
        //     image: (req.file) ? req.file.filename : oldImag.image,
        //     title: req.body.title,
        // }, { where: { id: req.body.id } }).then((data) => {
        //     req.toastr.success("Event  is successfully updated.");
        //     res.redirect("/event-list")
        // }).catch((data) => {
        //     req.toastr.error("Event  is not updated.");
        //     res.render("admin/gallary/event/update", { title: "Event ", userdetials: req.session.user, updateBanner: updateBanner, errorMessage: "Event  is not update" })
        // })
    }
}