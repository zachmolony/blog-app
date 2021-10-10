<template>
	<div class="my-3 py-2">
		<h1 class="title">{{ title }}</h1>
		<slot />
	</div>
</template>

<script>
export default {
	name: 'TextTitle',
	props: {
		title: {
			type: String,
			required: true,
		},
	},
}
</script>
