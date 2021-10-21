import axios from 'axios'

export default {
	async getPosts() {
		try {
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/posts'
			)
			return response.data
		} catch (error) {
			console.error(error)
		}
	},
	async getPostComments() {
		try {
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/comments'
			)
			return response.data
		} catch (error) {
			console.error(error)
		}
	},
	async addComment(comment) {
		try {
			const response = await axios.post(
				'https://jsonplaceholder.typicode.com/comments',
				comment
			)
			return response.data
		} catch (error) {
			console.error(error)
		}
	},
}
