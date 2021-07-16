<template>
	<div
		class="
			bg-gradient-to-r
			text-white
			from-purple-700
			to-purple-900
			flex
			justify-center
			py-5
			shadow
		"
	>
		<div
			class="w-full md:w-10/12 lg:w-2/3 flex justify-between items-center"
		>
			<div class="flex items-baseline">
				<div class="pr-12">
					<span class="text-2xl font-bold">ikofi</span>
				</div>
				<div class="flex">
					<div class="pr-5">
						<Link to="/home" text="Summary" color="white" />
					</div>
					<div class="pr-5">
						<Link to="/account/sent" text="Sent" color="white" />
					</div>
					<div class="pr-5">
						<Link
							to="/account/received"
							text="Received"
							color="white"
						/>
					</div>
					<div class="pr-5">
						<Link
							to="/account/settings"
							text="Settings"
							color="white"
						/>
					</div>
				</div>
			</div>
			<div>
				<button
					class="
						font-bold
						text-sm
						hover:bg-white hover:bg-opacity-60 hover:text-purple-900
						px-3
						rounded
						py-1
						transition
					"
				>
					LOG OUT
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import Link from '~/components/Link'
export default {
	name: 'Navbar',
	components: { Link },
}
</script>
