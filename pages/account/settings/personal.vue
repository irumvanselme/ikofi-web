<template>
	<SettingsLayout title="Edit personal information">
		<div class="w-2/3">
			<Alert :message="alert.message" :status="alert.status" />
			<FormControl
				v-model="request.full_name"
				placeholder="Full names"
				label="Full names *"
				class="mt-4"
			/>

			<FormControl
				v-model="request.email"
				placeholder="Email"
				label="Email *"
				class="mt-4"
			/>
			<FormControl
				v-model="request.username"
				placeholder="Username"
				label="Username *"
				class="mt-4"
			/>

			<FormControl
				v-model="request.id_card"
				placeholder="ID card"
				label="ID card"
				class="mt-4"
			/>

			<FormControl
				v-model="request.address"
				placeholder="Address"
				label="Address *"
				class="mt-4"
			/>
			<FormControl
				v-model="request.mobile"
				placeholder="Telphone"
				label="Telephone *"
				class="mt-4"
			/>
		</div>

		<div class="mt-6 w-1/3">
			<Button title="Register" @click="register" />
		</div>
	</SettingsLayout>
</template>

<script>
import Validator from 'validatorjs'

import SettingsLayout from '~/components/layouts/SettingsLayout'

import { getFirstError } from '~/utils/functions'
export default {
	name: 'personal',
	components: { SettingsLayout },
	layout: 'Dashboard',
	data: () => ({
		request: {
			full_name: '',
			email: '',
			username: '',
			mobile: '',
			password: '',
			password_confirmation: '',
			id_card: '',
			address: '',
			pin: '12345',
		},
		alert: {
			message: 'DoNot',
			status: 'Success',
		},
	}),
	methods: {
		async register() {
			const validations = {
				full_name: 'required|string|min:3',
				email: 'required|email',
				username: 'required|string|min:3',
				mobile: 'required|numeric|min:8',
				id_card: 'string|digits:16',
				address: 'required|string|min:4',
			}
			const valid = new Validator(this.request, validations)

			if (valid.fails()) {
				this.alert.message = getFirstError(
					valid.errors.all(),
					Object.keys(validations)
				)
				this.alert.status = 'Failure'
			} else {
				await this.$axios.post('/api/auth/register', this.request)

				this.alert = {
					message: 'Successfully created your account',
					status: 'Success',
				}
			}
		},
	},
}
</script>

<style scoped></style>
