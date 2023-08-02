const banner = require("../../models").banner
const contact = require("../../models").contact
const happy_customers = require("../../models").happy_customers
const how_we_make = require("../../models").how_we_make
const ourawesometeam = require("../../models").ourawesometeam
const ready_to_talk = require("../../models").ready_to_talk
const relax_we_have = require("../../models").relax_we_have
const remote_staff = require("../../models").remote_staff
const see_what_we_can = require("../../models").see_what_we_can
const we_belive = require("../../models").we_belive
const common_banner = require("../../models").common_banner
const event = require("../../models").event
const event_images = require("../../models").event_images
const gallary_banner = require("../../models").gallary_banner
const images = require("../../models").images
const video = require("../../models").video
const industry_banner = require("../../models").industry_banner
const industry_box = require("../../models").industry_box
const industry_main_title_page = require("../../models").industry_main_title_page
const service_banner = require("../../models").service_banner
const service_box = require("../../models").service_box
const service_main_title_page = require("../../models").service_main_title_page
const contact_banner = require("../../models").contact_banner
const contact_us = require("../../models").contact_us
const Sulg = require("../../models").slug


const nodemailer = require("nodemailer");

const { NUMBER } = require("sequelize")
const validator = require('validator');


//------------------------------------------------home api start--------------------------------------

//get All banner api
exports.getlistOfBanner = async (req, res) => {
 try {
   let data = await banner.findOne({})
   res.status(200).json({ message: "All banner list", code: 200, data: data })
 }
 catch (error) {
   res.status(400).json({ message: "error in code", code: 400, data: error })

 }
}



//get All contact list api
exports.getlistOfContact = async (req, res) => {
 try {
   let data = await contact.findAll({})
   res.status(200).json({ message: "All contact list", code: 200, data: data })

 }
 catch (error) {
   res.status(400).json({ message: "error in code", code: 400, data: error })

 }

}


//get list of Happy Customer
exports.happyCustomer = async (req, res) => {
   try {
     let data = await happy_customers.findAll({})
     res.status(200).json({ message: "All happy customer list", code: 200, data: data })
   }
   catch (error) {
     res.status(400).json({ message: "error in code", code: 400, data: error })
   }
 
 }



 //get list of how we make
exports.howWeMake = async (req, res) => {
   try {
     let data = await how_we_make.findAll({})
     res.status(200).json({ message: "All how we make list", code: 200, data: data })
   }
   catch (error) {
     res.status(400).json({ message: "error in code", code: 400, data: error })
   }
 
 }



//get list of our awesome team
exports.ourAwesomeTeam = async (req, res) => {
 try {
   let data = await ourawesometeam.findAll({})
   res.status(200).json({ message: "All our awesome team list", code: 200, data: data })
 }
 catch (error) {
   res.status(400).json({ message: "error in code", code: 400, data: error })
 }

}



//get list of ready to talk 
exports.readyToTalk = async (req, res) => {
 try {
   let data = await ready_to_talk.findAll({})
   res.status(200).json({ message: "All ready to talk list", code: 200, data: data })
 }
 catch (error) {
   res.status(400).json({ message: "error in code", code: 400, data: error })
 }

}




//get list of relax we have 
exports.relaxWeHave = async (req, res) => {
 try {
   let data = await relax_we_have.findAll({})
   res.status(200).json({ message: "All relax we have  list", code: 200, data: data })
 }
 catch (error) {
   res.status(400).json({ message: "error in code", code: 400, data: error })
 }

}


//get list of relax we have 
exports.remoteStaff = async (req, res) => {
 try {
   let data = await remote_staff.findAll({})
   res.status(200).json({ message: "All remote staff  list", code: 200, data: data })
 }
 catch (error) {
   res.status(400).json({ message: "error in code", code: 400, data: error })
 }

}



//get list of see what we can 
exports.seeWhatWeCan = async (req, res) => {
 try {
   let data = await see_what_we_can.findAll({})
   res.status(200).json({ message: "All see what we can  list", code: 200, data: data })
 }
 catch (error) {
   res.status(400).json({ message: "error in code", code: 400, data: error })
 }

}


//get list of we belive in 
exports.weBeliveIn = async (req, res) => {
 try {
   let data = await we_belive.findAll({})
   res.status(200).json({ message: "All we belive in   list", code: 200, data: data })
 }
 catch (error) {
   res.status(400).json({ message: "error in code", code: 400, data: error })
 }

}


