<template>
	<div class="p-4 pt-7 rounded border shadow-lg">
		<img
			alt="Image"
			class="rounded-full p-2 border-2 border-purple-900 mx-auto"
			height="110"
			src="/profile.jpeg"
			width="110"
		/>
		<div class="pt-4 px-4 text-center">
			<div class="text-lg pb-2 font-medium text-center">
				IRUMVA HABUMUGISHA Anselme
			</div>
			<div class="pb-2 text-gray-700 hover:underline cursor-pointer">
				andesanselme@gmail.com
			</div>
			<div>+250 783 384 212</div>
			<div class="mt-2">Kirehe - Rwanda</div>
		</div>
		<div
			class="
				bg-gray-200
				text-3xl
				mt-8
				text-center
				font-bold
				p-3
				rounded-lg
			"
		>
			200, 000 Frw
		</div>
	</div>
</template>

<script>
export default {
	name: 'AccountDetails',
	created() {
		console.log('I am the user', this.$auth.user)
	},
}
</script>
