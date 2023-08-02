const collection_of_model = require("../../models").collection_of_model
// const permission = require("../../models").permission
// const role_and_permission = require("../../models").role_and_permission


const { Op } = require("sequelize");
const path = require("path")
const fs = require('fs')

//get add page
exports.getAddPage = (req, res) => {
    res.render("model/add", {title:"Collection of model", userdetials: req.session.user })
}




//post data
exports.postData = async (req, res) => {
    //   console.log("Collection of model  name =", req.body)
    let checkDuplicate = await collection_of_model.findOne({ where: { Name: req.body.name.trim() } })
    if (checkDuplicate) {
        req.toastr.error("Collection of model  is already exist.");
        return res.redirect("/model-list")
    }
    else {
        let data = await collection_of_model.create({
            Name: req.body.name
        })
        req.toastr.success("Collection of model  is successfully added.");
        res.redirect("/model-list")
    }
}



//get list    
exports.getList = (req, res) => {
    collection_of_model.findAll({})
        .then((data) => {
            res.render("model/list", {title:"Collection of model", userdetials: req.session.user, list: data })
        })
}


//delete data
exports.deleteData = (req, res) => {
    collection_of_model.destroy({ where: { id: req.query.id } })
        .then((data) => {
            req.toastr.success("Collection of model  is successfully deleted.");
            res.redirect("/model-list")
        })
        .catch((error) => {
            req.toastr.error("Something unexpected happend.");
            res.redirect("/model-list")
        })
}


//get upadate page
exports.getUpdatePage = (req, res) => {

    collection_of_model.findOne({ where: { id: req.query.id } })
        .then((data) => {
            res.render("model/update", {title:"Collection of model", userdetials: req.session.user, data: data })
        })
}



// update store
exports.updateStore = async (req, res) => {
  
    let check_role = await collection_of_model.findOne({ where: { Name: req.body.name , id: { [Op.not]: req.body.id } } })

    if (check_role) {
        req.toastr.error("Collection of model  is already exist.");
        return res.redirect("/model-list")
    }
    else {
        collection_of_model.update({
            Name: req.body.name
        }, { where: { id: req.body.id } })
            .then((data) => {
                req.toastr.success("Collection of model  is sucessfully updated.");
                res.redirect("/model-list")
            })
            .catch((error) => {
                req.toastr.error("Something unexpected happend.");
                res.redirect("/model-list")
            })
    }

 
}

//add permission
exports.getPermission = async (req, res) => {
    console.log("role_id====", req.query.id)
    let role_id = req.query.id
    let permission_data = await permission.findAll({})
    res.render("model/add_permission", { title: "Add Permission", userdetials: req.session.user, permission_data: permission_data, role_id: role_id })
}





