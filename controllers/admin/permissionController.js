const Permission = require("../../models").permission
const { Op } = require("sequelize");


// add slug
exports.slug = (req, res) => {
  res.render("permission/add", { title: "Permission Mangement", userdetials: req.session.user })

}





//store slug
exports.slugStore = async (req, res) => {
  try {


    let check_data = await Permission.findOne({ where: { title: req.body.name.trim() } })

    if (check_data) {
      req.toastr.error("Name is already exist.");
      return res.redirect("/slug")
    }
  }
  catch (error) {
    console.log("Error===", error.message)

  }

  let t = req.body.name
  const regex = /" "/g;
  let slugName = t.replace(/\W+/g, '_');
  await Permission.create({
    name: req.body.name,
    sort_name: slugName,
    status: 1
  })
    .then((data) => {
      req.toastr.success("Permission is successfully added.");
      res.redirect("/permission-list")
    })
    .catch((error) => {
      req.toastr.error("Permission is not added.");
      return res.redirect("/permission-list")
    })
}






//slug list
exports.slugList = async (req, res) => {
  await Permission.findAll({})
    .then((list) => {
      res.render("permission/list", { title: "Permission Mangement", userdetials: req.session.user, list: list })
    })
}




//delete slug
exports.deleteSlug = async (req, res) => {
  console.log("req.query.slugName=====",req.query.slugName)
  await Permission.destroy({ where: { sort_name: req.query.slugName } })
    .then((data) => {
      req.toastr.success("Permission is successfully deleted.");
      return res.redirect("/permission-list")
    })
}



///fdsfdsfsfsfsdfdsfdf

//get update slug
exports.updateSlug = async (req, res) => {
  await Permission.findOne({ where: { sort_name: req.query.slugName } })
    .then((data) => {
      res.render("permission/update", { title: "Permission Mangement", userdetials: req.session.user, data: data })

    })
}




//store update data
exports.updateSlugStore = async (req, res) => {
  let check_data = await Permission.findOne({ where: { name: req.body.name.trim(), id: { [Op.not]: req.body.slugId } } })
  if (check_data) {
    req.toastr.error("Title is already exist.");
    return res.redirect("/permission-list")
  }

  await Permission.update({
    name: req.body.name,
  }, { where: { id: req.body.slugId } })
    .then((data) => {
      req.toastr.success("Permission is successfully updated.")
      return res.redirect("/permission-list")
    })
}



exports.status=async(req,res)=>{
  let change_status=""
if(req.query.status=="active")
{
  change_status=0
}
else{
  change_status=1
}
let data=await Permission.update({status:change_status},{where:{id:req.query.id}})
res.redirect("/permission-list")
}
