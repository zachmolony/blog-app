<template>
	<article class="message is-danger">
		<div class="message-header">
			<b>Please correct the following error(s):</b>
			<button class="delete" aria-label="delete"></button>
		</div>
		<div class="message-body">
			<ul>
				<li v-for="(error, index) in errors" :key="index">{{ error }}</li>
			</ul>
		</div>
	</article>
</template>

<script>
export default {
	name: 'ErrorMessages',
	props: {
		errors: {
			type: Array,
			required: true,
		},
	},
}
</script>
