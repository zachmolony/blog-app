<template>
	<article class="media box" @click="handleLink">
		<Avatar />
		<div class="media-content">
			<BlogListItemText :post="post" />
			<SocialLinks />
		</div>
	</article>
</template>

<script>
import Avatar from './Avatar.vue'
import BlogListItemText from './BlogListItemText.vue'
import SocialLinks from './SocialLinks.vue'

export default {
	components: { Avatar, SocialLinks, BlogListItemText },
	name: 'BlogListItem',
	props: {
		post: Object,
	},
	methods: {
		handleLink() {
			this.$router.push({
				path: `/post/${this.post.id}`,
				params: { ...this.post },
			})
		},
	},
}
</script>
