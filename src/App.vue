<template>
	<div id="app" class="container py-4">
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</div>
		<router-view />
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'App',
	methods: {
		...mapActions({
			fetchPosts: 'blog/fetchPosts',
			fetchComments: 'comments/fetchComments',
		}),
	},
	created() {
		this.fetchPosts()
		this.fetchComments()
	},
}
</script>

<style>
#app {
	font-family: 'Kanit', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	padding: 20px;
	margin: auto;
}

#nav {
	text-align: center;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
