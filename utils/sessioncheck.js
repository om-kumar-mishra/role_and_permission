exports.checksession = (req, res, next) => {

	console.log("next=============")
	if (req.session.user) {
		res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
		next();
		// res.render('pages/index',{title:'admin/|Dashboard',userdetials: req.session.user})
	} else {

		res.render('signup/login', { title: 'Login', userdetials: req.session.user });

	}
};