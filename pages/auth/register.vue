<template>
	<div class="w-1/3">
		<h1 class="text-3xl font-bold mb-12">
			Register into <LogoText /> system
		</h1>
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
			v-model="request.mobile"
			placeholder="Telephone"
			label="Telephone *"
			class="mt-4"
		/>
		<div class="mt-4 grid grid-cols-2 gap-3">
			<FormControl
				v-model="request.password"
				placeholder="Password"
				type="password"
				label="Password *"
			/>
			<FormControl
				v-model="request.password_confirmation"
				placeholder="Retype password"
				type="password"
				label="Confirm password *"
			/>
		</div>
		<div class="mt-6">
			<Button title="Register" @click="register" />
		</div>
		<div class="mt-8">
			<Link to="/auth/login" text="Already have an account ?" />
		</div>
	</div>
</template>

<script>
import Validator from 'validatorjs'

import FormControl from '~/components/FormControl'
import Link from '~/components/Link'
import Button from '~/components/Button'

import { getFirstError } from '~/utils/functions'
import Alert from '~/components/Alert'
import LogoText from '~/components/logo/LogoText'

export default {
	name: 'Register',
	components: { LogoText, Alert, Button, FormControl, Link },
	layout: 'AuthPage',
	data: () => ({
		request: {
			full_name: '',
			email: '',
			username: '',
			mobile: '',
			password: '',
			password_confirmation: '',
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
				mobile: 'required|string|min:8',
				password_confirmation: 'required|string',
				password: 'required|string|min:8|confirmed',
			}
			const valid = new Validator(this.request, validations)

			if (valid.fails(undefined)) {
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

				await this.$auth.loginWith('local', {
					data: {
						login: this.request.email,
						password: this.request.password,
					},
				})

				this.alert.message = 'Successfully logged in'
				this.alert.status = 'Success'
				this.$auth.onError((e) => {
					this.alert.message = e.response.data
					this.alert.status = 'Failure'
				})

				await this.$router.push('/home')
			}
		},
	},
}
</script>

<style scoped></style>
