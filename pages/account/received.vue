<template>
	<Transactions title="You received">
		<div v-for="(transaction, i) of transactions" :key="i">
			<Transaction :transaction="transaction" />
		</div>
	</Transactions>
</template>

<script>
import Transactions from '~/layouts/Transactions'
import Transaction from '~/components/Transaction'

export default {
	name: 'Received',
	components: { Transaction, Transactions },
	layout: 'Dashboard',
	async asyncData({ $axios }) {
		const {
			data: { data },
		} = await $axios.get('/api/account/transactions/received')

		return { transactions: data }
	},
	data: () => ({
		transactions: [],
	}),
}
</script>

<style scoped></style>
