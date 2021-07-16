<template>
	<div class="md:w-1/3">
		<h1 class="text-3xl font-bold mb-12">Log into ikofi system</h1>
		<Alert :message="alert.message" :status="alert.status" />
		<div class="mt-5">
			<FormControl
				v-model="request.login"
				placeholder="Email or username or phone"
				label="Email or username or phone"
			/>
		</div>
		<div class="mt-5">
			<FormControl
				v-model="request.password"
				placeholder="Password"
				type="password"
				label="Password"
			/>
		</div>
		<div class="mt-6">
			<Button title="Log in" @click="logIn" />
		</div>
		<div class="mt-8">
			<Link to="/auth/register" text="Don't have an account ?" />
		</div>
	</div>
</template>

<script>
import FormControl from '~/components/FormControl'
import Button from '~/components/Button'
import Link from '~/components/Link'
import Alert from '~/components/Alert'

export default {
	name: 'Login',
	components: { Alert, Link, Button, FormControl },
	data: () => ({
		request: {
			login: '',
			password: '',
		},
		alert: {
			message: 'DoNot',
			status: 'Success',
		},
	}),
	methods: {
		async logIn() {
			try {
				await this.$auth.loginWith('local', { data: this.request })
				this.alert.message = 'Successfully logged in'
				this.alert.status = 'Success'
			} catch (e) {
				this.alert.message = e.response.data.data
				this.alert.status = 'Failure'
			}
		},
	},
}
</script>

<style scoped></style>
