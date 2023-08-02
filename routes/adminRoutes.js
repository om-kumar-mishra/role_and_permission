const express=require("express")
//const upload=require("../utils/multer_providetr")
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { checksession } = require('../utils/sessioncheck');
const adminController = require("../controllers/admin/adminController"); 
const upload = require("../utils/multer_providetr"); 
const bannerController=require("../controllers/admin/home/bannerController")
const happyCustomersController=require("../controllers/admin/home/happyCustomersController")
const weBeliveInController=require("../controllers/admin/home/weBeliveInController")
const readyTotalkController=require("../controllers/admin/home/readyTotalkController")
//const mainServiceController=require("../controllers/admin//mainServiceController")
const ourAwesomeTeamController=require("../controllers/admin/home/ourAwesomeTeamController")
const howWeMakeController=require("../controllers/admin/home/howWeMakeController")
const contactController=require("../controllers/admin/home/contactController")
//const newsLetterController=require("../controllers/admin//newsLetterController")
//const faqController=require("../controllers/admin//faqController")
const slugController=require("../controllers/admin/home/slugController")
//const whyWeController=require("../controllers/admin//whyWeController")
//const whyWeCountController=require("../controllers/admin//whyWeCountController")
const contactUsController=require("../controllers/admin/contact_us/contactUsController")
const seeWhatWeCanController=require("../controllers/admin/home/seeWhatWeCanController")
const remotStaffController=require("../controllers/admin/home/remotStaffController")
//const innovativeController=require("../controllers/admin//innovativeController")
const relaxWeHaveController=require("../controllers/admin/home/relaxWeHaveController")


const serviceBannerController=require("../controllers/admin/service/serviceBannerController")
const serviceMainTitleController=require("../controllers/admin/service/serviceMainTitleController")
const serviceBoxController=require("../controllers/admin/service/serviceBoxController")

const industryBannerController=require("../controllers/admin/industry/industryBannerController")
const industryBoxController=require("../controllers/admin/industry/industryBoxController")
const industryMainTitleController=require("../controllers/admin/industry/industryMainTitleController")

const gallaryBannerController=require("../controllers/admin/gallary/gallaryBannerController")
const commonBannerController=require("../controllers/admin/gallary/commonBannerController")
const videoController=require("../controllers/admin/gallary/videoController")
const imagesController=require("../controllers/admin/gallary/imagesController")
const eventController=require("../controllers/admin/gallary/eventController")
const eventImagesController=require("../controllers/admin/gallary/eventImagesController")


const contactBannerController=require("../controllers/admin/contact_us/bannerController")
const roleController=require("../controllers/admin/roleController")
const permissionController=require("../controllers/admin/permissionController")
const rolePermssionController=require("../controllers/admin/rolePermssionController")
const signupController=require("../controllers/admin/signupController")
const modelController=require("../controllers/admin/modelController")





const checklogin=require("../middleware/auth")
const app=express.Router()

//admin/ profile
app.get("/profile", checksession, adminController.profile);
app.post("/checkoldpassword", checksession, upload.none(), adminController.checkoldpassword);
app.post("/superadmin-change-password", checksession, upload.none(), adminController.changePassword);
app.post("/superadmin-update", checksession, upload.none(),adminController.superadminUpdate);

//start banner
app.get("/add-banner",checklogin,bannerController.addBanner)
app.post("/post-banner",checklogin,upload.single("image"),bannerController.PostBanner)
app.get("/get-banner-list",checklogin,bannerController.bannerList)
app.get("/delete-banner",checklogin,bannerController.deleteBanner)
app.get("/update-banner",checklogin,bannerController.updateBanner)
app.post("/update-banner-store",checklogin,upload.single("image"),bannerController.updateBannerById)
//end banner

//banner content
app.get("/add-happy-customers",checklogin,happyCustomersController.getAddHappyCustomer)
app.post("/post-happy-customers",checklogin,upload.single("image"),happyCustomersController.postHappyCustomer)
app.get("/happy-customers-list",checklogin,checklogin,happyCustomersController.getHappyCustomerList)
app.get("/delete-happy-customers",checklogin,happyCustomersController.deleteHappyCustomer)
app.get("/update-happy-customers",checklogin,checklogin,happyCustomersController.getUpdateHappyCustomerPage)
app.post("/update-happy-customers-store",checklogin,upload.single("image"),happyCustomersController.postUpdateHappyCustomer)

//end banner content


