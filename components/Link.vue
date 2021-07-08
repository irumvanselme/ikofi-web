<template>
    <div>
        <div class="text-center mt-8">
            <NuxtLink :to="to" class="text-purple-800 hover:underline">
                {{ text }}
            </NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Link',
    props: {
        to: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
    },
}
</script>
