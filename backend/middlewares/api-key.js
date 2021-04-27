exports.checkApiKey = (req, res, next) => {
	console.log('req', req.headers.api_key)
	if (!req.headers.api_key) {
		res.status(403).json({
				message: 'api_key is required',
		})
		return 
	}

	console.log(process.env.API_KEY)
	if (req.headers.api_key !== process.env.API_KEY) {
		res.status(403).json({
				message: 'api_key is invalid',
		})
		return 
	}
	next()
}