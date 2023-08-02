const ourawesometeam = require("../../../models").ourawesometeam
const { Op } = require("sequelize");
const path = require("path")
const fs = require('fs')

//add our awesome team
exports.getAddPage = (req, res) => {
  res.render("admin/home/our_awesome_team/add", { title: "Our Awesome Team ", userdetials: req.session.user })
}



//post our awesome team 
exports.postData = async (req, res) => {
  try {
    let check_duplicate = await ourawesometeam.findOne({ where: { Name: req.body.name.trim() } })

    if (check_duplicate) {
      req.toastr.error(" Name is already exist.");
      return res.redirect("/add-testimonial")
    }
    else {
      await ourawesometeam.create({
        Name: req.body.name.trim(),
        image: req.file.filename,
        message: req.body.message,
        designation: req.body.designation,
        mail: req.body.mail,
        skype: req.body.skype,
        linkedin: req.body.linkedin
      }).then((data) => {
        req.toastr.success("Our Awesome Team is successfully added.");
        res.redirect("/our-awesome-team-list")
      }).catch((error) => {
        req.toastr.success("Our Awesome Team is not added.");
        res.redirect("/our-awesome-team-list")
      })
    }
  }

  catch (error) {
    req.toastr.success("Our Awesome Team is not added.");
    res.redirect("/our-awesome-team-list")
  }
}



//get Our Awesome Team list
exports.getlList = async (req, res) => {
  try {
    await ourawesometeam.findAll({})
      .then((list) => {
        res.render("admin/home/our_awesome_team/list", { title: "Our Awesome Team ", userdetials: req.session.user, list: list })

      })
      .catch((error) => {
        req.toastr.error("Our Awesome is not not found.");
        res.redirect("/our-awesome-team-list")
      })
  } catch (error) {
    req.toastr.error("Our Awesome is not not found.");
    res.redirect("/our-awesome-team-list")
  }
}




//delete our awesome team
exports.deleteData = async (req, res) => {
  try {
    await ourawesometeam.destroy({ where: { id: req.query.id } })
      .then((data) => {
        req.toastr.success("Our Awesome is not not is successfully deleted.");
        res.redirect("/our-awesome-team-list")
      })
      .catch((error) => {
        req.toastr.success("Our Awesome is not not is not deleted.");
        res.redirect("/our-awesome-team-list")
      })
  }
  catch (error) {
    req.toastr.success("Our Awesome is not not is not deleted.");
    res.redirect("/our-awesome-team-list")
  }
}



//get update page
exports.getUpdatePage = async (req, res) => {
  try {
    await ourawesometeam.findOne({ where: { id: req.query.id } })
      .then((data) => {
        res.render("admin/home/our_awesome_team/update", { title: "Our Awesome Team ", userdetials: req.session.user, data: data })

      })
      .catch((error) => {
        req.toastr.error("Our Awesome Team is not found.");
        res.redirect("/our-awesome-team-list")
      })
  }
  catch (error) {
    req.toastr.error("Our Awesome Team is not found.");
    res.redirect("/our-awesome-team-list")
  }
}





//update testimonial
exports.updateStore = async (req, res) => {

  try {

    if (req.file) {
      if (req.body.oldImage) {
        await fs.unlinkSync(path.join(__dirname,"..","..","..", "public", "/uploaded-files", `${req.body.oldImage}`))
      }
    }

    let check_duplicate = await ourawesometeam.findOne({ where: { Name: req.body.name.trim(), id: { [Op.not]: req.body.id } } })
    if (check_duplicate) {
      req.toastr.error("Title is already exist.");
      return res.redirect("/our-awesome-team-list")
    }
else 
{
      await ourawesometeam.update({
        Name: req.body.name.trim(),
        image: (req.file) ? req.file.filename : req.body.oldImage,
        message: req.body.message,
        designation: req.body.designation,
        mail: req.body.mail,
        skype: req.body.skype,
        linkedin: req.body.linkedin
      }, { where: { id: req.body.id } })
        .then((data) => {
          req.toastr.success("Our Awesome Team is successfully updated.");
          res.redirect("/our-awesome-team-list")
        })
        .catch((error) => {
          req.toastr.success("Our Awesome Team is not updated.");
          res.redirect("/our-awesome-team-list")
        })
    }
  }
  catch (error) {
   
    req.toastr.error("Our Awesome Team is not updated.");
    res.redirect("/our-awesome-team-list")
  }
}