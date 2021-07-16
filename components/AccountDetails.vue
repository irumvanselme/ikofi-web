<template>
	<div class="p-4 pt-7 rounded border shadow-lg">
		<img
			alt="Image"
			class="rounded-full p-2 border-2 border-purple-900 mx-5"
			height="110"
			src="/profile.jpeg"
			width="110"
		/>
		<div class="pt-4 px-5">
			<div class="text-lg pb-2 font-medium">
				<span class="text-gray-700">Names:</span> {{ user.full_names }}
			</div>
			<div class="text-lg pb-2">
				<span class="text-gray-700">Username:</span> {{ user.username }}
			</div>
			<div class="pb-2 text-gray-700 hover:underline cursor-pointer">
				<span class="text-gray-700">Email:</span> {{ user.email }}
			</div>
			<div>
				<span class="text-gray-700">Mobile:</span>
				{{ user.mobile }}
			</div>
			<div class="mt-2">
				<span class="text-gray-700">Address</span>
				{{ user.profile.address }}
			</div>
			<div class="mt-2">
				<span class="text-gray-700">ID Card</span>
				{{ user.profile.id_card }}
			</div>
			<div class="mt-2">
				<span class="text-gray-700">Account number: </span>
				{{ user.account.accountNumber }}
			</div>
		</div>
		<div
			class="
				bg-gray-200
				text-3xl
				mt-8
				text-center
				font-bold
				p-3
				rounded-lg
			"
		>
			{{ balance.toLocaleString() }} FRW
		</div>
	</div>
</template>

<script>
export default {
	name: 'AccountDetails',
	data: () => ({
		user: {
			id: 1,
			full_names: '',
			email: '',
			mobile: '',
			username: '',
			profile: {
				id: 1,
				address: '',
				id_card: '',
				title: '',
			},
			account: {
				id: 1,
				accountNumber: '12',
				createdAt: '',
				user: 1,
			},
		},
		balance: 0,
	}),
	async created() {
		this.user = this.$auth.user
		const { data } = await this.$axios.get('api/account/balance')
		this.balance = data.data
	},
	methods: {},
}
</script>