//be belive start
 app.get("/add-be-belive",checklogin,weBeliveInController.getAddBeBelive)
 //const cpUpload = upload.fields([{ name: 'icon', maxCount: 1 }, { name: 'icon2', maxCount: 8 }])
 app.post("/post-be-belive",checklogin,upload.single("icon"),weBeliveInController.postBeBelive)
 app.get("/be-belive-list",checklogin,weBeliveInController.getBeBeliveList)
 app.get("/delete-be-belive",checklogin,weBeliveInController.deleteBeBelive)
 app.get("/be-belive-update",checklogin,weBeliveInController.getBeBeliveUpdatePage)
 //const cpUpload1 = upload.fields([{ name: 'icon', maxCount: 1 }, { name: 'icon2', maxCount: 8 }])
 app.post("/update-be-belive-store",checklogin,upload.single("icon"),weBeliveInController.updateBeBelive) 
//be belive end






// //main service
// app.get("/add-main-service",checklogin,mainServiceController.getAddMainServicePage)
// app.post("/post-main-service",checklogin,upload.single("image"),mainServiceController.postMainService)
// app.get("/main-service-list",checklogin,mainServiceController.getMainServiceList)
// app.get("/delete-main-service",checklogin,mainServiceController.deleteMainService)
// app.get("/update-main-service",checklogin,mainServiceController.getUpdateMainServicePage)
// app.post("/update-main-service-store",checklogin,upload.single("image"),mainServiceController.updateMainService)
// //main service end


//Our Awesome Team start
app.get("/add-our-awesome-team",checklogin,ourAwesomeTeamController.getAddPage)
app.post("/post-our-awesome-team",checklogin,upload.single("image"),ourAwesomeTeamController.postData)
app.get("/our-awesome-team-list",checklogin,ourAwesomeTeamController.getlList)
app.get("/delete-our-awesome-team",checklogin,ourAwesomeTeamController.deleteData)
app.get("/update-our-awesome-team",checklogin,ourAwesomeTeamController.getUpdatePage)
app.post("/update-our-awesome-team-store",checklogin,upload.single("image"),ourAwesomeTeamController.updateStore)
//Our Awesome Team end

//ready to talk start
app.get("/add-ready-to-talk",checklogin,readyTotalkController.getAddPage)
app.post("/post-ready-to-talk",checklogin,upload.single("icon"),readyTotalkController.postData)
app.get("/ready-to-talk-list",checklogin,readyTotalkController.getlList)
app.get("/delete-ready-to-talk",checklogin,readyTotalkController.deleteData)
app.get("/update-ready-to-talk",checklogin,readyTotalkController.getUpdatePage)
app.post("/post-update-ready-to-talk",checklogin,upload.single("icon"),readyTotalkController.updateStore)
//ready to talk end

//Relax we have Start
app.get("/get-relax-we-have",checklogin,relaxWeHaveController.getAddPage)
app.post("/relax-we-have-store",checklogin,relaxWeHaveController.postData)
app.get("/relax-we-have-list",checklogin,relaxWeHaveController.getlList)
app.get("/delete-relax-we-have",checklogin,relaxWeHaveController.deleteData)
app.get("/relax-we-have-update",checklogin,relaxWeHaveController.getUpdatePage)
app.post("/relax-we-have-update-store",checklogin,relaxWeHaveController.updateStore)
//Relax we have End


//remote staff start
app.get("/add-remote-staff",checklogin,remotStaffController.getAddPage)
app.post("/remote-staff-store",checklogin,upload.single("image"),remotStaffController.postData)
app.get("/remote-staff-list",checklogin,remotStaffController.getlList)
app.get("/delete-remote-staff",checklogin,remotStaffController.deleteData)
app.get("/update-remote-staff",checklogin,remotStaffController.getUpdatePage)
app.post("/remote-staff-update-store",checklogin,upload.single("image"),remotStaffController.updateStore)
//remote staff end



//our see what start
app.get("/add-see-what",checklogin,seeWhatWeCanController.getAddPage)
app.post("/see-what-store",checklogin,upload.single("image"),seeWhatWeCanController.postData)
app.get("/see-what-list",checklogin,seeWhatWeCanController.getlList)
app.get("/delete-see-what",checklogin,seeWhatWeCanController.deleteData)
app.get("/update-see-what",checklogin,seeWhatWeCanController.getUpdatePage)
app.post("/see-what-upadte-store",checklogin,upload.single("image"),seeWhatWeCanController.updateStore)
//our see what End




