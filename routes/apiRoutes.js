const express=require("express")
const upload=require("../utils/multer_providetr")
const ApiController=require("../controllers/api/apiController")

const ApiRoute=express.Router()


//home api route start
 ApiRoute.get("/banner",ApiController.getlistOfBanner)
 ApiRoute.get("/contact",ApiController.getlistOfContact)
 ApiRoute.get("/happy-customer",ApiController.happyCustomer)
 ApiRoute.get("/how-we-make",ApiController.howWeMake)
 ApiRoute.get("/our-awesome-team",ApiController.ourAwesomeTeam)
 ApiRoute.get("/ready-to-talk",ApiController.readyToTalk)
 ApiRoute.get("/relax-we-have",ApiController.relaxWeHave)
 ApiRoute.get("/remote-staff",ApiController.remoteStaff)
 ApiRoute.get("/see-what-we-can",ApiController.seeWhatWeCan)
 ApiRoute.get("/we-belive-in",ApiController.weBeliveIn)
//home api route end



//gallary api route
 ApiRoute.get("/common-banner",ApiController.commonBanner)
 ApiRoute.get("/event",ApiController.getEventList)
 ApiRoute.get("/event-images",ApiController.getEventImgaes)
 ApiRoute.get("/gallary-banner",ApiController.getGallaryBanner)
 ApiRoute.get("/gallary-images",ApiController.gallaryImgaes)
 ApiRoute.get("/video",ApiController.video)
//gallary api route end







//industry api route start

 ApiRoute.get("/industry-banner",ApiController.industryBanner)
 ApiRoute.get("/industry-box",ApiController.industryBox)
 ApiRoute.get("/industry-main-title-page",ApiController.industryMainTitlePage)

 //industry api route end


//service api route start
 ApiRoute.get("/service-banner",ApiController.serviceBanner)
 ApiRoute.get("/service-box",ApiController.serviceBox)
 ApiRoute.get("/service-main-title",ApiController.serviceMainTitle)
 
//service api end


//contact us start
ApiRoute.get("/contact-us-banner",ApiController.contactUsBanner)
ApiRoute.post("/contact-us",ApiController.contactUs)

//contact us end


ApiRoute.get("/slug",ApiController.slugList)

 
module.exports=ApiRoute