<template>
	<figure class="media-left">
		<p class="image is-64x64">
			<slot>
				<img src="@/assets/logo.png" alt="Vue logo" />
			</slot>
		</p>
	</figure>
</template>

<script>
export default {
	name: 'Avatar',
}
</script>
