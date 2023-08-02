const express = require("express");
const cors = require("cors");
const path = require('path');
const app = express();
const fs = require('fs');
const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
//const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const toastr = require('express-toastr')

// const toastr = require('express-toastr');
const bcrypt = require('bcryptjs');
const superAdminModel = require('./models').SuperAdmin;
const signup = require('./models').signup;
const Role = require("./models").role
const permission = require("./models").permission
const role_and_permission = require("./models").role_and_permission



const { Op } = require("sequelize");

const flash = require('connect-flash');
const adminRoutes = require("./routes/adminRoutes")
const apiRoutes = require("./routes/apiRoutes")




app.use(logger('dev'));
app.use(cors());

app.use(cookieParser());
app.use(session({
  key: 'user_id',
  secret: 'sdsdsdsdsdsdqa',
  resave: true,
  saveUninitialized: true,
  cookie: {
    expires: 3600000
  }
}));


app.use(flash());
app.use(toastr());
app.use((req, res, next) => {
  app.locals.session = req.session;
  app.locals.flash = req.flash;
  next();
})

//toastr
app.use(function (req, res, next) {
  res.locals.toasts = req.toastr.render()
  res.locals.session = req.session;
    res.locals.user = req.session.user;
   res.locals.permissions = req.session.permissions;
  next()
});

app.use((req, res, next) => {
  if (req.cookies.user_id && !req.session.user) {
    res.clearCookie('user_id');
  }
  next();
});

// parse requests of content-type - application/json
app.use(express.json());
//app.use(body.json())
//app.use(flash());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// require('dotenv').config({ path: '' })
const db = require("./models");
// session check 
let req = {};
var sessionChecker = async (req, res, next) => {
  if (req.session.loggedin) {

    res.render('dashboard', { title: 'admin/|Dashboard', userdetials: req.session.user })
  } else {
    next();
  }
};

db.sequelize.sync();

// simple route
app.get("/", sessionChecker, (req, res) => {
  //res.json({ message: "Welcome to cyber security application." });
  res.render('login', { title: 'Login admin' });
});

app.route('/login')
  .get(sessionChecker, (req, res) => {

    res.render('login', { title: 'Login', userdetials: req.session.user });
  });

app.post('/login', async function (req, res) {

  let username = req.body.username;
  let password = req.body.password;

  let check_email = await signup.findOne({ where: { email: username } })
  // console.log("check_email===========", check_email)
  if (check_email) {
    let all_permission = await role_and_permission.findAll({
      where: { roleId: check_email.type_user }
    })
    console.log("all_permission=======", all_permission)
    let logedin = await signup.findOne({

      where: { email: username, password: password }
    })
    console.log("logedin===", logedin)
    if (logedin) {
      req.session.loggedin = true;
      req.session.username = logedin.name;
      req.session.user = logedin;
      req.session.permissions = all_permission;


      req.toastr.success("successfully login")
      res.redirect("/")
    }
    else {
      req.toastr.error("Fail")
      res.render('login', { title: 'Login', errorMessage: 'Provided password not matched with our records.' });
    }

  }
  else {
    req.toastr.error("Email is not exist")
    res.render('login', { title: 'Login', errorMessage: 'Provided password not matched with our records.' });
  }





  // if (username && password) {

  //   const user = await superAdminModel.findOne({ where: { email: req.body.username } });
  //   console.log(user);
  //   if (user) {
  //     const dbpass = user.password;

  //     const match = await bcrypt.compare(password, dbpass);
  //     console.log(match);
  //     if (match) {
  //       req.toastr.success(" Login successful.");      

  //       req.session.loggedin = true;
  //       req.session.username = username;
  //       req.session.user = user.dataValues;
  //       res.redirect('/');

  //     } else {
  //       res.render('login', { title: 'Login', errorMessage: 'Provided password not matched with our records.' });

  //     }

  //   } else {

  //     res.render('login', { title: 'Login admin/', errorMessage: 'Provided email and password not matched with our records.' });

  //   }

  // } else {
  //   res.render('login', { title: 'Login', errorMessage: 'Please enter Username and Password!' });
  //   //res.send('Please enter Username and Password!');
  //   res.end();
  // }
});



// app.use(function (req, res, next) {
//   res.locals.toasts = req.toastr.render()
//   res.locals.session = req.session;
//   res.locals.user = req.session.user;
//   res.locals.permissions = req.session.permissions;
//   next()
// });








// route for user logout
app.get('/logout', (req, res) => {
  res.clearCookie('user_id');
  res.redirect('/');
});

//cyber security route
app.use("/", adminRoutes)
app.use("/api", apiRoutes)
// app.use("/",aboutUsRoute)
//data admin/ route
// require("./routes/adminRoutes")(app)
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
//app.set('view options', { layout: false });
app.set('views', path.join(__dirname, 'server/views'));



// set port, listen for requests
const PORT = process.env.PORT || 1990;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});