import axios from 'axios'
export default axios.create({
	baseURL: 'https://localhost:6666',
	headers: {
		api_key: process.env.NEXT_PUBLIC_API_KEY
	}
})
