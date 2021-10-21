<template>
	<article class="media">
		<Avatar
			><img src="https://bulma.io/images/placeholders/128x128.png"
		/></Avatar>
		<div class="media-content">
			<div class="field">
				<p class="control">
					<textarea
						v-model="comment"
						class="textarea"
						placeholder="Add a comment..."
					></textarea>
				</p>
			</div>
			<ErrorMessages v-if="errors.length" :errors="errors" />
			<Button @click="submitForm">Submit</Button>
		</div>
	</article>
</template>

<script>
import Avatar from './Avatar.vue'
import Button from './Button.vue'
import ErrorMessages from './ErrorMessages.vue'

export default {
	components: { Avatar, Button, ErrorMessages },
	name: 'CommentBox',
	data() {
		return {
			comment: '',
			errors: [],
		}
	},
	methods: {
		submitForm() {
			this.isFormValid()
			if (this.isFormValid()) {
				this.$store.dispatch('comments/addComment', {
					postId: this.$route.params.id,
					body: this.comment,
				})
			}
			this.comment = ''
		},
		isFormValid() {
			this.errors = []
			if (this.comment === '') {
				this.errors.push('Comment cannot be blank')
			}
			return this.errors.length === 0
		},
	},
}
</script>
