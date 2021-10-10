import blog from '@/api/blogApi'

// initial state
const state = () => ({
	all: [],
})

// getters
const getters = {
	getPostById: state => id => {
		return state.all.find(post => post.id == id)
	},
}

// actions
const actions = {
	async fetchPosts({ commit }) {
		const posts = await blog.getPosts()
		commit('SET_POSTS', posts)
	},
}

// mutations
const mutations = {
	SET_POSTS(state, posts) {
		state.all = posts
	},
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
}
