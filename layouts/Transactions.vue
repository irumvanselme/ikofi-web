<template>
	<div class="mt-5">
		<div class="grid grid-cols-3">
			<div class="col-span-2">
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
				<div class="mt-5">
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
