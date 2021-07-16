<template>
	<SettingsLayout title="Account Information">
		<h1 class="text-lg font-medium">
			Your account number is <span class="font-bold">3253</span>
		</h1>
		<h1 class="text-xl font-medium mt-5">Edit the PIN</h1>
		<FormControl
			type="password"
			label="Account PIN"
			placeholder="PIN"
			class="w-2/3 mt-5"
		/>
		<div class="w-1/3">
			<Button title="Change PIN" />
		</div>
	</SettingsLayout>
</template>

<script>
import SettingsLayout from '~/components/layouts/SettingsLayout'
import FormControl from '~/components/FormControl'
import Button from '~/components/Button'

export default {
	name: 'Index',
	components: { Button, FormControl, SettingsLayout },
	layout: 'Dashboard',
}
</script>

<style scoped></style>
