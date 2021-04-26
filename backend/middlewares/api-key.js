exports.checkApiKey = (req, res, next) => {
	if (!req.headers.api_key) {
		res.status(403).json({
				message: 'api_key is required',
		})
		return 
	}
	if (req.headers.api_key !== process.env.API_KEY) {
		res.status(403).json({
				message: 'api_key is invalid',
		})
		return 
	}
	next()
}