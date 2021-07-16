<template>
	<div class="mt-5 p-3 px-5 border rounded shadow flex justify-between">
		<div>
			{{ activity.action === 'SEND_MONEY' ? 'Send' : 'Received' }}
			<span class="font-medium">{{ activity.transaction.amount }}</span>
			from
			<span class="font-medium">{{
				activity.transaction.receiver.accountNumber
			}}</span>
		</div>
		<div class="text-sm text-gray-400">
			{{ formatDate(activity.transaction.done_at) }}
		</div>
	</div>
</template>

<script>
import moment from 'moment'

export default {
	name: 'Transaction',
	props: {
		activity: {
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
		formatDate(date) {
			return moment(date).fromNow()
		},
	},
}
</script>
