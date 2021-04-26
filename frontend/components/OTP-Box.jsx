import { useState } from 'react'

const OTPBox = ({ codeLength, title }) => {

	const [codes, setCodes] = useState(() => new Array(6).fill(''))

	const handleChange = (e, i) => {
		const value = e.target.value
		if (isNaN(value)) {
			return
		}

		setCodes((prevCodes) =>
			prevCodes.map((code, idx) => {
				console.log({ prevCodes })
				if (i === idx) {
					console.log(value.length, value, 'llo')
					return value
				} else {
					return code
				}
			}),
		)

		// check if last box
		if (e.target.value && e.target.nextSibling) {
			e.target.nextSibling.focus()
		}
	}

	const handlePaste = (e) => {
		const value = e.clipboardData.getData('text/plain').trim().split('')
		const spliced = value.splice(0, codes.length)
		// console.log('pasted', value, spliced)
		setCodes(spliced)
	}
	return (
		<div className='verification-code'>
			<h3 className='title'>Verification Code</h3>
			<div className='inputs'>
				{codes.map((code, i) => (
					<input
						type='text'
						className='code'
						maxLength='1'
						key={i}
						onChange={(e) => handleChange(e, i)}
						value={code}
						onFocus={(e) => e.target.select()}
						onPaste={handlePaste}
					/>
				))}
			</div>
		</div>
	)
}

export default OTPBox