//give permission
exports.givePermission = async (req, res) => {

    console.log(" res.body.permission_name================", req.body.permission_name)
    console.log("role_id    =", req.body.role_id)
    let old_role_id = await role_and_permission.findOne({ where: { roleId: req.body.role_id , permission:{
        [Op.or]: [{permission: {
            [Op.in]: req.body.permission_name
        } }, {permission: req.body.permission_name}],
        
        } }})

    console.log(old_role_id, "old_role_id===")


    

    // if (req.body.permission_name) {
    //     if (old_role_id) {
    //         console.log("update")
    //         if (Array.isArray(req.body.permission_name)) {
    //             console.log("update array")
    //             req.body.permission_name.forEach(async (element) => {
    //                 let checkpermission = await role_and_permission.findOne({ where: { roleId: Number(req.body.role_id), permission: Number(element) } })


    //                 if (checkpermission) {
    //                     role_and_permission.update({
    //                         roleId: req.body.role_id,
    //                         permission: Number(element),
    //                     }, { where: { roleId: Number(req.body.role_id), permission: element } })
    //                     req.toastr.success("Permission succesful updated.");
    //                     res.redirect("/model-list")
    //                 }
    //                 else {
    //                     role_and_permission.create({
    //                         roleId: req.body.role_id,
    //                         permission: Number(element),
    //                         status: 1
    //                     })

    //                 }

    //             });

    //         }

    //         else {
    //             console.log("update single")

    //             let checkpermission = await role_and_permission.findOne({ where: { roleId: Number(req.body.role_id), permission: Number(req.body.permission_name) } })
    //             console.log("checkpermission=====", checkpermission)
    //             if (checkpermission) {
    //                 await role_and_permission.update({
    //                     roleId: req.body.role_id,
    //                     permission: req.body.permission_name,
    //                 }, { where: { roleId: Number(req.body.role_id), permission: Number(req.body.permission_name) } })

    //                 req.toastr.success("Permission successful updated.");
    //                 res.redirect("/model-list")
    //             }
    //             else {

    //                 role_and_permission.create({
    //                     roleId: req.body.role_id,
    //                     permission: Number(req.body.permission_name),
    //                     status: 1
    //                 })


    //             }

    //         }

    //     }
    //     else {
    //         console.log("create")

    //         if (Array.isArray(req.body.permission_name)) {

    //             req.body.permission_name.forEach(async (element) => {
    //                 let checkpermission = await role_and_permission.findOne({ where: { roleId: Number(req.body.role_id), permission: Number(req.body.permission_name) } })
    //                 if (checkpermission) {
    //                     role_and_permission.update({
    //                         roleId: req.body.role_id,
    //                         permission: Number(element),
    //                     }, { where: { roleId: Number(req.body.role_id), permission: element } })
    //                     req.toastr.success("Permission succesful updated.");
    //                     res.redirect("/model-list")
    //                 }
    //                 else {
    //                     role_and_permission.create({
    //                         roleId: req.body.role_id,
    //                         permission: Number(element),
    //                         status: 1
    //                     })


    //                 }
    //             });
    //         }
    //         else {
    //             let checkpermission = await role_and_permission.findOne({ where: { roleId: Number(req.body.role_id), permission: Number(req.body.permission_name) } })

    //             if (checkpermission) {
    //                 await role_and_permission.update({
    //                     roleId: req.body.role_id,
    //                     permission: req.body.permission_name,
    //                 }, { where: { roleId: Number(req.body.role_id), permission: Number(req.body.permission_name) } })

    //                 req.toastr.success("Permission successful updated.");
    //                 res.redirect("/model-list")
    //             }
    //             else {
    //                 role_and_permission.create({
    //                     roleId: req.body.role_id,
    //                     permission: Number(req.body.permission_name),
    //                     status: 1
    //                 })
    //             }



    //         }

    //         req.toastr.success("Permission succesful added.");
    //         res.redirect("/model-list")
    //     }

    // }
}



    // if (req.body.permission_name) {
    //     if (old_role_id) {
    //         if (Array.isArray(req.body.permission_name)) {
    //             req.body.permission_name.forEach(element => {
    //                 console.log(element, "===================element")
    //               role_and_permission.update({
    //                     roleId: req.body.role_id,
    //                     permission: Number(element),
    //                 }, { where: { permission: element } })
    //             });
    //             req.toastr.success("Permission succesful updated.");
    //             res.redirect("/model-list")
    //         }
    //         else {

    //            await role_and_permission.update({
    //                 roleId: req.body.role_id,
    //                 permission: req.body.permission_name,
    //             }, { where: {  permission: Number(req.body.permission_name) } })

    //             req.toastr.success("Permission successful updated.");
    //             res.redirect("/model-list")

    //         }
    //     }
    //     else {

    //         if (Array.isArray(req.body.permission_name)) {
    //             req.body.permission_name.forEach(element => {
    //                 role_and_permission.create({
    //                     roleId: req.body.role_id,
    //                     permission: Number(element),
    //                     status: 1
    //                 })

    //             });
    //             req.toastr.success("Permission succesful added.");
    //             res.redirect("/model-list")
    //         }
    //         else {

    //             role_and_permission.create({
    //                 roleId: req.body.role_id,
    //                 permission: Number(req.body.permission_name),
    //                 status: 1
    //             })


    //         }

    //         req.toastr.success("Permission succesful added.");
    //         res.redirect("/model-list")
    //     }
    // }

