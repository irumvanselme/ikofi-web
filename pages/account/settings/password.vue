<template>
	<SettingsLayout title="Change your password">
		<div class="min-w-min w-2/3 mt-6">
			<Alert :message="alert.message" :status="alert.status" />
			<FormControl
				v-model="request.current_password"
				type="password"
				label="Current Password"
				placeholder=""
				class="mt-4"
			/>
			<FormControl
				v-model="request.new_password"
				type="password"
				label="New Password"
				placeholder=""
				class="mt-4"
			/>
			<FormControl
				v-model="request.new_password_confirmation"
				type="password"
				label="Confirm Password"
				placeholder=""
				class="mt-4"
			/>

			<Button
				title="Change Password"
				class="mt-12"
				@click="updatePassword"
			/>
		</div>
	</SettingsLayout>
</template>

<script>
import Validator from 'validatorjs'

import SettingsLayout from '~/components/layouts/SettingsLayout'
import FormControl from '~/components/FormControl'
import Button from '~/components/Button'

import { getFirstError } from '~/utils/functions'

export default {
	name: 'Password',
	components: { Button, FormControl, SettingsLayout },
	layout: 'Dashboard',
	data: () => ({
		request: {
			current_password: '',
			new_password: '',
			new_password_confirmation: '',
		},
		alert: {
			message: 'DoNot',
			status: 'Success',
		},
	}),
	methods: {
		async updatePassword() {
			const validations = {
				current_password: 'required|string|min:8',
				new_password: 'required|string|min:8|confirmed',
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
					'/api/account/change-password',
					this.request
				)

				this.alert = {
					message: 'Successfully Changed Password',
					status: 'Success',
				}
			}
		},
	},
}
</script>

<style scoped></style>
