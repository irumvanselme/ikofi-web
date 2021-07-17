<template>
	<div class="bg-purple-900 text-white py-5 shadow-lg">
		<div class="container flex justify-between items-center mx-auto">
			<h1
				class="text-3xl font-black"
				style="font-family: Poppins, sans-serif"
			>
				<LogoText />
			</h1>
			<div class="flex">
				<Link
					to="/about-us"
					text="About us"
					color="white"
					class="px-4"
				/>
				<Link
					to="/about-us"
					text="Services"
					color="white"
					class="px-4"
				/>
				<Link
					to="/about-us"
					text="Pricing"
					color="white"
					class="px-4"
				/>
				<Link
					to="/about-us"
					text="Contact us"
					color="white"
					class="px-4"
				/>
			</div>
			<div>
				<NuxtLink
					to="/auth/login"
					class="
						py-3
						px-4
						mr-1
						rounded-l-full rounded-r-full
						hover:bg-white hover:bg-opacity-10
						font-medium
						text-lg
					"
				>
					Log in
				</NuxtLink>
				<NuxtLink
					to="/auth/register"
					class="
						py-3
						px-4
						mr-1
						rounded-l-full rounded-r-full
						hover:bg-white hover:bg-opacity-10
						font-medium
						text-lg
					"
				>
					Register
				</NuxtLink>
				<NuxtLink
					to="/download"
					class="
						py-3
						px-8
						rounded-l-full rounded-r-full
						text-lg
						font-medium
						shadow-xl
						bg-pink-500
					"
				>
					Download app
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script>
import LogoText from '~/components/logo/LogoText'
import Link from '~/components/Link'
export default {
	name: 'Header',
	components: { Link, LogoText },
}
</script>

<style scoped></style>
