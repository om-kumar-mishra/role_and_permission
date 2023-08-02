const db = require("../../models");
const Superadmin = db.signup;
const Op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');

// Superadmin list
exports.profile = async (req, res) => {
    
   // console.log(req.session.user.id);
    Superadmin.findOne({ where: { id: req.session.user.id } }).then(function (BatchData) {
       // console.log(BatchData);
        res.render('signup/login', { title: 'Super admin/', admindetials: BatchData, userdetials: req.session.user });
    })
        .catch(err => {
            res.render('signup/login', { title: 'Super admin', admindetials: BatchData, errorMessage: err });
        });

};




// Update Superadmin 
exports.superadminUpdate = async (req, res) => {

    console.log(req.body, 'ghfghfgh');
    const batchDet = {
        name: req.body.name,
        //email: req.body.email,
        mobile: req.body.phone
    };

    Superadmin.update(batchDet, {
        where: { id: req.body.id }
    }).then(function (data) {
        Superadmin.findOne({ where: { id: req.session.user.id } }).then(function (BatchData) {
            console.log(BatchData);
            res.render('signup/login', { title: 'Super admin/', admindetials: BatchData, userdetials: req.session.user, successMessage: 'Updated Successfully.' });
        })
    })
        .catch(err => {
            res.render('signup/login', { title: 'Super admin/ Edit', userdetials: req.session.user, errorMessage: err });

        });


}


//checkoldpassword
exports.checkoldpassword = async (req, res) => {
    const { superadminId, old_password, new_password } = req.body;
    var superadmin = await Superadmin.findOne({ where: { id: superadminId } });

    const isMatch = await bcrypt.compare(old_password, superadmin.password);
    console.log(isMatch);
    if (isMatch) {
        return true;
    } else {
        return false;
    }


}

// change status
exports.changePassword = async (req, res) => {
    const {superadminId, old_password, new_password} = req.body;
    var superadmin = await Superadmin.findOne({ where: { id: superadminId } });
    console.log(old_password);
    console.log(superadmin.password);
    const isMatch = await bcrypt.compare(old_password, superadmin.password);
    console.log(isMatch);
    if (isMatch) {
        const password = await bcrypt.hash(new_password, 10);
        Superadmin.findOne({ where: { id: req.session.user.id } }).then((clas) => { 
            clas.update({
                password: password
            })
                .then((updatedClass) => {
                    Superadmin.findOne({ where: { id: req.session.user.id } }).then((clas) => {
                    res.render('profile', { title: 'Super admin/', admindetials: clas, userdetials: req.session.user, successMessage: 'Password Changed Successfully.' });
                    })
                    .catch(error => res.status(400).send(error));
                })
                .catch(error => res.status(400).send(error));
        })
            .catch(error => res.status(400).send(error));
    } else {
        let clas= Superadmin.findOne({ where: { id: req.session.user.id } })
        res.render('profile', { title: 'Super admin', userdetials: req.session.user,admindetials: clas, errorMessage: "Old password is not match " });
    }
    
}