<template>
	<Transactions title="All transactions">
		<div v-for="(transaction, i) of transactions" :key="i">
			<Transaction :transaction="transaction" />
		</div>
	</Transactions>
</template>

<script>
import Transactions from '~/layouts/Transactions'
import Transaction from '~/components/Transaction'

export default {
	name: 'Home',
	components: { Transaction, Transactions },
	layout: 'Dashboard',
	async asyncData({ $axios }) {
		const {
			data: { data },
		} = await $axios.get('/api/activities')

		return { transactions: data }
	},
	data: () => ({
		transactions: [],
	}),
}
</script>
