<template>
	<button
		class="
			bg-purple-500
			text-white text-xl
			font-bold
			w-full
			mt-5
			py-2
			rounded-sm
			shadow-lg
			transition
			focus:ring focus:ring-purple-300
			active:bg-purple-700
		"
		@click="onClick"
	>
		{{ title }}
	</button>
</template>

<script>
export default {
	name: 'Button',
	props: {
		title: {
			type: String,
			required: true,
		},
	},
	methods: {
		onClick() {
			this.$emit('click')
		},
	},
}
</script>

<style scoped></style>
