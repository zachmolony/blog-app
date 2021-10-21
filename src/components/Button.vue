<template>
	<nav class="level">
		<div class="level-right">
			<div class="level-item">
				<a @click="$emit('click')" class="button is-info"><slot /></a>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'Button',
}
</script>
