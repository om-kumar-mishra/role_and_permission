const happy_customers = require("../../../models").happy_customers

const { text } = require("body-parser");
const mongoose = require('mongoose');
const { STRING } = require("sequelize");

const { Op } = require("sequelize");


mongoose.connect('mongodb://localhost:27017/test')
    .then(() => console.log('Connected!'));

const playlistSchema = new mongoose.Schema({
    name: 
    {
        type:String,
        require:true,
        unique:true,
        // minlength:[2,"minimum 2letters"]
    },
    description: String,
    degination: String,
    image: String
})
const Playlist = new mongoose.model("Playlist", playlistSchema);



//get happy customer
exports.getAddHappyCustomer = (req, res) => {
    res.render("admin/home/happy_customers/add", { title: "Happy Customers ", userdetials: req.session.user })
}






// add happy customer
exports.postHappyCustomer = async (req, res) => {

    try {
        let checkHappyCustomer = await Playlist.findOne({ name: req.body.name.trim() })

        if (checkHappyCustomer) {
            req.toastr.error("Happy Customers is already exist.");
            return res.redirect("/happy-customers-list")

        }
        console.log("req.body.name.trim()=============",req.body)

        const data = new Playlist({
            name: req.body.name.trim(),
            description: req.body.description,
            degination: req.body.degination,
            image: req.file.filename
        })
        const result = await data.save();
        console.log(result
        )
        // let data = await happy_customers.create({

        //     name: req.body.name.trim(),
        //     description: req.body.description,
        //     degination: req.body.degination,
        //     image: req.file.filename

        // })

        req.toastr.success("Happy Customers is successfully added.");
        res.redirect("/happy-customers-list")
    }
    catch (error) {
        console.log("error===================", error)
        req.toastr.error(error.message);
        return res.redirect("/happy-customers-list")
    }

}



//get happy customer list
exports.getHappyCustomerList = async (req, res) => {
    let list
    try {
        list = await Playlist.find()
        console.log("list========", list)
        res.render("admin/home/happy_customers/list", { title: "Happy Customers ", userdetials: req.session.user, list: list })
    }
    catch (error) {
        req.toastr.error("Happy Customers list is not added");
        // req.flash('error',"Banner list is not found") 
        res.render("admin/home/happy_customers/list", { title: "Happy Customers ", userdetials: req.session.user, bannerContentList: list })
    }

}


//delete
exports.deleteHappyCustomer = async (req, res) => {
    try {
        console.log(`req.body.id:::::`, req.query.id);
        Playlist.deleteOne({ _id: req.query.id }).then((result) => {
            req.toastr.success("Happy Customers is successfully deleted");
            console.log("result=========================", result)
            res.redirect("/happy-customers-list")
        })
            .catch((error) => {
                console.log("err==========", error)
                req.toastr.error("Happy Customers is not deleted");
                res.redirect("/happy-customers-list")
            })
        //     if (err) {
        //         console.log("err==========",err)
        //         req.toastr.error("Happy Customers is not deleted");
        //         res.redirect("/happy-customers-list")
        //     } else {
        //         req.toastr.success("Happy Customers is successfully deleted");
        //         console.log('User deleted successfully:', result);
        //         res.redirect("/happy-customers-list")
        //     }
        // });





        // await happy_customers.destroy({ where: { id: req.query.id } })
        // req.toastr.success("Happy Customers is successfully deleted");

        //  req.flash('success',"deleted") 
        // res.redirect("/happy-customers-list")
    }
    catch (error) {
        console.log("error==========", error)
        req.toastr.error("Happy Customers is not deleted");

        // req.flash('error',"not delete ="+error.message)
        res.redirect("/happy-customers-list")
    }
}



