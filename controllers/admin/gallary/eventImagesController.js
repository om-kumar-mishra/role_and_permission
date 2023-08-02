const event_images = require("../../../models").event_images
const event = require("../../../models").event
const {Eventimages,Event} = require("../../../model1/EventRelationMongoose")
const { Op } = require("sequelize");
const path = require("path")
const fs = require('fs')







//get add page
exports.getAddPage = (req, res) => {

    res.render("admin/gallary/event_images/add", { title: "Event Images", userdetials: req.session.user, event_id: req.query.event_id })
}



//post data
exports.postData = async (req, res) => {

    if (req.files) {
        req.files.forEach(element => {

            const eventImages = new Eventimages({
                image: element.filename,
                event_id: req.body.eventId // Associate the author's _id with the book
            });
            eventImages.save()
                .then((result) => {
                    req.toastr.success("Event Images  is successfully added.");
                    return res.redirect("/event-list")
                })
                .catch((error) => {
                    req.toastr.success("Something unexpected happened.");
                    return res.redirect("/event-list")
                })
        });
        //    req.toastr.success("Event Images  is successfully added.");
        //    res.redirect("/event-list")
    }
    else {
        req.toastr.success("Something unexpected happened.");
        res.redirect("/event-list")
    }

}




//get list
exports.getlList = async (req, res) => {
    let event_id = req.query.event_id;
    let list
    if (event_id) {
            Eventimages.find({ event_id: event_id })
            .populate('event_id') // Populate the author field with the full author object
            .exec().then((list)=>{
                console.log('finding event: 11', list);
                res.render("admin/gallary/event_images/list", { title: "Event Images", userdetials: req.session.user, list: list, event_id: event_id })
            })
            .catch((err)=>{
                console.log('Books:', books);
            })
               

    }
    else {

         Eventimages.find()
            .populate('event_id') // Populate the author field with the full author object
            .exec().then((list)=>{
               
                console.error('finding event: 22', list);
                res.render("admin/gallary/event_images/list", { title: "Event Images", userdetials: req.session.user, list: list, event_id: event_id })
            }) 
            .catch((books)=>{
                console.log('Books:', books);
            }) 
                       

    }
  

  

}




//delete data
exports.deleteData = async (req, res) => {
    // let data = await event_images.destroy({ where: { id: req.query.id } })
    // req.toastr.success("Event Images  is successfully deleted.");
    // res.redirect("/event-list")

    Eventimages.deleteOne({ _id: req.query.id }).then((result) => {
        req.toastr.success("Event Images  is successfully deleted.");
         res.redirect("/event-list")
    })
        .catch((error) => {
            req.toastr.success("Event Images  is not deleted.");
            res.redirect("/event-list")
        })

}





//get update page
exports.getUpdatePage = async (req, res) => {

    let data = await Eventimages.findOne({  _id: req.query.id  })
    res.render("admin/gallary/event_images/update", { title: "Event Images", userdetials: req.session.user, data: data })

}



//update store
exports.updateStore = async (req, res) => {
    let oldImage = await Eventimages.findOne({ _id: req.body.id })

    // if (req.file) {
    //     await fs.unlinkSync(path.join(__dirname, "..", "..", "..", "public", "/uploaded-files", `${oldImage.image}`))
    // }
  
    Eventimages.findOne({_id: req.body.id})
    .then((result)=>{
        result.image=(req.file) ? req.file.filename : oldImage.image,
        result.event_id=req.body.event_id
        result.save()
        .then((data)=>{
            req.toastr.success("Event Images  is successfully updated.");
            res.redirect("/event-list")
        })
        .catch((error)=>{
            req.toastr.error("Event Images  is not updated.");
            res.redirect("/event-list")
        })
    })
    .catch((error)=>{
        req.toastr.error("Event Images  is not updated.");
        res.redirect("/event-list")
    })  
    //   await Eventimages.update({
    //     image: (req.file) ? req.file.filename : oldImage.image,
    //     event_id: req.body.event_id
    // }, { where: { id: req.body.id } }).then((data) => {
    //     req.toastr.success("Event Images  is successfully updated.");
    //     res.redirect("/event-list")
    // }).catch((data) => {
    //     req.toastr.error("Event Images  is not updated.");

    //     res.render("admin/gallary/event_images/update", { title: "Event Images", userdetials: req.session.user })
    // })
}