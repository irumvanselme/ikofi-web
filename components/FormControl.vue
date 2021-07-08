<template>
	<div>
		<label :for="input_id" class="cursor-pointer">
			{{ label }}
		</label>
		<div
			class="
				flex
				mt-2
				border
				w-full
				bg-white
				px-4
				py-2
				rounded-sm
				focus-within:border-purple-500
				focus-within:ring
				focus-within:ring-purple-300
				transition
			"
		>
			<input
				:id="input_id"
				:type="type"
				class="
					flex-grow
					bg-transparent
					focus:outline-none
					overflow-hidden
				"
				:placeholder="placeholder"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FormControl',
	props: {
		placeholder: {
			type: String,
			required: true,
		},
		label: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			default: 'text',
		},
	},
	data: () => ({
		input_id: null,
	}),
	mounted() {
		this.input_id = this._uid
	},
}
</script>

<style scoped></style>
