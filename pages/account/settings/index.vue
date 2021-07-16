<template>
	<SettingsLayout>
		<div>I am the index settings page</div>
	</SettingsLayout>
</template>

<script>
import SettingsLayout from '~/components/layouts/SettingsLayout'
export default {
	name: 'Index',
	components: { SettingsLayout },
	layout: 'Dashboard',
}
</script>

<style scoped></style>
