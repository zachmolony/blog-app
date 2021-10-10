<template>
	<div class="container">
		<BlogView :post="post" />
		<div class="box">
			<CommentBox />
			<Comment
				v-for="comment in comments"
				:key="comment.id"
				:comment="comment"
			/>
		</div>
	</div>
</template>

<script>
import BlogView from '@/components/BlogView.vue'
import Comment from '@/components/Comment.vue'
import CommentBox from '@/components/CommentBox.vue'

export default {
	name: 'BlogPost',
	components: { BlogView, CommentBox, Comment },
	computed: {
		post() {
			return this.$store.getters['blog/getPostById'](this.$route.params.id)
		},
		comments() {
			return this.$store.getters['comments/getCommentsByPostId'](
				this.$route.params.id
			)
		},
	},
}
</script>
