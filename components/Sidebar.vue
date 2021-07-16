<template>
	<div class="rounded border bg-gray-100">
		<div class="py-2 px-5">Menu</div>
		<div
			v-for="(link, i) of links"
			:key="i"
			class="border-t py-2 px-5 hover:bg-white cursor-pointer"
		>
			{{ link }}
		</div>
	</div>
</template>

<script>
export default {
	name: 'Sidebar',
	data: () => ({
		links: [
			'Personal Infromation',
			'Account information',
			'Change Password',
		],
	}),
}
</script>

<style scoped></style>
