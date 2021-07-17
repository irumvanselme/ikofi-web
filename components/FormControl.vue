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
				v-model="input_value"
				:type="type"
				:value="defaultValue"
				class="
					flex-grow
					bg-transparent
					focus:outline-none
					overflow-hidden
				"
				:placeholder="placeholder"
				@input="handleInput"
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
		defaultValue: {
			type: String,
			default: '',
		},
	},

	data: () => ({
		input_id: null,
		input_value: '',
	}),
	mounted() {
		this.input_id = this._uid
	},
	created() {
		this.input_value = this.defaultValue
	},
	methods: {
		handleInput() {
			this.$emit('input', this.input_value)
		},
	},
}
</script>

<style scoped></style>
