<template>
	<div class="mt-5">
		<div class="grid grid-cols-3">
			<div class="col-span-2">
				<NuxtLink to="/money/send">
					<button
						class="
							bg-purple-600
							text-white
							py-2
							px-4
							rounded
							focus:ring focus:ring-purple-300
						"
					>
						Send Money
					</button>
				</NuxtLink>
				<div
					class="mt-5 py-4 pr-3 mr-12 overflow-y-auto transactions"
					style="height: calc(100vh - 170px)"
				>
					<div class="text-xl font-bold text-gray-700 pb-3">
						{{ title }}
					</div>
					<slot />
				</div>
			</div>
			<div>
				<AccountDetails />
			</div>
		</div>
	</div>
</template>

<script>
import AccountDetails from '~/components/AccountDetails'

export default {
	name: 'Transactions',
	components: { AccountDetails },
	props: {
		title: {
			type: String,
			required: true,
		},
	},
}
</script>
<style scoped lang="scss">
.transactions {
	&::-webkit-scrollbar {
		width: 6px;
	}

	&::-webkit-scrollbar-track {
		background-color: #eeeeee;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 4px;
		background-color: darkgrey;
	}
}
</style>
