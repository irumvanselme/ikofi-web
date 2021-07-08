<template>
	<div>
		<NuxtLink :to="to" :class="color + ' hover:underline'">
			{{ text }}
		</NuxtLink>
	</div>
</template>

<script>
export default {
	name: 'Link',
	props: {
		to: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
		color: {
			type: String,
			default: 'text-purple-800',
		},
	},
}
</script>
