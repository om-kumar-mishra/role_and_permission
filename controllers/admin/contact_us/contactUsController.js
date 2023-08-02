const contact_us=require("../../../models").contact_us
exports.contactUsList=(req,res)=>{
    contact_us.findAll({})
    .then((list)=>{
    res.render("admin/contact_us/list",{title:"Contact Us",userdetials:req.session.user,list:list})

    })
}   