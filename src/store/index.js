import Vue from 'vue'
import Vuex from 'vuex'
import blog from './modules/blog'
import comments from './modules/comments'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		blog,
		comments,
	},
})
