<template>
	<div class="rounded border bg-gray-100">
		<div class="py-2 px-5 font-bold">Menu</div>
		<NuxtLink
			v-for="(link, i) of links"
			:key="i"
			:to="'/account/settings/' + link.to"
			class="
				block
				border-t
				py-2
				px-5
				hover:shadow-lg
				hover:bg-purple-500
				hover:shadow-inner
				hover:text-white
				transition
				cursor-pointer
			"
			active-class="shadow-lg bg-purple-500 text-white shadow-inner bg-gray-50"
			exact
		>
			<div class="">
				{{ link.text }}
			</div>
		</NuxtLink>
	</div>
</template>

<script>
export default {
	name: 'Sidebar',
	data: () => ({
		links: [
			{
				text: 'Account information',
				to: '',
			},
			{
				text: 'Personal Infromation',
				to: 'personal',
			},
			{
				text: 'Change Password',
				to: 'password',
			},
		],
	}),
}
</script>

<style scoped></style>
