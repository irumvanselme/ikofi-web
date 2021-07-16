<template>
	<Activities title="You sent">
		<div v-for="(transaction, i) of transactions" :key="i">
			<Activity :activity="transaction" />
		</div>
	</Activities>
</template>

<script>
import Activities from '~/components/layouts/Activities'
import Activity from '~/components/Activity'

export default {
	name: 'Sent',
	components: { Activity, Activities },
	layout: 'Dashboard',
	async asyncData({ $axios }) {
		const {
			data: { data },
		} = await $axios.get('/api/activities/SEND_MONEY')

		return { transactions: data }
	},
	data: () => ({
		transactions: [],
	}),
}
</script>

<style scoped></style>
