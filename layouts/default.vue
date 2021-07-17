<template>
	<div class="flex flex-col justify-between min-h-screen">
		<div>
			<Header class="mb-5" />
			<Nuxt />
		</div>
		<Footer />
	</div>
</template>

<script>
import Header from '~/components/site/Header'
import Footer from '~/components/site/Footer'
export default {
	name: 'Default',
	components: { Footer, Header },
}
</script>

<style scoped></style>
