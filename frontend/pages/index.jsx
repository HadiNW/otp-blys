import Head from 'next/head'

import { useState } from 'react'
import OTPBox from '../components/Otp-Box'

function Home() {
	const sendOtpHandler = (otpCode) => {
		console.log(otpCode)
	}

	return (
		<div className='home-page'>
			<OTPBox
				codeLength={6}
				title='Verification Code'
				sendOtp={sendOtpHandler}
			/>
		</div>
	)
}

export default Home
