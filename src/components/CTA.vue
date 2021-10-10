<template>
	<p class="level-item">
		<span class="icon is-small"
			><em class="fas" :class="classObject"></em
		></span>
	</p>
</template>

<script>
export default {
	name: 'CTA',
	props: {
		type: String,
	},
	computed: {
		classObject() {
			return {
				[`fa-${this.type}`]: true,
			}
		},
	},
}
</script>

<style scoped>
.icon {
	color: #42b983;
}
</style>
