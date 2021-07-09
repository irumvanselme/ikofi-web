<template>
	<div class="mt-5 p-3 px-5 border rounded shadow flex justify-between">
		<div>
			Received
			<span class="font-medium">{{ transaction.amount }}</span>
			from
			<span class="font-medium">{{
				transaction[getPartner()].user.full_names
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
		this.user = this.$auth.user
	},
	methods: {
		getMe() {
			if (this.user.id === this.transaction.sender.id) return 'sender'
			if (this.user.id === this.transaction.sender.id) return 'receiver'
		},

		getPartner() {
			if (this.user.id === this.transaction.sender.id) return 'receiver'
			if (this.user.id === this.transaction.sender.id) return 'sender'
		},
	},
}
</script>