//get update page
exports.getUpdateHappyCustomerPage = async (req, res) => {

    try {

        Playlist.findOne({ _id: req.query.id })
            .exec()
            .then((user) => {
                console.log("user==========", user)
                if (user) {

                    res.render("admin/home/happy_customers/update", { title: "Happy Customers ", userdetials: req.session.user, happyCustomer: user })
                } else {
                    req.toastr.error("'Failed to find happy customer");
                    res.redirect("/happy-customers-list")
                }
            })
            .catch((err) => {
                console.log("error==============", err)
                req.toastr.error("'Failed to find happy customer");
                res.redirect("/happy-customers-list")
            });


        // const userEmail = 'john@example.com';
        // Playlist.findOne({ id: req.query.id }, (err, user) => {
        //     if (err) {
        //         req.toastr.error("'Failed to find happy customer");
        //         console.error('Failed to find user:', err);
        //     } else {
        //         console.log('User found:', user);
        //         res.render("admin/home/happy_customers/update", { title: "Happy Customers ", userdetials: req.session.user, happyCustomer: user })

        //     }
        // });



        // let happyCustomer = await happy_customers.findOne({ where: { id: req.query.id } })
        // res.render("admin/home/happy_customers/update", { title: "Happy Customers ", userdetials: req.session.user, happyCustomer: happyCustomer })

    }
    catch (error) {
        console.log(error)
        req.toastr.error("Happy Customers page is not found");
        res.redirect("/happy-customers-list")
    }


}


//update
exports.postUpdateHappyCustomer = async (req, res) => {
    try {


        let checkHappyCustomerDuplicate = await Playlist.findOne({ name: req.body.name.trim(), _id: { $ne: req.body.id } })

        // let oldImage = await happy_customers.findOne({ where: { id: req.body.id } })

        console.log(`checkhappycustomer  duplicate::::`,checkHappyCustomerDuplicate);
        if (checkHappyCustomerDuplicate) {
            req.toastr.error("name is already exist");
            return res.redirect("/happy-customers-list")
        } else {
            let oldImage = await Playlist.findOne({ _id: req.body.id })
            Playlist.findOne({ _id: req.body.id })
                .then((user) => {
                    user.name = req.body.name.trim(),
                        user.description = req.body.description,
                        user.degination = req.body.degination,
                        user.image = (req.file) ? req.file.filename : oldImage.image,
                        user.save().then(() => {
                            req.toastr.success("Happy Customers is successfully updated");
                            res.redirect("/happy-customers-list")

                        })
                            .catch((error) => {
                                req.toastr.success("Happy Customers is not updated");
                                console.log('Failed to find user:====:===', error);
                                res.redirect("/happy-customers-list")
                            })

                })

                .catch((error) => {
                    req.toastr.success("Happy Customers is not updated");
                    console.log('Failed to find user:====:===', error);
                    res.redirect("/happy-customers-list")
                })
        }


        // if (err) {
        //     req.toastr.success("Happy Customers is not updated");
        //     console.error('Failed to find user:', err);
        //     res.redirect("/happy-customers-list")
        // } else {
        //     if (user) {
        //         // user.age = 35;

        //         user.name = req.body.name.trim(),
        //             user.description = req.body.description,
        //             user.degination = req.body.degination,
        //             user.image = (req.file) ? req.file.filename : oldImage.image,
        //             user.save((err, updatedUser) => {
        //                 if (err) {
        //                     console.error('Failed to update user:', err);
        //                 } else {
        //                     req.toastr.success("Happy Customers is successfully updated");
        //                     res.redirect("/happy-customers-list")
        //                     console.log('User updated successfully:', updatedUser);
        //                 }
        //             });
        //         } else {
        //             res.redirect("/happy-customers-list")


        //         }
        //     }
        // });









        // let checkHappyCustomerDuplicate = await happy_customers.findOne({ where: { name: req.body.name.trim(), id: { [Op.not]: req.body.id } } })

        // let oldImage = await happy_customers.findOne({ where: { id: req.body.id } })


        // if (checkHappyCustomerDuplicate) {
        //     req.toastr.error("name is already exist");
        //     return res.redirect("/happy-customers-list")
        // }


        // else {

        //     let update = await happy_customers.update({
        //         name: req.body.name.trim(),
        //         description: req.body.description,
        //         degination: req.body.degination,
        //         image: (req.file) ? req.file.filename : oldImage.image,
        //     }, { where: { id: req.body.id } })

        //     if (update) {
        //         req.toastr.success("Happy Customers is successfully updated");
        //         res.redirect("/happy-customers-list")
        //     }
        // }

    }
    catch (error) {
        // let banner_content = await Playlist.findOne({ where: { _id: req.body.id } })
        //   req.flash('error',"not updated")
        console.log("error===========", error)
        req.toastr.error("Happy Customers is not updated");
        res.redirect("/happy-customers-list")

        // res.render("admin/home/happy_customers/update", { title: "Happy Customers ", userdetials: req.session.user, banner_content: banner_content })


    }
}