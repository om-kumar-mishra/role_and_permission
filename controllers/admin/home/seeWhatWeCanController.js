const see_what_we_can = require("../../../models").see_what_we_can
const { Op } = require("sequelize");
const path = require("path")
const fs = require('fs')

//get add page
exports.getAddPage = (req, res) => {
    let hasValue=false
    req.session?.permissions?.forEach(async(element1,index)=>{
        if(element1.permission_slug=="add_see_what_we_can")
        {
           
            hasValue=true
           
        }
       
})
if(hasValue)
{

    res.render("admin/home/see_what_we_can/add", { title: "See what we can", userdetials: req.session.user })
}
else{
    req.toastr.success("you have not permission");
    return res.redirect("/error-page") 
}

   
}


//post data
exports.postData = async (req, res) => {
    let checkDuplicate = await see_what_we_can.findOne({ where: { title: req.body.approach_title.trim() } })


    if (checkDuplicate) {
        req.toastr.error("title is already exist.");
        return res.redirect("/add-see-what")
    }
    else {
        let data = await see_what_we_can.create({
            title: req.body.approach_title.trim(),
            description: req.body.description,
            icon: req.file.filename
        })
        req.toastr.success("See what we can is successfully added.");
        res.redirect("/see-what-list")
    }
}





//get list
exports.getlList = (req, res) => {

    let hasValue=false
    req.session?.permissions?.forEach(async(element1,index)=>{
        if(element1.permission_slug=="view_see_what_we_can")
        {
           
            hasValue=true
           
        }
       
})
if(hasValue)
{

    see_what_we_can.findAll({})
        .then((data) => {
            res.render("admin/home/see_what_we_can/list", { title: "See what we can", userdetials: req.session.user, list: data })
        })
}
else{
    req.toastr.success("you have not permission");
    return res.redirect("/error-page") 
}

   
}


//delete data
exports.deleteData = (req, res) => {

    let hasValue=false
    req.session?.permissions?.forEach(async(element1,index)=>{
        if(element1.permission_slug=="delete_see_what_we_can")
        {
           
            hasValue=true
           
        }
       
})
if(hasValue)
{

    see_what_we_can.destroy({ where: { id: req.query.id } })
    .then((data) => {
        req.toastr.success("See what we can is successfully deleted.");
        res.redirect("/see-what-list")
    })
    .catch((error) => {
        req.toastr.error("Something unexpected happend.");
        res.redirect("/see-what-list")
    })
}
else{
    req.toastr.success("you have not permission");
    return res.redirect("/error-page") 
}


    
}



//get update page
exports.getUpdatePage = (req, res) => {
    let hasValue=false
    req.session?.permissions?.forEach(async(element1,index)=>{
        if(element1.permission_slug=="edit_see_what_we_can")
        {
           
            hasValue=true
           
        }
       
})
if(hasValue)
{

    
    see_what_we_can.findOne({ where: { id: req.query.id } })
        .then((data) => {
            res.render("admin/home/see_what_we_can/update", { title: "See what we can", userdetials: req.session.user, data: data })
        })
}
else{
    req.toastr.success("you have not permission");
    return res.redirect("/error-page") 
}


   
}



//update store
exports.updateStore = async (req, res) => {
    let getoldImage = await see_what_we_can.findOne({ where: { id: req.body.id } })
    let check_title = await see_what_we_can.findOne({ where: { title: req.body.approach_title.trim(), id: { [Op.not]: req.body.id } } })
    //let updateBannerImage=  await see_what_we_can.findOne({where:{id:req.body.approach_id}})

    //  if(req.file)
    //  {
    //     // console.log("======================",path.join(__dirname,"..","..","public","/uploaded-files",`${getoldImage.icon}`))
    //   await  fs.unlinkSync(path.join(__dirname,"..","..","public","/uploaded-files",`${getoldImage.icon}`))
    //  }



    if (check_title) {
        req.toastr.error("Title is already exist.");
        return res.redirect("/see-what-list")
    }
    see_what_we_can.update({
        title: req.body.approach_title.trim(),
        description: req.body.description,
        icon: (req.file) ? req.file.filename : getoldImage.icon
    }, { where: { id: req.body.id } })
        .then((data) => {
            req.toastr.success("See what we can is sucessfully updated.");
            res.redirect("/see-what-list")
        })
        .catch((error) => {
            req.toastr.error("Something unexpected happend.");
            res.redirect("/see-what-list")
        })
}