<template>
	<nav class="level is-mobile">
		<div class="level-left">
			<CTA type="reply" />
			<CTA type="retweet" />
			<CTA type="heart" />
		</div>
	</nav>
</template>

<script>
import CTA from './CTA.vue'
export default {
	name: 'SocialLinks',
	components: { CTA },
}
</script>
