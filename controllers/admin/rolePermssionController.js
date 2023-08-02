const role_and_permission = require("../../models").role_and_permission
const { Op } = require("sequelize");


// add slug
exports.getAddForm = (req, res) => {
  res.render("role_permission/add", { title: "Role And Permission Mangement", userdetials: req.session.user })

}





//store slug
exports.postData = async (req, res) => {

  await role_and_permission.create({
    roleId: DataTypes.INTEGER,
    permission: DataTypes.INTEGER,
    status: 1
  })
    .then((data) => {
      req.toastr.success("Permission is successfully added.");
      res.redirect("/role-and-permission-list")
    })
    .catch((error) => {
      req.toastr.error("Permission is not added.");
      return res.redirect("/role-and-permission-list")
    })
}






//slug list
exports.getList = async (req, res) => {
  await role_and_permission.findAll({})
    .then((list) => {
      res.render("role_permission/list", { title: "Role And Permission Mangement", userdetials: req.session.user, list: list })
    })
}




//delete slug
exports.deleteData = async (req, res) => {
  await role_and_permission.destroy({ where: { id: req.query.id } })
    .then((data) => {
      req.toastr.success("Permission is successfully deleted.");
      return res.redirect("/role-list")
    })
}




//get update slug
exports.getUpdatePage = async (req, res) => {
  await role_and_permission.findOne({ where: { id: req.query.id } })
    .then((data) => {
      res.render("role_permission/update", { title: "Role And Permission Mangement", userdetials: req.session.user, data: data })

    })
}




//store update data
exports.updateStore = async (req, res) => {
  await role_and_permission.update({
    roleId: DataTypes.INTEGER,
    permission: DataTypes.INTEGER,
    
  }, { where: { id: req.body.id} })
    .then((data) => {
      req.toastr.success("Permission is successfully updated.")
      return res.redirect("/role-and-permission-list")
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
let data=await role_and_permission.update({status:change_status},{where:{id:req.query.id}})
res.redirect("/role-and-permission-list")
}