//----------------------------------------------home api end--------------------------------------






//----------------------------------------------gallary api start--------------------------------------

//get list common banner in 
exports.commonBanner = async (req, res) => {
 try {
   let data = await common_banner.findOne({})
   res.status(200).json({ message: "All common banner list", code: 200, data: data })
 }
 catch (error) {
   res.status(400).json({ message: "error in code", code: 400, data: error })
 }

}



//get list event list
exports.getEventList= async (req, res) => {
  try {
    let data = await event.findAll({})
    res.status(200).json({ message: "All event list", code: 200, data: data })
  }
  catch (error) {
    res.status(400).json({ message: "error in code", code: 400, data: error })
  }
 
 }



 //get list event image list
exports.getEventImgaes= async (req, res) => {
  try {
    let data = await event_images.findAll({
      where:{event_id:req.query.event_id}
    })
    res.status(200).json({ message: "All event images list", code: 200, data: data })
  }
  catch (error) {
    res.status(400).json({ message: "error in code", code: 400, data: error })
  }
 
 }


 //get gallary banner list
exports.getGallaryBanner= async (req, res) => {
  try {
    let data = await gallary_banner.findOne({})
    res.status(200).json({ message: "All gallary banner list", code: 200, data: data })
  }
  catch (error) {
    res.status(400).json({ message: "error in code", code: 400, data: error })
  }
 
 }



//get images list
exports.gallaryImgaes= async (req, res) => {
  try {
    let data = await images.findAll({})
    res.status(200).json({ message: "All gallary images list", code: 200, data: data })
  }
  catch (error) {
    res.status(400).json({ message: "error in code", code: 400, data: error })
  }
 
 }



 //get video list
exports.video= async (req, res) => {
  try {
    let data = await video.findAll({})
    res.status(200).json({ message: "All gallary video list", code: 200, data: data })
  }
  catch (error) {
    res.status(400).json({ message: "error in code", code: 400, data: error })
  }
 
 }


 //----------------------------------------------gallary api end--------------------------------------




 //----------------------------------------------industry api start--------------------------------------

//industry banner
exports.industryBanner = async (req, res) => {
  try {
    let data = await industry_banner.findOne({})
    res.status(200).json({ message: "All industry banner list", code: 200, data: data })
  }
  catch (error) {
    res.status(400).json({ message: "error in code", code: 400, data: error })
  }

}



//industry box
exports.industryBox = async (req, res) => {
  try {
    let data = await industry_box.findAll({})
    res.status(200).json({ message: "All industry box list", code: 200, data: data })
  }
  catch (error) {
    res.status(400).json({ message: "error in code", code: 400, data: error })
  }

}


//industry main title page
exports.industryMainTitlePage = async (req, res) => {
  try {
    let data = await industry_main_title_page.findAll({})
    res.status(200).json({ message: "All industry main title page list", code: 200, data: data })
  }
  catch (error) {
    res.status(400).json({ message: "error in code", code: 400, data: error })
  }

}


 
 //----------------------------------------------industry api end--------------------------------------





 //----------------------------------------------service api start--------------------------------------


 //service banner
exports.serviceBanner = async (req, res) => {
  try {
    let data = await service_banner.findOne({})
    res.status(200).json({ message: "All service banner list", code: 200, data: data })
  }
  catch (error) {
    res.status(400).json({ message: "error in code", code: 400, data: error })
  }

}


//service box
exports.serviceBox = async (req, res) => {
  try {
    let data = await service_box.findAll({})
    res.status(200).json({ message: "All service box list", code: 200, data: data })
  }
  catch (error) {
    res.status(400).json({ message: "error in code", code: 400, data: error })
  }

}


//service main title 
exports.serviceMainTitle = async (req, res) => {
  try {
    let data = await service_main_title_page.findAll({})
    res.status(200).json({ message: "All main title list", code: 200, data: data })
  }
  catch (error) {
    res.status(400).json({ message: "error in code", code: 400, data: error })
  }

}




 //----------------------------------------------service api end--------------------------------------








 //----------------------------------------------contact us api start--------------------------------------


//contact us banner
exports.contactUsBanner = async (req, res) => {
  try {
    let data = await contact_banner.findOne({})
    res.status(200).json({ message: "All contact us banner list", code: 200, data: data })
  }
  catch (error) {
    res.status(400).json({ message: "error in code", code: 400, data: error })
  }

}



