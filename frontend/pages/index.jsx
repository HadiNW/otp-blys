import Head from 'next/head'
import OTPBox from '../components/Otp-Box'

function Home() {
	return (
		<>
			<Head>
				<title>OTP Verification</title>
			</Head>
			<div className='home-page'>
				<div className='left'></div>
				<div className='right'>
					<OTPBox
						codeLength={6}
						title='Enter Your Verification Code'
						subtitle='Enter 6 digit verification code sent to your phone number'
					/>
				</div>
				<img src='/assets/atom.png' alt='' className='atom' />
				<img src='/assets/atom-line.png' alt='' className='atom-line' />
			</div>
		</>
	)
}

export default Home
