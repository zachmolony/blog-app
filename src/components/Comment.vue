<template>
	<article class="media">
		<Avatar />
		<div class="media-content">
			<div class="content">
				<p>
					<strong>{{ comment.name }}</strong>
					<small> {{ comment.email }}</small>
					<br />
					{{ comment.body }}
				</p>
			</div>
			<SocialLinks />
		</div>
	</article>
</template>

<script>
import Avatar from './Avatar.vue'
import SocialLinks from './SocialLinks.vue'

export default {
	name: 'Comment',
	components: { SocialLinks, Avatar },
	props: {
		comment: {
			type: Object,
			required: true,
		},
	},
}
</script>
