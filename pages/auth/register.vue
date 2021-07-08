<template>
	<div class="w-2/5">
		<h1 class="text-3xl font-bold mb-12">Register into ikofi system</h1>
		<div class="mt-5">
			<FormControl placeholder="Full names" label="Full names *" />
		</div>
		<div class="mt-5 grid grid-cols-2">
			<div>
				<FormControl placeholder="Email" label="Email *" />
			</div>
			<div class="pl-3">
				<FormControl placeholder="Username" label="Username *" />
			</div>
		</div>
		<div class="mt-4">
			<FormControl placeholder="ID card" label="ID card" />
		</div>
		<div class="mt-4 grid grid-cols-2">
			<div class="pr-3">
				<FormControl placeholder="Address" label="Address *" />
			</div>
			<div>
				<FormControl placeholder="Telphone" label="Telephone *" />
			</div>
		</div>
		<div class="mt-4">
			<FormControl
				placeholder="Password"
				type="password"
				label="Password *"
			/>
		</div>
		<div class="mt-6">
			<Button title="Register" />
		</div>
		<div class="mt-8">
			<Link to="/auth/login" text="Already have an account ?" />
		</div>
	</div>
</template>

<script>
import FormControl from '~/components/FormControl'
import Link from '~/components/Link'
import Button from '~/components/Button'

export default {
	name: 'Register',
	components: { Button, FormControl, Link },
}
</script>

<style scoped></style>