//industry box  start
app.get("/add-industry-box",checklogin,industryBoxController.getAddPage)
app.post("/industry-box-store",checklogin,upload.single("image"),industryBoxController.postData)
app.get("/industry-box-list",checklogin,industryBoxController.getlList)
app.get("/delete-industry-box",checklogin,industryBoxController.deleteData)
app.get("/update-industry-box",checklogin,industryBoxController.getUpdatePage)
app.post("/industry-box-update-store",checklogin,upload.single("image"),industryBoxController.updateStore)
//industry box  staff end


//Industry Main Title Page start
app.get("/add-industry-main-title-page",checklogin,industryMainTitleController.getAddPage)
app.post("/industry-main-title-page-store",checklogin,upload.single("image"),industryMainTitleController.postData)
app.get("/industry-main-title-page-list",checklogin,industryMainTitleController.getlList)
app.get("/delete-industry-main-title-page",checklogin,industryMainTitleController.deleteData)
app.get("/update-industry-main-title-page",checklogin,industryMainTitleController.getUpdatePage)
app.post("/industry-main-title-page-update-store",checklogin,upload.single("image"),industryMainTitleController.updateStore)
//Industry Main Title Page end



//service box  start
app.get("/add-service-box",checklogin,serviceBoxController.getAddPage)
app.post("/service-box-store",checklogin,upload.single("image"),serviceBoxController.postData)
app.get("/service-box-list",checklogin,serviceBoxController.getlList)
app.get("/delete-service-box",checklogin,serviceBoxController.deleteData)
app.get("/update-service-box",checklogin,serviceBoxController.getUpdatePage)
app.post("/service-box-update-store",checklogin,upload.single("image"),serviceBoxController.updateStore)
//service box  end




//Service Main Title Page start
app.get("/add-main-title-page",checklogin,serviceMainTitleController.getAddPage)
app.post("/service-main-title-page-store",checklogin,upload.single("image"),serviceMainTitleController.postData)
app.get("/service-main-title-page-list",checklogin,serviceMainTitleController.getlList)
app.get("/delete-service-main-title-page",checklogin,serviceMainTitleController.deleteData)
app.get("/update-service-main-title-page",checklogin,serviceMainTitleController.getUpdatePage)
app.post("/service-main-title-page-update-store",checklogin,upload.single("image"),serviceMainTitleController.updateStore)
//Service Main Title Page end



//start event
app.get("/add-event",checklogin,eventController.getAddPage)
app.post("/post-event",checklogin,upload.single("image"),eventController.postData)
app.get("/event-list",checklogin,eventController.getlList)
app.get("/delete-event",checklogin,eventController.deleteData)
app.get("/update-event",checklogin,eventController.getUpdatePage)
app.post("/update-event-store",checklogin,upload.single("image"),eventController.updateStore)
//end event



//start event images
app.get("/add-event-images",checklogin,eventImagesController.getAddPage)
app.post("/post-event-images",checklogin,upload.array('image', 12),eventImagesController.postData)
app.get("/event-images-list",checklogin,eventImagesController.getlList)
app.get("/delete-event-images",checklogin,eventImagesController.deleteData)
app.get("/update-event-images",checklogin,eventImagesController.getUpdatePage)
app.post("/update-event-images-store",checklogin,upload.single("image"),eventImagesController.updateStore)
//end event images



//start images
app.get("/add-image",checklogin,imagesController.getAddPage)
app.post("/post-image",checklogin,upload.single("image"),imagesController.postData)
app.get("/common-image-list",checklogin,imagesController.getlList)
app.get("/delete-image",checklogin,imagesController.deleteData)
app.get("/update-image",checklogin,imagesController.getUpdatePage)
app.post("/update-image-store",checklogin,upload.single("image"),imagesController.updateStore)
//end images



//start video
app.get("/add-video",checklogin,videoController.getAddPage)
app.post("/post-video",checklogin,upload.single("image"),videoController.postData)
app.get("/common-video-list",checklogin,videoController.getlList)
app.get("/delete-video",checklogin,videoController.deleteData)
app.get("/update-video",checklogin,videoController.getUpdatePage)
app.post("/update-video-store",checklogin,upload.single("image"),videoController.updateStore)
//end video



//How we make start
app.get("/add-how-we-make",checklogin,howWeMakeController.getAddHowWeMake)
app.post("/how-we-make-store",checklogin,upload.single("image"),howWeMakeController.postHowWeMake)
app.get("/how-we-make-list",checklogin,howWeMakeController.HowWeMakeList)
app.get("/delete-how-we-make",checklogin,howWeMakeController.deleteHowWeMake)
app.get("/update-how-we-make",checklogin,howWeMakeController.updateHowWeMake)
app.post("/update-blog-store",checklogin,upload.single("image"),howWeMakeController.updateHowWeMakeStore)
//How we make End 


