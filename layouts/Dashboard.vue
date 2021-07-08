<template>
	<div class="bg-gray-50 h-screen">
		<Navbar />
		<div class="flex justify-center">
			<div class="w-full md:w-10/12 lg:w-2/3 mt-4">
				<Nuxt />
			</div>
		</div>
	</div>
</template>

<script>
import Navbar from '~/components/Navbar'
export default {
	name: 'Dashboard',
	components: { Navbar },
}
</script>
