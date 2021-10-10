<template>
	<div class="my-6 box">
		<TextTitle :title="post.title" />
		<TextBody :text="post.body" />
		<SocialLinks />
	</div>
</template>

<script>
import TextBody from '@/components/TextBody.vue'
import SocialLinks from '@/components/SocialLinks.vue'
import TextTitle from '@/components/TextTitle.vue'

export default {
	name: 'BlogView',
	components: { TextTitle, SocialLinks, TextBody },
	props: {
		post: {
			type: Object,
			required: true,
		},
	},
}
</script>
