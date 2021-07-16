<template>
	<div
		v-if="message !== 'DoNot'"
		:class="
			'border-2 border-l-8 border-' +
			getColor() +
			'-500 bg-white shadow-lg px-4 py-2 mb-3 text-left'
		"
	>
		<span :class="'text-' + getColor() + '-500 font-medium'">{{
			message
		}}</span>
	</div>
</template>

<script>
export default {
	name: 'Alert',
	props: {
		status: {
			type: String,
			required: true,
			enum: ['Success', 'Danger'],
		},
		message: {
			type: String,
			required: true,
		},
	},
	methods: {
		getColor() {
			return this.status === 'Success' ? 'green' : 'red'
		},
	},
}
</script>

<style scoped></style>
