const ready_to_talk = require("../../../models").ready_to_talk
const { Op } = require("sequelize");
const path = require("path")
const fs = require('fs')

// get add page
exports.getAddPage = (req, res) => {
  res.render("admin/home/ready_to_talk/add", {title:"Ready To Talk ", userdetials: req.session.user })
}



//Ready To Talk add
exports.postData = async (req, res) => {
  try {
    let checkDuplicate = await ready_to_talk.findOne({ where: { title: req.body.title.trim() } })

    if (checkDuplicate)
     {
      req.toastr.error("Title is already exist.");
      res.redirect("/add-ready-to-talk")
    }
    else
    {
    let data = await ready_to_talk.create({
      icon: req.file.filename,
      title: req.body.title.trim(),
      description: req.body.description
    })

    if (data)
     {
      req.toastr.success("Ready To Talk is successfully added.");
      res.redirect("/ready-to-talk-list")
    }  
  }
}
  catch (error) {
    req.toastr.error("Ready To Talk is not added.");
    res.render("admin/home/ready_to_talk/add", {title:"Ready To Talk ", userdetials: req.session.user })

  }
}





// show list of rady to talk
exports.getlList = async (req, res) => {
  await ready_to_talk.findAll({})
    .then((list) => {
      res.render("admin/home/ready_to_talk/list", {title:"Ready To Talk ", userdetials: req.session.user, list: list })
    })
}



//delete security service
exports.deleteData = async (req, res) => {
  try {
    await ready_to_talk.destroy({ where: { id: req.query.id } }).then((data) => {
      req.toastr.success("Ready To Talk is successfully deleted.");
      res.redirect("/ready-to-talk-list")
    }).catch((data) => {
      req.toastr.error("Ready To Talk is not deleted.");
      res.redirect("/ready-to-talk-list")
    })
  }
  catch (error) {
    req.toastr.error("Ready To Talk is not deleted.");
    res.redirect("/ready-to-talk-list")
  }
}


//get update page
exports.getUpdatePage = async (req, res) => {
  try {
    await ready_to_talk.findOne({ where: { id: req.query.id } })
      .then((data) => {
        res.render("admin/home/ready_to_talk/update", {title:"Ready To Talk ", userdetials: req.session.user, data: data })
      })
      .catch((error) => {
        res.redirect("/ready-to-talk-list")
      })
  }
  catch (error) {
    res.redirect("/ready-to-talk-list")
  }
}


//update security
exports.updateStore = async (req, res) => {
  try {
    // if (req.file) {
    //       if(req.body.oldImage)
    //       {
    //         console.log("==================",path.join(__dirname,"..","..",  "public", "uploaded-files", `${req.body.oldImage}`))
    //         await fs.unlinkSync(path.join(__dirname,"..","..",  "public", "uploaded-files", `${req.body.oldImage}`))
    //       }
     
    // }
    
    let duplicate = await ready_to_talk.findOne({ where: { title: req.body.title, id: { [Op.not]: req.body.id } } })

    if (duplicate) {
      console.log(duplicate)
      req.toastr.error("Title is already exist.");
      return res.redirect("/ready-to-talk-list")
    }
    else{
    ready_to_talk.update({
      icon: (req.file) ? req.file.filename : req.body.oldImage,
      title: req.body.title,
      description: req.body.description
    }, { where: { id: req.body.id } })
      .then(() => {
        req.toastr.success("Ready To Talk is successfully updated.");
        res.redirect("/ready-to-talk-list")
      })
      .catch((error) => {
        res.redirect("/ready-to-talk-list")
      })
  }
}
  catch (error) {
    req.toastr.error("Ready To Talk is not updated.");
    res.redirect("/ready-to-talk-list")
  }
}