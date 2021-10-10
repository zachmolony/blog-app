<template>
	<div class="container">
		<TextTitle :title="`Zach's Blog`">
			<h2 class="subtitle">This is a blog about <strong>things.</strong></h2>
		</TextTitle>
		<BlogList :posts="posts" />
	</div>
</template>

<script>
import BlogList from '@/components/BlogList.vue'
import TextTitle from '@/components/TextTitle.vue'

export default {
	name: 'Home',
	components: {
		BlogList,
		TextTitle,
	},
	computed: {
		posts() {
			return this.$store.state.blog.all
		},
	},
}
</script>
