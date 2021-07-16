<template>
	<div class="text-center pt-12">
		<h1 class="text-2xl font-bold">Send Money with ikofi</h1>
		<div class="w-2/3 mx-auto mt-8">
			<Alert :message="alert.message" :status="alert.status" />

			<FormControl
				v-model="request.account_number"
				placeholder="Receiver account number"
				class="text-left"
				label="Receiver's account number"
			/>
			<FormControl
				v-model="request.amount"
				placeholder="Amount"
				class="text-left mt-5"
				label="Amount *"
				type="number"
			/>
			<FormControl
				v-model="request.pin"
				placeholder="PIN"
				class="text-left mt-5"
				label="Account PIN *"
				type="number"
			/>
			<Button title="Send" @click="sendMoney" />
		</div>
	</div>
</template>

<script>
import Validator from 'validatorjs'

import FormControl from '~/components/FormControl'
import Button from '~/components/Button'

import { getFirstError } from '~/utils/functions'

export default {
	name: 'Send',
	components: { Button, FormControl },
	layout: 'Dashboard',
	data: () => ({
		request: {
			account_number: '',
			amount: 0,
			pin: '',
		},
		alert: {
			message: 'DoNot',
			status: 'Success',
		},
	}),
	methods: {
		async sendMoney() {
			try {
				const validations = {
					account_number: 'required|string',
					amount: 'required|numeric|required|min:10',
					pin: 'required|string|digits:5',
				}

				const valid = new Validator(this.request, validations)

				if (valid.fails()) {
					this.alert.message = getFirstError(
						valid.errors.all(),
						Object.keys(validations)
					)
					this.alert.status = 'Failure'
				} else {
					await this.$axios.post('/api/money/send', valid.input)

					this.alert = {
						message: 'Successfully sent the money',
						status: 'Success',
					}
				}
			} catch (e) {
				this.alert = {
					message: e.response.data.data,
					status: 'Failure',
				}
			}
		},
	},
}
</script>
