<template>
	<div class="grid grid-cols-5 gap-5 mt-12">
		<div class="col-span-1">
			<Sidebar />
		</div>
		<div class="col-span-4">
			<h1 class="text-xl font-bold mb-5">{{ title }}</h1>
			<slot />
		</div>
	</div>
</template>

<script>
import Sidebar from '~/components/Sidebar'

export default {
	name: 'SettingsLayout',
	components: { Sidebar },
	props: {
		title: {
			type: String,
			required: true,
		},
	},
}
</script>

<style scoped></style>
