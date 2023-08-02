const signup = require("../../models").signup
const Role = require("../../models").role

const { Op } = require("sequelize");


// add slug
exports.getAddForm = (req, res) => {
  res.render("signup/add", { title: "Signup Form", userdetials: req.session.user })

}

//store slug
exports.postData = async (req, res) => {

  await signup.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
  
    status: 1
  })
    .then((data) => {
      req.toastr.success("Successfulis successfully added.");
      res.redirect("/signup-list")
    })
    .catch((error) => {
      req.toastr.error("Successfulis not added.");
      return res.redirect("/signup-list")
    })
}






//slug list
exports.getList = async (req, res) => {

  let hasValue=false
    req.session?.permissions?.forEach(async(element1,index)=>{
        if(element1.permission_slug=="view_user")
        {
           
            hasValue=true
           
        }
       
})
if(hasValue)
{
  await signup.findAll({

    include: [{
      model: Role,
      as: "role"
  }]
     
  })
    .then((list) => {
      res.render("signup/list", { title: "Signup Form", userdetials: req.session.user, list: list })
    })
}
else{
    req.toastr.success("you have not permission");
    return res.redirect("/error-page") 
}



  
}




//delete slug
exports.deleteData = async (req, res) => {

  let hasValue=false
  req.session?.permissions?.forEach(async(element1,index)=>{
      if(element1.permission_slug=="delete_user")
      {
         
          hasValue=true
         
      }
     
})
if(hasValue)
{
await signup.findAll({

  include: [{
    model: Role,
    as: "role"
}]
   
})
await signup.destroy({ where: { id: req.query.id } })
.then((data) => {
  req.toastr.success("Successfulis successfully deleted.");
  return res.redirect("/signup-list")
})
}
else{
  req.toastr.success("you have not permission");
  return res.redirect("/error-page") 
}


 
}



///fdsfdsfsfsfsdfdsfdf

//get update slug
exports.getUpdatePage = async (req, res) => {

  let hasValue=false
  req.session?.permissions?.forEach(async(element1,index)=>{
      if(element1.permission_slug=="edit_user")
      {
         
          hasValue=true
         
      }
     
})
if(hasValue)
{
  let role=await  Role.findAll({})
  let data= await signup.findOne({ where: { id: req.query.id } })
 
   res.render("signup/update", { title: "Signup Form", userdetials: req.session.user,role:role ,data:data})
}
else{
  req.toastr.success("you have not permission");
  return res.redirect("/error-page") 
}



}




//store update data
exports.updateStore = async (req, res) => {
 
  if(req.body.role_type)
  {
    await signup.update({
      type_user:req.body.role_type 
    }, { where: { id: req.body.id} })
      .then((data) => {
        req.toastr.success("Successfulis successfully updated.")
        return res.redirect("/signup-list")
      })
  }
 
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
let data=await signup.update({status:change_status},{where:{id:req.query.id}})
res.redirect("/signup-list")
}



exports.getLoginPage=(req,res)=>{
  res.render("signup/login", { title: "Login Form", userdetials: req.session.user})
}



exports.loginStore=async(req,res)=>{
  console.log("login==================================================================================================")
  let check_email=signup.findOne({ where:{email:req.body.email}})
  if(check_email)
  {
  let logedin=await signup.findOne({
    
    include: [{
      model: Role,
      as: "role"
  }],
    
    where:{email:req.body.email,password:req.body.password}})
  console.log("logedin===",logedin)
  if(logedin)
  {
    console.log("login data====",logedin)
    req.session.loginuser=logedin
    req.toastr.success("successfully login")
    res.redirect("/")
  }
  else{
    req.toastr.error("Fail")
    res.redirect("/get-login-page")
  }

}
else{
  req.toastr.error("Email is not exist")
  res.redirect("/get-login-page")
}
}


exports.errorPage=(req,res)=>{
  res.render("signup/error", { title: "Signup Form", userdetials: req.session.user })
}