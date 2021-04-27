import axios from 'axios'

console.log(process.env.NEXT_PUBLIC_API_KEY, 'prc')

export default axios.create({
	baseURL: 'http://localhost:7777/api/v1',
	headers: {
		api_key: process.env.NEXT_PUBLIC_API_KEY
	}
})