//add contact us
exports.contactUs = async (req, res) => {
  
  try {
    //check email
    // let checkEmail = await contact_us.findOne({ where: { email: req.body.email } })
    // let checkPhone = await contact_us.findOne({ where: { phone: req.body.phone } })
    // let checkCompanyName = await contact_us.findOne({ where: { company_name: req.body.company_name } })


    // if (checkEmail) {
    //   return res.status(409).json({ Message: "Email already exists ", code: 409 })
    // }
    //  else if (checkCompanyName) {
    //   return res.status(409).json({ Message: "Company Name already exists ", code: 409 })
    // }
    
    // //check phone
    // else if (checkPhone) {
    //   return res.status(409).json({ Message: "Phone number already exists ", code: 409 })
    // }
    
      //validation
      if (validator.isEmpty(req.body.name)) {
        return res.status(406).json({ Message: "Name must not be empty ", code: 406 })
      }
      else if (!validator.isAlpha(req.body.name, ["en-US"], { ignore: " " })) {
        return res.status(406).json({ Message: "Name must be in letter ", code: 406 })
      }

      else if (!validator.isNumeric(req.body.phone)) {
        return res.status(406).json({ Message: "Phone number must be in numeric ", code: 406 })
      }

      else if (req.body.phone.length != 10) {
        return res.status(406).json({ Message: "Phone number must be in 10 digits", code: 406 })
      }

      else if (!validator.isEmail(req.body.email)) {
        return res.status(406).json({ Message: "Email must be in @gmail.com formate", code: 406 })
      }
      else {



   // Email       
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "alobha.appdevelopment@gmail.com", // generated ethereal user
        pass: "driznjcjwfdpkwzi", // generated ethereal password
      },
    });



    let info = {
      from: "alobha.appdevelopment@gmail.com", // sender address
      to: `${req.body.email}`, // list of receivers
      subject: `hello ${req.body.name}`, // Subject line
      // text: "sucessfully save your Frequently Asked Questions ",
      html: "<b>Thank you for contacting Role And Permission.</b>", // html body
    };


    transporter.sendMail(info, (error, details) => {
      if (error) {
       
        return res.status(406).json({ Message: "your contact is not saved ", code: 406 })

      }
      else {
     
        return res.status(406).json({ Message: "Thank you for contacting Role And Permission", code: 406 })

      }
    })


        const data = await contact_us.create({
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          company_name: req.body.company_name,
          description: req.body.description
        })
        if (data) {
          res.status(200).json({ Message: "add contact us successful", code: 200, data: data })

        }
        else {
          res.status(400).json({ Message: "Something unexpected happened.", code: 400 })
        }
        // .then((data) => {
        //   res.status(200).json({ message: "add contact us successful", code: 200, data: data })
        // })
      }

    }

  
  catch (error) {
    res.status(400).json({ message: "error in code", code: 400, data: error.message })
  }
}


 //----------------------------------------------contact us api end--------------------------------------


 //----------------------------------------------CMS api start--------------------------------------



 //get slug list
 exports.slugList = async (req, res) => {
  try {
    let data = await Sulg.findOne({
      where: {
        slugName: req.query.slug_name
      }
    })
    res.status(200).json({ message: "all security service   list", code: 200, data: data })
  }
  catch (error) {
    res.status(400).json({ message: "error in code", code: 400, data: error })
  }
}






 
// //get list of main service
// exports.mainServiceList = async (req, res) => {

//   var pageSize = await mainService.count();
//   // var numberOfRows, numberOfPages;
//   var numberPerPage = 6;
//   var get_page = req.query.page ? req.query.page : 1
//   page = Number.parseInt(get_page)
//   var skip = (page - 1) * numberPerPage;
//   // var limit = `${skip} , ${numberPerPage}`;
//   numberOfPages = Math.ceil(pageSize / numberPerPage)

//   // const count = await mainService.count();

//   //let pageSize * (page - 1);

//   try {
//     let data = await mainService.findAll({ limit: numberPerPage, offset: skip })
//     res.status(200).json({
//       message: "All main service list", code: 200, data: {
//         current: page,
//         has_previous: page > 1,
//         previous: page - 1,
//         has_next: page < numberOfPages,
//         next: page + 1,
//         total_data: pageSize,
//         list: data
//         // last_page: Math.ceil(numberOfRows / pageSize)
//       }
//     })

//   }
//   catch (error) {
//     console.log(error)
//     res.status(400).json({ message: "error in code", code: 400, data: error })
//   }

// }
