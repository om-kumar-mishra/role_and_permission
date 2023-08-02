const slug = require("../../../models").slug
const { Op } = require("sequelize");


// add slug
exports.slug = (req, res) => {
  res.render("admin/home/slug/add", { title: "CMS", userdetials: req.session.user })

}





//store slug
exports.slugStore = async (req, res) => {
  try {


    let check_data = await slug.findOne({ where: { title: req.body.title.trim() } })

    if (check_data) {
      req.toastr.error("Title is already exist.");
      return res.redirect("/slug")
    }
  }
  catch (error) {
    console.log("Error===", error.message)

  }

  let t = req.body.title
  const regex = /" "/g;
  let slugName = t.replace(/\W+/g, '_');
  await slug.create({
    title: req.body.title,
    description: req.body.description,
    slugName: slugName
  })
    .then((data) => {
      req.toastr.success("CMS is successfully added.");
      res.redirect("/slug-list")
    })
    .catch((error) => {
      req.toastr.error("CMS is not added.");
      return res.redirect("/slug-list")
    })
}






//slug list
exports.slugList = async (req, res) => {
  await slug.findAll({})
    .then((list) => {
      res.render("admin/home/slug/list", { title: "CMS", userdetials: req.session.user, list: list })
    })
}




//delete slug
exports.deleteSlug = async (req, res) => {
  console.log("req.query.slugName=====",req.query.slugName)
  await slug.destroy({ where: { slugName: req.query.slugName } })
    .then((data) => {
      req.toastr.success("CMS is successfully deleted.");
      return res.redirect("/slug-list")
    })
}



///fdsfdsfsfsfsdfdsfdf

//get update slug
exports.updateSlug = async (req, res) => {
  await slug.findOne({ where: { slugName: req.query.slugName } })
    .then((data) => {
      res.render("admin/home/slug/update", { title: "CMS", userdetials: req.session.user, data: data })

    })
}




//store update data
exports.updateSlugStore = async (req, res) => {
  let check_data = await slug.findOne({ where: { title: req.body.title.trim(), id: { [Op.not]: req.body.slugId } } })
  if (check_data) {
    req.toastr.error("Title is already exist.");
    return res.redirect("/slug-list")
  }

  await slug.update({
    title: req.body.title.trim(),
    description: req.body.description
  }, { where: { id: req.body.slugId } })
    .then((data) => {
      req.toastr.success("CMS is successfully updated.")
      return res.redirect("/slug-list")
    })
}