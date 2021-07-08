<template>
	<Transactions title="You received">
		<Transaction />
		<Transaction />
		<Transaction />
		<Transaction />
		<Transaction />
		<Transaction />
		<Transaction />
		<Transaction />
		<Transaction />
		<Transaction />
		<Transaction />
	</Transactions>
</template>

<script>
import Transactions from '~/layouts/Transactions'
import Transaction from '~/components/Transaction'

export default {
	name: 'Received',
	components: { Transaction, Transactions },
	layout: 'Dashboard',
}
</script>

<style scoped></style>
