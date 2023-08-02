const how_we_make=require("../../../models").how_we_make
const { Op } = require("sequelize");
const  path=require("path")
const fs = require('fs')



//get How we make page
exports.getAddHowWeMake=(req,res)=>{
    res.render("admin/home/How_we_make/add",{title:"How we make" ,userdetials:req.session.user})    
}

//How we make store
exports.postHowWeMake=async(req,res)=>{
   let checkDuplicate=await how_we_make.findOne({where:{title: req.body.title.trim()}})
   if(checkDuplicate)
   {
        req.toastr.error("Title is already exist.");
        return   res.redirect("/add-how-we-make")
   }
   else{

    how_we_make.create({
        title: req.body.title.trim(),
        image: req.file.filename,
        description: req.body.description
    }).then((data)=>{
        req.toastr.success("How we make is successfully added.");
        res.redirect("/how-we-make-list")
    })
    .catch((error)=>{
        req.toastr.error("How we make is not added.")
        res.redirect("/how-we-make-list")
    })
  }
}


//show How we make list
exports.HowWeMakeList=async(req,res)=>{

  await   how_we_make.findAll({})
     .then((list)=>{
      res.render("admin/home/How_we_make/list",{title:"How we make" ,userdetials:req.session.user,list:list})    
        
     })
     .catch((error)=>{
        res.redirect("/how-we-make-list")

     })
}


//delete How we make store
exports.deleteHowWeMake=async(req,res)=>{
   await how_we_make.destroy({where:{id:req.query.id}})
   .then((data)=>{
        req.toastr.success("How we make is Successfully deleted.");
        res.redirect("/how-we-make-list")
   })
   .catch((error)=>{
    req.toastr.error("How we make is not deleted.");
    res.redirect("/how-we-make-list")
   })
}


//get How we make page
exports.updateHowWeMake=(req,res)=>{
    how_we_make.findOne({where:{id:req.query.id}})
    .then((data)=>{
      res.render("admin/home/How_we_make/update",{title:"How we make" ,userdetials:req.session.user,data:data})    
    })
   
}



//update data store
exports.updateHowWeMakeStore=async(req,res)=>{
    //duplicate image
// console.log("=============",path.join(__dirname,"..","..","public","/uploaded-files",`${req.body.oldImage}`))
if(req.file)
{  
    if(req.body.oldImage)
    {
      await  fs.unlinkSync(path.join(__dirname,"..","..","..","public","/uploaded-files",`${req.body.oldImage}`))
    }
    
}
    let checkDuplicate=await how_we_make.findOne({where:{title: req.body.title.trim() , id:{[Op.not]:req.body.id}}})
    
    if(checkDuplicate)
    {
     req.toastr.error("Title is already exist.");
      return   res.redirect("/how-we-make-list")
    }
   await how_we_make.update({
        title: req.body.title.trim(),
        image: (req.file)?req.file.filename:req.body.oldImage,
        description: req.body.description
    },{where:{id:req.body.id}})
    .then((data)=>{

        req.toastr.success(" How we make is successfully updated.");
        res.redirect("/how-we-make-list")
    })
    .catch((error)=>{
        req.toastr.error(" How we make is not updated.");      
        res.redirect("/how-we-make-list")
    })
}