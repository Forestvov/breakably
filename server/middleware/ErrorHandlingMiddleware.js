const ApiError = require('../erorr/ApiError')

module.exports = function (err, req, res, next) {
	if(err instanceof ApiError) {
		res.status(err.status).json({message: err.message})
	}
	return req.status(500).json({message: 'Ошибка сервера'})
}