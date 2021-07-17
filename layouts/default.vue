<template>
	<div>
		<Header />
		<Nuxt />
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
