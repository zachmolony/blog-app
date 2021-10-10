<template>
	<div class="container">
		<BlogListItem v-for="post in posts" :key="post.id" :post="post" />
	</div>
</template>

<script>
import BlogListItem from '@/components/BlogListItem.vue'

export default {
	name: 'BlogList',
	components: {
		BlogListItem,
	},
	props: {
		posts: { type: Array, required: true },
	},
}
</script>