//contact start
app.get("/contact",checklogin,contactController.contact)
app.post("/contact-store",checklogin,contactController.contactStore)
app.get("/contacts-list",checklogin,contactController.contactList)
app.get("/delete-contact",checklogin,contactController.deleteContact)
app.get("/update-contact",checklogin,contactController.updateContact)
app.post("/update-store",checklogin,contactController.updateStore)
//contact end



// //news letter start
//  app.get("/news-letters",checklogin,newsLetterController.newsLetters)
//  app.get("/delete-news",checklogin,newsLetterController.deleteNewsLetters)
// //news letter end


// //faq start
// app.get("/faq",checklogin,faqController.faq)
// app.post("/post-faq",checklogin,faqController.faqStore)
// app.get("/faq-list",checklogin,faqController.faqList)
// app.get("/delete-faq",checklogin,faqController.deletefaq)
// app.get("/update-faq",checklogin,faqController.updatefaq)
// app.post("/update-faq-store",checklogin,faqController.updatefaqStore)
// app.get("/faq-contacts",checklogin,faqController.faqContactList)
// //faq end


// //slug start
//   app.get("/slug",checklogin,slugController.slug)
//   app.post("/post-slug",checklogin,slugController.slugStore)
//   app.get("/slug-list",checklogin,slugController.slugList)
//   app.get("/delete-slug",checklogin,slugController.deleteSlug)
//   app.get("/update-slug",checklogin,slugController.updateSlug)
//   app.post("/update-slug-store",checklogin,slugController.updateSlugStore)
  
// //slug end



// //why we start
//   app.get("/why-we",checklogin,whyWeController.whyWe)
//   app.post("/post-why-we",checklogin,upload.single("image"),whyWeController.whyWeStore)
//   app.get("/why-we-list",checklogin,whyWeController.whyWeList)
//   app.get("/delete-why-we",checklogin,whyWeController.deletewhyWe)
//   app.get("/update-why-we",checklogin,whyWeController.updateWhyWe)
//   app.post("/update-why-we-store",checklogin,upload.single("image"),whyWeController.updateWhyWeStore)  
// //why we end


// //why we count start
//   app.get("/why-we-count",checklogin,whyWeCountController.whyWeCount)
//   app.post("/why-we-count-store",checklogin,whyWeCountController.whyWeCountStore)
//   app.get("/why-we-count-list",checklogin,whyWeCountController.whyWeCountList)
//   app.get("/delete-why-we-count",checklogin,whyWeCountController.deleteWhyWeCount)
//   app.get("/update-why-we-count",checklogin,whyWeCountController.updateWhyWeCount)
//   app.post("/update-why-we-count-store",checklogin,whyWeCountController.updateWhyWeCountStore)
// //why we count end

//contact us start
 app.get("/contact-us-list",checklogin,contactUsController.contactUsList)
 
//contact us end





// //Innovation start
// app.get("/innovative",checklogin,innovativeController.getInnovative)
// app.post("/innovative-store",checklogin,innovativeController.innovativeStore)
// app.get("/innovative-list",checklogin,innovativeController.innovativeList)
// app.get("/delete-innovative",checklogin,innovativeController.deleteInnovative)
// app.get("/innvative-update",checklogin,innovativeController.updatePage)
// app.post("/innovative-update-store",checklogin,innovativeController.innovativeUpdateStore)
// //Innovation end


//start service banner
app.get("/add-service-banner",checklogin,serviceBannerController.addBanner)
app.post("/post-service-banner",checklogin,upload.single("image"),serviceBannerController.PostBanner)
app.get("/service-banner-list",checklogin,serviceBannerController.bannerList)
app.get("/delete-service-banner",checklogin,serviceBannerController.deleteBanner)
app.get("/update-service-banner",checklogin,serviceBannerController.updateBanner)
app.post("/update-service-banner-store",checklogin,upload.single("image"),serviceBannerController.updateBannerById)
//end service banner








//start industry banner
app.get("/add-industry-banner",checklogin,industryBannerController.addBanner)
app.post("/post-industry-banner",checklogin,upload.single("image"),industryBannerController.PostBanner)
app.get("/industry-banner-list",checklogin,industryBannerController.bannerList)
app.get("/delete-industry-banner",checklogin,industryBannerController.deleteBanner)
app.get("/update-industry-banner",checklogin,industryBannerController.updateBanner)
app.post("/update-industry-banner-store",checklogin,upload.single("image"),industryBannerController.updateBannerById)
//end industry banner








