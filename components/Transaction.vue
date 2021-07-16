<template>
	<div class="mt-5 p-3 px-5 border rounded shadow flex justify-between">
		<div>
			{{ transaction.action === 'SEND_MONEY' ? 'Send' : 'Received' }}
			<span class="font-medium">{{ transaction.amount }}</span>
			from
			<span class="font-medium">{{
				transaction.transaction.receiver.accountNumber
			}}</span>
		</div>
		<div class="text-sm text-gray-400">2 days ago</div>
	</div>
</template>

<script>
export default {
	name: 'Transaction',
	props: {
		transaction: {
			type: Object,
			required: true,
		},
	},
	data: () => ({
		user: {},
	}),
	created() {
		console.log(this.transaction)

		this.user = this.$auth.user
	},
}
</script>
