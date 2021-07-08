<template>
	<Transactions title="All transactions">
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
	name: 'Home',
	components: { Transaction, Transactions },
	layout: 'Dashboard',
}
</script>
