<template>
	<SettingsLayout title="Account Information">
		<h1 class="text-lg font-medium">
			Your account number is <span class="font-bold">3253</span>
		</h1>
		<h1 class="text-xl font-medium mt-5">Edit the PIN</h1>
		<Alert :message="alert.message" :status="alert.status" />
		<FormControl
			v-model="request.current_pin"
			type="password"
			label="current PIN"
			placeholder="PIN"
			class="w-2/3 mt-5"
		/>
		<FormControl
			v-model="request.new_pin"
			type="password"
			label="New PIN"
			placeholder="PIN"
			class="w-2/3 mt-5"
		/>
		<FormControl
			v-model="request.new_pin_confirmation"
			type="password"
			label="Retype PIN"
			placeholder="PIN"
			class="w-2/3 mt-5"
		/>
		<div class="w-1/3">
			<Button title="Change PIN" @click="changePIN" />
		</div>
	</SettingsLayout>
</template>

<script>
import Validator from 'validatorjs'

import SettingsLayout from '~/components/layouts/SettingsLayout'
import FormControl from '~/components/FormControl'
import Button from '~/components/Button'
import Alert from '~/components/Alert'
import { getFirstError } from '~/utils/functions'

export default {
	name: 'Index',
	components: { Alert, Button, FormControl, SettingsLayout },
	layout: 'Dashboard',
	middleware: 'auth',
	data: () => ({
		request: {
			current_pin: '',
			new_pin: '',
			new_pin_confirmation: '',
		},
		alert: {
			message: 'DoNot',
			status: 'Success',
		},
	}),
	methods: {
		async changePIN() {
			try {
				const validations = {
					current_pin: 'required|string',
					new_pin: 'required|string|digits:5|confirmed',
				}

				const valid = new Validator(this.request, validations)

				if (valid.fails(undefined)) {
					this.alert.message = getFirstError(
						valid.errors.all(),
						Object.keys(validations)
					)
					this.alert.status = 'Failure'
				} else {
					await this.$axios.put(
						'/api/settings/change-pin',
						valid.input
					)

					this.alert = {
						message: 'Successfully Changed PIN',
						status: 'Success',
					}
				}
			} catch (e) {
				this.alert = {
					message: e.response.data.message,
					status: 'Failure',
				}
			}
		},
	},
}
</script>

<style scoped></style>
