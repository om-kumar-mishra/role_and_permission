checklogin=(req,res,next)=>{
    if(req.session.user)
    {
        //res.render("index",{user:req.session.user})
        next()
    }
    else
    {
       return res.redirect("/")
    }
   
}

module.exports=checklogin