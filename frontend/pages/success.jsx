import Head from 'next/head'

function success() {
	return (
		<>
			<Head>
				<title>Verification Success</title>
			</Head>
			<div className="success-page">
				<img src="/assets/success.png" alt=""/>
				<h3 className="title">Okay, Great!!</h3>
				<p className="subtitle">Your phone number has been verified successfully</p>
			</div>
		</>
	)
}

export default success
