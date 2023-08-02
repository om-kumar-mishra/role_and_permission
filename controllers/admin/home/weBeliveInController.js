 const we_belive=require("../../../models").we_belive
 const path=require("path")
 const fs=require("fs")
 const { Op } = require("sequelize");

 //get add be belive page
exports.getAddBeBelive=(req,res)=>{
    res.render("admin/home/we_belive_in/add",{title:"We belive in ",userdetials:req.session.user})
}





//add be belive
exports.postBeBelive=async(req,res)=>{
    try{
        let check_duplicate_icon=await we_belive.findOne({where:{icon: req.file?.filename}})
         console.log("file============",req.file)
        if(check_duplicate_icon)
        {
          req.toastr.error("Icon is already exist.");
            return   res.render("admin/home/we_belive_in/add",{title:"We belive in ",userdetials:req.session.user}) 
        }
        else{
          let data= we_belive.create({
            icon:req.file.filename        
            })
  
            if(data)
            {
            req.toastr.success("We belive in is successfully added.");       
              res.redirect("/be-belive-list")
            }
        }

        
    }

    catch(error){      
        return   res.render("admin/home/we_belive_in/add",{title:"We belive in ",userdetials:req.session.user})
    }
}





//get parter icon list
exports.getBeBeliveList=async(req,res)=>{
    try{
        let list=await  we_belive.findAll({})
        console.log()
       res.render("admin/home/we_belive_in/list",{title:"We belive in ",userdetials:req.session.user, list: list})

    }
    catch(error){
      
       // req.flash('error',"list is not found ="+error.message) 
             console.log("error=====",error)
      res.render("admin/home/we_belive_in/add",{title:"We belive in ",userdetials:req.session.user})

    }
 
}


//delete icon
exports.deleteBeBelive=async(req,res)=>{
    try{
       let deletePartner=await we_belive.destroy({where:{id:req.query.PartnerId}})
       if(deletePartner)
       {
        req.toastr.success("We belive in is successfully deleted.");
           res.redirect("/be-belive-list")
       }
    }
    catch(error){
      req.toastr.error("We belive in is not deleted.");
        res.redirect("/be-belive-list")
    }
}

//get update page
exports.getBeBeliveUpdatePage=async(req,res)=>{
    try{
       let update_data=await  we_belive.findOne({where:{id:req.query.PartnerId}})
      res.render("admin/home/we_belive_in/update",{title:"We belive in ",userdetials:req.session.user,update_data:update_data})

    }
    catch(error){
        res.redirect("/be-belive-list")
    }
}



//post upadte data
exports.updateBeBelive=async(req,res)=>{
       try{
        let update_data=await  we_belive.findOne({where:{ icon:req.file?.filename ,id:{[Op.not]:req.body.partnerId}}})
         
        let update_data_image=await  we_belive.findOne({where:{ id:req.body.partnerId}})
        // if(req.files?.icon[0])
        // {
        //  console.log("=============",path.join(__dirname,"..","..","public","/uploaded-files",`${update_data_image.icon}`))
        //   await  fs.unlinkSync(path.join(__dirname,"..","..","public","/uploaded-files",`${update_data_image.icon}`))
        // }

        // if(req.files.icon2[0])
        // {
        //   await  fs.unlinkSync(path.join(__dirname,"..","..","public","/uploaded-files",`${update_data_image.icon1}`))
        // }

        if(update_data)
        {
         req.toastr.error("Icon is already exist.");
         return res.redirect("/be-belive-list")
        }

          let update=await  we_belive.update({
             icon:(req.file)?req.file.filename:update_data_image.icon,
              },{where:{id:req.body.partnerId}})

              .then((data)=>{
               req.toastr.success("We belive in is successfully updated.");
               return res.redirect("/be-belive-list")
              })
              .catch((data)=>{
               req.toastr.error("We belive in is not updated. ="+data);
                res.redirect("/be-belive-list")
              })
       }
       catch(error){
        console.log("===================================",error)
        req.toastr.error("We belive in is not updated.");

        res.redirect("/be-belive-list")
       }
}