import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from '../lib/axios'

const OTPBox = ({ codeLength, title, sendOtp, subtitle }) => {
	const [codes, setCodes] = useState(() => new Array(codeLength).fill(''))
	const [errorValidation, setErrorValidation] = useState(false)
	const [errorMessage, setErrorMessage] = useState()

	const router = useRouter()

	const handleChange = (e, i) => {
		const value = e.target.value
		if (isNaN(value)) {
			e.target.classList.add('highlight')
			return
		}

		setCodes((prevCodes) =>
			prevCodes.map((code, idx) => {
				if (i === idx) {
					if (!value) {
						e.target.classList.add('highlight')
					} else {
						e.target.classList.remove('highlight')
					}
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

	const handleSend = async () => {
		const otpCode = codes.join('')

		if (errorValidation) {
			return
		}

		try {
			const { data } = await axios.post('/otp-authentication', {
				otp: otpCode,
			})

			if (data.message === 'Verification Success') {
				router.push('/success')
			}
		} catch (e) {
			setErrorMessage(e.response.data.message)
		}
	}

	useEffect(() => {
		const otp = codes.join('')
		if (!otp) {
			setErrorValidation(true)
		} else {
			setErrorValidation(false)
		}

		if (isNaN(otp)) {
			setErrorValidation(true)
		} else {
			setErrorValidation(false)
		}

		if (otp.length != codeLength) {
			setErrorValidation(true)
		} else {
			setErrorValidation(false)
		}
	}, [codes])

	return (
		<div className='verification-code'>
			<h3 className='title'>{title}</h3>
			<p className='subtitle'>{subtitle}</p>
			<div className='inputs'>
				{codes.map((code, i) => (
					<input
						type='text'
						className='input-code'
						maxLength='1'
						key={i}
						onChange={(e) => handleChange(e, i)}
						value={code}
						onFocus={(e) => e.target.select()}
						onPaste={handlePaste}
					/>
				))}
			</div>
			{errorMessage && <p className='error-message'>{errorMessage}</p>}
			<button
				className={errorValidation ? 'btn-gray' : 'btn-orange'}
				onClick={handleSend}
			>
				Verify
			</button>
		</div>
	)
}

export default OTPBox
