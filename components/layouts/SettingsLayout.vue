<template>
	<div class="grid grid-cols-4 gap-10 mt-12">
		<div class="col-span-1">
			<Sidebar />
		</div>
		<div class="col-span-3">
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
	middleware: 'auth',
	props: {
		title: {
			type: String,
			required: true,
		},
	},
}
</script>

<style scoped></style>
