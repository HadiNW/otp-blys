import axios from 'axios'

export default axios.create({
	baseURL: process.env.NEXT_PUBLIC_SERVER_API || 'http://localhost:7777/api/v1',
	headers: {
		api_key: process.env.NEXT_PUBLIC_API_KEY
	}
})