//start gallary banner
app.get("/add-gallary-banner",checklogin,gallaryBannerController.addBanner)
app.post("/post-gallary-banner",checklogin,upload.single("image"),gallaryBannerController.PostBanner)
app.get("/gallary-banner-list",checklogin,gallaryBannerController.bannerList)
app.get("/delete-gallary-banner",checklogin,gallaryBannerController.deleteBanner)
app.get("/update-gallary-banner",checklogin,gallaryBannerController.updateBanner)
app.post("/update-gallary-banner-store",checklogin,upload.single("image"),gallaryBannerController.updateBannerById)
//end gallary banner




//start common banner
app.get("/add-common-banner",checklogin,commonBannerController.addBanner)
app.post("/post-common-banner",checklogin,upload.single("image"),commonBannerController.PostBanner)
app.get("/common-banner-list",checklogin,commonBannerController.bannerList)
app.get("/delete-common-banner",checklogin,commonBannerController.deleteBanner)
app.get("/update-common-banner",checklogin,commonBannerController.updateBanner)
app.post("/update-common-banner-store",checklogin,upload.single("image"),commonBannerController.updateBannerById)
//end common banner












//start contact banner
app.get("/add-contact-banner",checklogin,contactBannerController.addBanner)
app.post("/post-contact-banner",checklogin,upload.single("image"),contactBannerController.PostBanner)
app.get("/contact-banner-list",checklogin,contactBannerController.bannerList)
app.get("/delete-contact-banner",checklogin,contactBannerController.deleteBanner)
app.get("/update-contact-banner",checklogin,contactBannerController.updateBanner)
app.post("/update-contact-banner-store",checklogin,upload.single("image"),contactBannerController.updateBannerById)
//end contact banner 




//start role
app.get("/add-role",checklogin,roleController.getAddPage)
app.post("/post-role",checklogin,roleController.postData)
app.get("/role-list",checklogin,roleController.getlList)
app.get("/delete-role",checklogin,roleController.deleteData)
app.get("/update-role",checklogin,roleController.getUpdatePage)
app.post("/update-role-store",checklogin,roleController.updateStore)
app.get("/get-permission-page",checklogin,roleController.getPermission)
app.post("/give-permission",checklogin,roleController.givePermission)


//end role



//Permission start
app.get("/slug",checklogin,permissionController.slug)
app.post("/post-slug",checklogin,permissionController.slugStore)
app.get("/permission-list",checklogin,permissionController.slugList)
app.get("/delete-slug",checklogin,permissionController.deleteSlug)
app.get("/update-slug",checklogin,permissionController.updateSlug)
app.post("/update-slug-store",checklogin,permissionController.updateSlugStore)
app.get("/slug-status",permissionController.status)

//Permission end



//Permission start
app.get("/role-and-permission",checklogin,rolePermssionController.getAddForm)
app.post("/post-role-and-permission",checklogin,rolePermssionController.postData)
app.get("/role-and-permission-list",checklogin,rolePermssionController.getList)
app.get("/delete-role-and-permission",checklogin,rolePermssionController.deleteData)
app.get("/update-role-and-permission",checklogin,rolePermssionController.getUpdatePage)
app.post("/update-role-and-permission-store",checklogin,rolePermssionController.updateStore)

app.get("/status",rolePermssionController.status)
//Permission end

//Signup start
app.get("/signup",signupController.getAddForm)
app.post("/post-signup",checklogin,signupController.postData)
app.get("/signup-list",checklogin,signupController.getList)
app.get("/delete-signup",checklogin,signupController.deleteData)
app.get("/update-signup",checklogin,signupController.getUpdatePage)
app.post("/update-signup-store",checklogin,signupController.updateStore)
app.get("/signup-status",signupController.status)
app.post("/update-signup-store",checklogin,signupController.updateStore)
app.get("/error-page",signupController.errorPage)


//Signup end

//login
app.post("/post-login-store",checklogin,signupController.loginStore)
app.get("/get-login-page",checklogin,signupController.getLoginPage)
//login



app.get("/add-model",checklogin,modelController.getAddPage)
app.post("/post-model",checklogin,modelController.postData)
app.get("/model-list",checklogin,modelController.getList)
app.get("/delete-model",checklogin,modelController.deleteData)
app.get("/update-model",checklogin,modelController.getUpdatePage)
app.post("/update-model-store",checklogin,modelController.updateStore)




 module.exports=app