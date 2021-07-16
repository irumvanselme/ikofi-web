<template>
	<Transactions title="You sent">
		<div v-for="(transaction, i) of transactions" :key="i">
			<Transaction :transaction="transaction" />
		</div>
	</Transactions>
</template>

<script>
import Transactions from '~/layouts/Transactions'
import Transaction from '~/components/Transaction'

export default {
	name: 'Sent',
	components: { Transaction, Transactions },
	layout: 'Dashboard',
	async asyncData({ $axios }) {
		const {
			data: { data },
		} = await $axios.get('/api/account/transactions/sent')

		return { transactions: data }
	},
	data: () => ({
		transactions: [],
	}),
}
</script>

<style scoped></style>
