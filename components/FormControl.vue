<template>
    <div class="mt-5 flex border w-full bg-white px-4 py-2 focus-within:shadow">
        <input
            :type="type"
            class="flex-grow bg-transparent focus:outline-none"
            :placeholder="placeholder"
        />
    </div>
</template>

<script>
export default {
    name: 'FormControl',
    props: {
        placeholder: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: 'text',
        },
    },
}
</script>

<style scoped></style>
