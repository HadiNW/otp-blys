import Head from 'next/head'

function success() {
	return (
		<>
			<Head>
				<title>Verification Success</title>
			</Head>
			<div className='success-page'>
				<img src='/assets/success.png' alt='' />
				<h3 className='title'>Okay, Great!!</h3>
				<p className='subtitle'>
					Your phone number has been verified successfully
				</p>
				<img src='/assets/spiral.png' alt='' className='spiral1' />
				<img src='/assets/spiral.png' alt='' className='spiral2' />
				<img src='/assets/atom-line.png' alt='' className='atom-line' />
				<img src='/assets/check-list.png' alt='' className='check-list' />
			</div>
		</>
	)
}

export default success
