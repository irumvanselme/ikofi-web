<template>
	<Activities title="All transactions">
		<div v-for="(transaction, i) of transactions" :key="i">
			<Activity :activity="transaction" />
		</div>
	</Activities>
</template>

<script>
import Activities from '~/layouts/Activities'
import Activity from '~/components/Activity'

export default {
	name: 'Home',
	components: { Activity, Activities },
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
