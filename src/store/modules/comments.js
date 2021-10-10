import blog from '@/api/blogApi'

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
		const comments = await blog.getPostComments()
		commit('SET_COMMENTS', comments)
	},
}

// mutations
const mutations = {
	SET_COMMENTS(state, comments) {
		state.all = comments
	},
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
}
