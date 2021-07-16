<template>
	<div class="grid grid-cols-5 gap-5 mt-12">
		<div class="col-span-1">
			<Sidebar />
		</div>
		<div class="col-span-4">
			<slot />
		</div>
	</div>
</template>

<script>
import Sidebar from '~/components/Sidebar'

export default {
	name: 'SettingsLayout',
	components: { Sidebar },
}
</script>

<style scoped></style>
