exports.otpAuthentication = (req, res) => {
	const otpCode = req.body.otp

	if (!otpCode) {
		res.status(422).json({
			message: 'Otp code is required'
		})
		return
	}

	if (otpCode.length !== 6 || otpCode[otpCode.length - 1] == 7) {
		res.status(400).json({
			message: 'Verification Error'
		})
		return
	}

	res.status(200).json({
		message: 'Verification Success'
	})
}
