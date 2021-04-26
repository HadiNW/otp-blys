import { useState } from 'react'

const OTPBox = ({ codeLength, title, sendOtp }) => {
	const [codes, setCodes] = useState(() => new Array(codeLength).fill(''))

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
		const clipboardText = e.clipboardData
			.getData('text/plain')
			.trim()
			.replaceAll(' ', '')

		if (isNaN(clipboardText)) {
			return
		}

		const clipboard = clipboardText.split('')

		let result = []

		// check if clipboard length > otp boxes
		if (clipboard.length >= codes.length) {
			result = clipboard.splice(0, codes.length)
		} else {
			// splice all clipboard,
			const splicedClipBoard = [...clipboard.splice(0, clipboard.length)]
			const splicedCodes = [
				...codes.splice(
					clipboard.length,
					codes.length - splicedClipBoard.length,
				),
			]
			result = [...splicedClipBoard, ...splicedCodes]
		}

		setCodes(result)
	}

	const handleSend = () => sendOtp(codes.join(''))

	return (
		<div className='verification-code'>
			<h3 className='title'>{title}</h3>
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
			<button onClick={handleSend}>send OTP</button>
		</div>
	)
}

export default OTPBox
