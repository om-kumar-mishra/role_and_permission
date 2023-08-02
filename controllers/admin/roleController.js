const role = require("../../models").role
const permission = require("../../models").permission
const role_and_permission = require("../../models").role_and_permission
const model_table = require("../../models").model_table



const { Op } = require("sequelize");
const path = require("path")
const fs = require('fs')

//get add page
exports.getAddPage = (req, res) => {

    let hasValue=false
    req.session?.permissions?.forEach(async(element1,index)=>{
        if(element1.permission_slug=="add_role")
        {
           
            hasValue=true
           
        }
       
})
if(hasValue)
{

    
    res.render("role/add", { title: "Role", userdetials: req.session.user })
}
else{
    req.toastr.success("you have not permission");
    return res.redirect("/error-page") 
}


   
}




//post data
exports.postData = async (req, res) => {
    //   console.log("role name =", req.body)
    let checkDuplicate = await role.findOne({ where: { role_name: req.body.role_name.trim() } })
    if (checkDuplicate) {
        req.toastr.error("role is already exist.");
        return res.redirect("/role-list")
    }
    else {
        let data = await role.create({
            role_name: req.body.role_name.trim()
        })
        req.toastr.success("Role  is successfully added.");
        res.redirect("/role-list")
    }
}



//get list    
exports.getlList = (req, res) => {

    let hasValue=false
    req.session?.permissions?.forEach(async(element1,index)=>{
        if(element1.permission_slug=="view_role")
        {
           
            hasValue=true
           
        }
       
})
if(hasValue)
{
    role.findAll({})
    .then((data) => {
        res.render("role/list", { title: "Role", userdetials: req.session.user, list: data })
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
        if(element1.permission_slug=="delete_role")
        {
           
            hasValue=true
           
        }
       
})
if(hasValue)
{
    role.destroy({ where: { id: req.query.id } })
        .then((data) => {
            req.toastr.success("Role  is successfully deleted.");
            res.redirect("/role-list")
        })
        .catch((error) => {
            req.toastr.error("Something unexpected happend.");
            res.redirect("/role-list")
        })
}
else{
    req.toastr.success("you have not permission");
    return res.redirect("/error-page") 
}





  
}


//get upadate page
exports.getUpdatePage = (req, res) => {
    
    let hasValue=false
    req.session?.permissions?.forEach(async(element1,index)=>{
        if(element1.permission_slug=="edit_role")
        {
           
            hasValue=true
           
        }
       
})
if(hasValue)
{
    role.findOne({ where: { id: req.query.id } })
    .then((data) => {
        res.render("role/update", { title: "Role", userdetials: req.session.user, data: data })
    })
}
else{
    req.toastr.success("you have not permission");
    return res.redirect("/error-page") 
}




  
}



// update store
exports.updateStore = async (req, res) => {
    console.log("req.body.role_name==", req.body.role_name)
    let check_role = await role.findOne({ where: { role_name: req.body.role_name.trim(), id: { [Op.not]: req.body.id } } })

    if (check_role) {
        req.toastr.error("Role is already exist.");
        return res.redirect("/role-list")
    }
    else {
        role.update({
            role_name: req.body.role_name.trim()
        }, { where: { id: req.body.id } })
            .then((data) => {
                req.toastr.success("Role  is sucessfully updated.");
                res.redirect("/role-list")
            })
            .catch((error) => {
                req.toastr.error("Something unexpected happend.");
                res.redirect("/role-list")
            })
    }
}

//add permission
exports.getPermission = async (req, res) => {
    
    let hasValue=false
    req.session?.permissions?.forEach(async(element1,index)=>{
        if(element1.permission_slug=="assign_permission")
        {
           
            hasValue=true
           
        }
       
})
if(hasValue)
{
    let all_model = await model_table.findAll({});
    let roleByPermission = await role_and_permission.findAll({
        include: [{
            model: role,
            as: "Role"
        }
            , {
            model: permission,
            as: "Permission"
        }],

        where: { roleId: req.query.id }
    });

    let Role = await role.findOne({
        where: { id: req.query.id }
    });

    console.log("role_id====", req.query.id)

 let role_by_per=await   role_and_permission.findAll({where:{roleId: req.query.id}})



    // let role_id = req.query.id
    let r_name = await role.findOne({ where: { id: req.query.id } })
    let permission_data = await permission.findAll({})
    console.log("req.session.permission=============", role_by_per)
    let per_id_array = [];
    role_by_per.forEach((element, index) => {
        per_id_array.push(element.permission)
    })
    console.log("per_id_array====", per_id_array)
    res.render("role/add_permission",
        {
            title: "Add Permission",
            userdetials: req.session.user,
            user_permission: req.session.permission,

            permission_data: permission_data,
            role_object: r_name,
            roleByPermission: roleByPermission,
            all_model: all_model,
            per_id_array: per_id_array,
            Role: Role,
            // role_by_per:role_by_per
        })
}
else{
    req.toastr.success("you have not permission");
    return res.redirect("/error-page") 
}





   
}





//give permission
// exports.givePermission1 = async (req, res) => {


//     console.log(" res.body.permission_name================", req.body.permission_name)
//     console.log("role_id    =", req.body.role_id)
//     let old_role_id = await role_and_permission.findOne({
//         where: {
//             roleId: req.body.role_id,

//         }
//     })
//     const data = await role_and_permission.destroy({
//         where: {
//             roleId: req.body.role_id
//         }
//     })
//     let r_name = await role.findOne({ where: { id: req.body.role_id } })

//     if (Array.isArray(req.body.permission_name)) {

//         // if (old_role_id) {
//         //     req.body.permission_name.forEach(async element => {
//         //         await role_and_permission.update({
//         //             roleId: req.body.role_id,
//         //             permission:  Number(element),
//         //             role_name: r_name.role_name,

//         //         }, { where: { roleId: req.body.role_id, permission: Number(req.body.permission_name) } })
//         //     });

//         //     req.toastr.success("Permission succesful updated.");
//         //     res.redirect("/role-list")
//         // }
//         // else {


//         req.body.permission_name.forEach(async element => {


//             let s_name = await permission.findOne({ where: { id: Number(element) } })

//             role_and_permission.create({
//                 roleId: req.body.role_id,
//                 permission: Number(element),
//                 permission_slug: s_name.sort_name,
//                 role_name: r_name.role_name,
//                 status: 1
//             })
//         })
//         req.toastr.success("Permission succesful added.");
//         res.redirect("/role-list")
//     }




//     // }
//     else {
//         if (old_role_id) {
//             await role_and_permission.update({
//                 roleId: req.body.role_id,
//                 permission: req.body.permission_name,
//                 role_name: r_name.role_name,
//             }, { where: { roleId: req.body.role_id, permission: Number(req.body.permission_name) } })
//             req.toastr.success("Permission succesfully updated.");
//             res.redirect("/role-list")
//         }
//         else {
//             let s_name = await permission.findOne({ where: { id: Number(element) } })
//             role_and_permission.create({
//                 roleId: req.body.role_id,
//                 permission: Number(req.body.permission_name),
//                 permission_slug: s_name.sort_name,
//                 role_name: r_name.role_name,
//                 status: 1
//             })
//             req.toastr.success("Permission succesfully added.");
//             res.redirect("/role-list")

//         }

//     }



//     // if (req.body.permission_name) {
//     //     if (old_role_id) {
//     //         console.log("update")
//     //         if (Array.isArray(req.body.permission_name)) {
//     //             console.log("update array")
//     //             req.body.permission_name.forEach(async (element) => {
//     //                 let checkpermission = await role_and_permission.findOne({ where: { roleId: Number(req.body.role_id), permission: Number(element) } })


//     //                 if (checkpermission) {
//     //                     role_and_permission.update({
//     //                         roleId: req.body.role_id,
//     //                         permission: Number(element),
//     //                     }, { where: { roleId: Number(req.body.role_id), permission: element } })
//     //                     req.toastr.success("Permission succesful updated.");
//     //                     res.redirect("/role-list")
//     //                 }
//     //                 else {
//     //                     role_and_permission.create({
//     //                         roleId: req.body.role_id,
//     //                         permission: Number(element),
//     //                         status: 1
//     //                     })

//     //                 }

//     //             });

//     //         }

//     //         else {
//     //             console.log("update single")

//     //             let checkpermission = await role_and_permission.findOne({ where: { roleId: Number(req.body.role_id), permission: Number(req.body.permission_name) } })
//     //             console.log("checkpermission=====", checkpermission)
//     //             if (checkpermission) {
//     //                 await role_and_permission.update({
//     //                     roleId: req.body.role_id,
//     //                     permission: req.body.permission_name,
//     //                 }, { where: { roleId: Number(req.body.role_id), permission: Number(req.body.permission_name) } })

//     //                 req.toastr.success("Permission successful updated.");
//     //                 res.redirect("/role-list")
//     //             }
//     //             else {

//     //                 role_and_permission.create({
//     //                     roleId: req.body.role_id,
//     //                     permission: Number(req.body.permission_name),
//     //                     status: 1
//     //                 })


//     //             }

//     //         }

//     //     }
//     //     else {
//     //         console.log("create")

//     //         if (Array.isArray(req.body.permission_name)) {

//     //             req.body.permission_name.forEach(async (element) => {
//     //                 let checkpermission = await role_and_permission.findOne({ where: { roleId: Number(req.body.role_id), permission: Number(req.body.permission_name) } })
//     //                 if (checkpermission) {
//     //                     role_and_permission.update({
//     //                         roleId: req.body.role_id,
//     //                         permission: Number(element),
//     //                     }, { where: { roleId: Number(req.body.role_id), permission: element } })
//     //                     req.toastr.success("Permission succesful updated.");
//     //                     res.redirect("/role-list")
//     //                 }
//     //                 else {
//     //                     role_and_permission.create({
//     //                         roleId: req.body.role_id,
//     //                         permission: Number(element),
//     //                         status: 1
//     //                     })


//     //                 }
//     //             });
//     //         }
//     //         else {
//     //             let checkpermission = await role_and_permission.findOne({ where: { roleId: Number(req.body.role_id), permission: Number(req.body.permission_name) } })

//     //             if (checkpermission) {
//     //                 await role_and_permission.update({
//     //                     roleId: req.body.role_id,
//     //                     permission: req.body.permission_name,
//     //                 }, { where: { roleId: Number(req.body.role_id), permission: Number(req.body.permission_name) } })

//     //                 req.toastr.success("Permission successful updated.");
//     //                 res.redirect("/role-list")
//     //             }
//     //             else {
//     //                 role_and_permission.create({
//     //                     roleId: req.body.role_id,
//     //                     permission: Number(req.body.permission_name),
//     //                     status: 1
//     //                 })
//     //             }



//     //         }

//     //         req.toastr.success("Permission succesful added.");
//     //         res.redirect("/role-list")
//     //     }

//     // }
// }


exports.givePermission = async (req, res) => {
    try {
        const id = req.body.role_id;
        console.log('role_id==:',id);
        console.log('permission==:',req.body.permission_name);
        const deleteRolePerm = await role_and_permission.destroy({
            where: {
                roleId: id
            }
        });
        console.log('delete role perm:',deleteRolePerm);
        let r_name = await role.findOne({ where: { id: req.body.role_id } })
        if (Array.isArray(req.body.permission_name)) {
            req.body.permission_name.forEach(async (element) => {
                let s_name = await permission.findOne({ where: { id: Number(element) } })
                let addnewrolePermission = await role_and_permission.create({
                    roleId: req.body.role_id,
                    permission: Number(element),
                    permission_slug: s_name.sort_name,
                    role_name: r_name.role_name,
                    model_name: s_name.module_name,
                    status: 1
                });
                console.log('array addnewrolepermission::',addnewrolePermission);
            })
        } else {
            let s_name = await permission.findOne({ where: { id: req.body.permission_name } });
            let addnewrolePermission = await role_and_permission.create({
                roleId: req.body.role_id,
                permission: req.body.permission_name,
                permission_slug: s_name.sort_name,
                role_name: r_name.role_name,
                model_name: s_name.module_name,
                status: 1
            });
            console.log(`Single addnewrolepermission::`,addnewrolePermission);
        }


        console.log(" req.session.user.type_user====",req.session.user.type_user)

        // let all_permission = await role_and_permission.findAll({
        //     where: { roleId:  req.session.user.type_user }
        //   })
      
        // req.session.permission = all_permission;
        // console.log("req.session.permission check========",req.session.permission,"=============",all_permission)
        req.toastr.success("Permission succesful added.");
        res.redirect("/role-list")

    } catch (error) {
        console.log("error",error)
        req.toastr.success("Permission succesful added.");
        res.redirect("/role-list")
        
    }
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
    //             res.redirect("/role-list")
    //         }
    //         else {

    //            await role_and_permission.update({
    //                 roleId: req.body.role_id,
    //                 permission: req.body.permission_name,
    //             }, { where: {  permission: Number(req.body.permission_name) } })

    //             req.toastr.success("Permission successful updated.");
    //             res.redirect("/role-list")

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
    //             res.redirect("/role-list")
    //         }
    //         else {

    //             role_and_permission.create({
    //                 roleId: req.body.role_id,
    //                 permission: Number(req.body.permission_name),
    //                 status: 1
    //             })


    //         }

    //         req.toastr.success("Permission succesful added.");
    //         res.redirect("/role-list")
    //     }
    // }

