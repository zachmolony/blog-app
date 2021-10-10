<template>
	<p class="pb-4">{{ text }}</p>
</template>

<script>
export default {
	name: 'TextBody',
	props: {
		text: { type: String, required: true },
	},
}
</script>
