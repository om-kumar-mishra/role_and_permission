const relax_we_have = require("../../../models").relax_we_have
const { Op } = require("sequelize");
const path = require("path")
const fs = require('fs')


//get relax we have
exports.getAddPage= (req, res) => {
    res.render("admin/home/relax_we_have/add", {title:"Relax We Have", userdetials: req.session.user })
}




//post data
exports.postData = async (req, res) => {

    //let checkDuplicate = await relax_we_have.findOne({ where: { title: req.body.title.trim() } })
  
    let data = await relax_we_have.create({
        // title: req.body.title.trim(),
        // number: req.body.num
        success_champions: req.body.success_champions,
        salesforce_certification: req.body.salesforce,
        happy_customers:  req.body.happy_customers,
        project_delivered:  req.body.project_delivered,
        go_to_market_solution: req.body.market_solutions

    })
    req.toastr.success("Relax we haveis successfully added.");
    res.redirect("/relax-we-have-list")
   }



//get list of relax we have
exports.getlList = (req, res) => {
    relax_we_have.findAll({})
        .then((list) => {
            res.render("admin/home/relax_we_have/list", {title:"Relax We Have", userdetials: req.session.user, list: list })
        })
}


//delete data relax we have
exports.deleteData= (req, res) => {
    relax_we_have.destroy({ where: { id: req.query.id } })
        .then((data) => {
            req.toastr.success("Relax we haveis successfully deleted.");
            res.redirect("/relax-we-have-list")
        })
        .catch((error) => {
            req.toastr.error("Something unexpected happend.");
            res.redirect("/relax-we-have-list")
        })
}


//get update page
exports.getUpdatePage = (req, res) => {
    relax_we_have.findOne({ where: { id: req.query.id } })
        .then((data) => {
            res.render("admin/home/relax_we_have/update", {title:"Relax We Have", userdetials: req.session.user, data: data })
        })
}


//updat store
exports.updateStore = async (req, res) => {

    // let check_title = await relax_we_have.findOne({ where: { title: req.body.title.trim(), id: { [Op.not]: req.body.id } } })
    // if (check_title) {
    //     req.toastr.error("Title is already exist.");
    //     return res.redirect("/get-relax-we-have")
    // }
    // else{

    relax_we_have.update({
        success_champions: req.body.success_champions,
        salesforce_certification: req.body.salesforce,
        happy_customers:  req.body.happy_customers,
        project_delivered:  req.body.project_delivered,
        go_to_market_solution: req.body.market_solutions
    }, { where: { id: req.body.id } })
        .then((data) => {
            req.toastr.success("Relax we haveis sucessfully updated.");
            res.redirect("/relax-we-have-list")
        })
        .catch((error) => {
            req.toastr.error("Something unexpected happend.");
            res.redirect("/relax-we-have-list")
        })
}
