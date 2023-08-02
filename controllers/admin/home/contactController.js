const contact = require("../../../models").contact
const { Op } = require("sequelize");
const validator = require('validator');

exports.contact = (req, res) => {
   res.render("admin/home/contact/add", { title: "Contact", userdetials: req.session.user })

}




//contact store
exports.contactStore = async (req, res) => {
   console.log(req.body.email2,req.body.phone2)
   try {
      
      //check condition
      let checkDuplicateEmail = await contact.findOne({ where: { email: req.body.email.trim() } })
      let checkDuplicateEmail2 = await contact.findOne({ where: { email2: req.body.email2.trim() } })
      let checkDuplicatePhone = await contact.findOne({ where: { phone: req.body.phone } })
      let checkDuplicatePhone2 = await contact.findOne({ where: { phone2: req.body.phone2 } })


      if (checkDuplicateEmail) {
         req.toastr.error("Email is already exist.");
         return res.redirect("/contact")
      }
     else if (checkDuplicateEmail2) {
         req.toastr.error("Second Email is already exist.");
         return res.redirect("/contact")
      }
      else if (checkDuplicatePhone) {
         req.toastr.error("Phone is already exist.");
         return res.redirect("/contact")
      }
      else if (checkDuplicatePhone2) {
         req.toastr.error("Second Phone is already exist.");
         return res.redirect("/contact")
      }
      else if (!validator.isNumeric(req.body.phone)) {
         req.toastr.error("Phone number must be in numeric");
         return res.redirect("/contact")

      }
      else if (!validator.isNumeric(req.body.phone2)) {
         req.toastr.error("Phone2 number must be in numeric");
         return res.redirect("/contact")

      }

      else if (req.body.phone.length != 10) {
         req.toastr.error("phone number must be in 10 digits");
         return res.redirect("/contact")
      }
      else if (req.body.phone2.length != 10) {
         req.toastr.error("Second Phone number must be in 10 digits");
         return res.redirect("/contact")
      }

      else if (!validator.isEmail(req.body.email)) {
         req.toastr.error("Email must be in @gmail.com formate");
         return res.redirect("/contact")
      }
      else if (!validator.isEmail(req.body.email2)) {
         req.toastr.error("Second email must be in @gmail.com formate");
         return res.redirect("/contact")
      }
      else {

         contact.create({
            address: req.body.address,
            email: req.body.email.trim(),
            phone: req.body.phone,
            fax: null,
            facebook: req.body.facebook,
            instagram: req.body.instagram,
            linkedIn: req.body.linkedIn,
            map: req.body.map,
            summary: req.body.details,
            phone2: req.body.phone2,
            email2: req.body.email2
         })
            .then((data) => {
               req.toastr.success("Contact is successfully added.");
               res.redirect("/contacts-list")

            })
            .catch((error) => {  
               req.toastr.success("Contact is not added.");
               res.redirect("/contacts-list")
            })
      }
   }
   catch (error) {
      req.toastr.error("Contact is not added.");
      res.redirect("/contacts-list")
   }
}




//get contact list
exports.contactList = async (req, res) => {
    

    contact.findAll({})
      .then((list) => {
         res.render("admin/home/contact/list", { title: "Contact", userdetials: req.session.user, list: list })
      })
      .catch((error) => {
         console.log("error===================",error)
         req.toastr.error("Something unexpected happened.");
         res.redirect("/contacts-list")

      })
}




//delete contact
exports.deleteContact = async (req, res) => {
   await contact.destroy({ where: { id: req.query.contactId } })
      .then((data) => {

         req.toastr.success("Contact is successfully deleted.");
         res.redirect("/contacts-list")
      })
      .catch((error) => {
         req.toastr.error("Contact is not deleted.");
         res.redirect("/contacts-list")
      })

}


//get update contact
exports.updateContact = async (req, res) => {
   await contact.findOne({ where: { id: req.query.contactId } })
      .then((update_contact) => {

         res.render("admin/home/contact/update", { title: "Contact", userdetials: req.session.user, update_contact: update_contact })
      })
      .catch((error) => {

      })
}



//update store
exports.updateStore = async (req, res) => {
   //check duplicate
   let checkDuplicateEmail = await contact.findOne({ where: { email: req.body.email.trim(), id: { [Op.not]: req.body.contactId } } })
   let checkDuplicateEmail2 = await contact.findOne({ where: { email2: req.body.email2.trim(), id: { [Op.not]: req.body.contactId } } })
   let checkDuplicatePhone = await contact.findOne({ where: { phone: req.body.phone.trim(), id: { [Op.not]: req.body.contactId } } })
   let checkDuplicatePhone2 = await contact.findOne({ where: { phone2: req.body.phone2.trim(), id: { [Op.not]: req.body.contactId } } })

   if (checkDuplicateEmail) {
      req.toastr.error("Email is already exist.");
      return res.redirect("/contacts-list")
   }
   else if (checkDuplicateEmail2) {
      req.toastr.error("Second Email is already exist.");
      return res.redirect("/contacts-list")
   }
   else if (checkDuplicatePhone) {
      req.toastr.error(" Phone number is already exist.");
      return res.redirect("/contacts-list")
   }
   else if (checkDuplicatePhone2) {
      req.toastr.error("Second Phone number is already exist.");
      return res.redirect("/contacts-list")
   }
   else if (!validator.isNumeric(req.body.phone)) {
      req.toastr.error("Phone number must be in numeric");
      return res.redirect("/contacts-list")

   }
   else if (!validator.isNumeric(req.body.phone2)) {
      req.toastr.error("Phone2 number must be in numeric");
      return res.redirect("/contacts-list")

   }

   else if (req.body.phone.length != 10) {
      req.toastr.error("Second phone number must be in 10 digits");
      return res.redirect("/contacts-list")
   }
   else if (req.body.phone2.length != 10) {
      req.toastr.error("Second Phone number must be in 10 digits");
      return res.redirect("/contacts-list")
   }

   else if (!validator.isEmail(req.body.email)) {
      req.toastr.error("Email must be in @gmail.com formate");
      return res.redirect("/contacts-list")
   }
   else if (!validator.isEmail(req.body.email2)) {
      req.toastr.error("Second email must be in @gmail.com formate");
      return res.redirect("/contacts-list")
   }
   else {


      await contact.update({
         address: req.body.address.trim(),
         email: req.body.email.trim(),
         phone: req.body.phone.trim(),
         fax: null,
         facebook: req.body.facebook,
         instagram: req.body.instagram,
         linkedIn: req.body.linkedIn,
         map: req.body.map,
         summary: req.body.details,
         phone2: req.body.phone2,
         email2: req.body.email2
      }, { where: { id: req.body.contactId } })
         .then((data) => {
            req.toastr.success("Contact is successfully updated");
            res.redirect("/contacts-list")
         })
         .catch((error) => {
            req.toastr.error("Contact is not updated");
            res.redirect("/contacts-list")
         })
   }
}