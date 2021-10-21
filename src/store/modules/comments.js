import blogApi from '@/api/blogApi'

// initial state
const state = () => ({
	all: [],
})

// getters
const getters = {
	getCommentsByPostId: state => id => {
		return state.all.filter(comment => comment.postId == id)
	},
}

// actions
const actions = {
	async fetchComments({ commit }) {
		const comments = await blogApi.getPostComments()
		commit('SET_COMMENTS', comments)
	},
	addComment({ commit, state }, comment) {
		const formattedComment = {
			...comment,
			id: state.all.length,
			name: 'Zach Molony',
			email: 'zachm@gmail.com',
		}
		blogApi.addComment(formattedComment)
		commit('ADD_COMMENT', formattedComment)
	},
}

// mutations
const mutations = {
	SET_COMMENTS(state, comments) {
		state.all = comments
	},
	ADD_COMMENT(state, comment) {
		state.all.unshift(comment)
	},
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
}
