const express = require('express')
const router = express.Router()

const { checkApiKey } = require('../middlewares/api-key')
const { otpAuthentication } = require('../controller/otp-authentication')

router.post('/otp-authentication', checkApiKey , otpAuthentication)

module.exports = router
