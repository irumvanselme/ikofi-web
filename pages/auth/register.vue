<template>
    <div class="w-1/3">
        <h1 class="text-3xl font-bold">Register into ikofi system</h1>
        <FormControl placeholder="Full names *" />
        <FormControl placeholder="Email *" />
        <FormControl placeholder="Username *" />
        <FormControl placeholder="ID card" />
        <FormControl placeholder="Address *" />
        <FormControl placeholder="Telphone *" />
        <FormControl placeholder="Password *" type="password" />
        <div>
            <button
                class="
                    bg-purple-500
                    text-white text-xl
                    font-bold
                    w-full
                    mt-5
                    py-2
                    rounded
                    shadow-lg
                "
            >
                Log in
            </button>
        </div>
    </div>
</template>

<script>
import FormControl from '~/components/FormControl'
export default {
    name: 'Register',
    components: { FormControl },
}
</script>

<style scoped></style>
