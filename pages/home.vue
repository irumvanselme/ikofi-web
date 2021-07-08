<template>
	<Transactions title="All transactions">all transactions</Transactions>
</template>

<script>
import Transactions from '~/layouts/Transactions'
export default {
	name: 'Home',
	components: { Transactions },
	layout: 'Dashboard',
}
</script>
