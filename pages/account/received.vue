<template>
	<Activities title="You received">
		<div v-for="(transaction, i) of transactions" :key="i">
			<Activity :activity="transaction" />
		</div>
	</Activities>
</template>

<script>
import Activities from '~/components/layouts/Activities'
import Activity from '~/components/Activity'

export default {
	name: 'Received',
	components: { Activity, Activities },
	layout: 'Dashboard',
	async asyncData({ $axios }) {
		const {
			data: { data },
		} = await $axios.get('/api/activities/RECEIVE_MONEY')

		return { transactions: data }
	},
	data: () => ({
		transactions: [],
	}),
}
</script>

<style scoped></style>
