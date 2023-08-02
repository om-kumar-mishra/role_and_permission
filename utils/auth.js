require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
	const token = req.header('x-auth-token');

	if (!token) {
		return res.status(401).json({ message: 'Token Not Provided' });
	}

	try {
		const decoded = jwt.verify(token, process.env.SECRET_KEY);

		req.student = decoded.student;
		next();
	} catch (err) {
		res.status(401).json({ message: err });
	}
};