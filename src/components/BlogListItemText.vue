<template>
	<div class="content">
		<p>
			<strong>{{ post.title }}</strong>
			<br />
			{{ post.body }}
		</p>
	</div>
</template>

<script>
export default {
	name: 'BlogListItemText',
	props: {
		post: {
			type: Object,
			required: true,
		},
	},
}
</script>
