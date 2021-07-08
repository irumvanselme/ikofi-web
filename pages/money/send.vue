<template>
	<div class="text-center pt-12">
		<h1 class="text-2xl font-bold">Send Money with ikofi</h1>
		<div class="w-2/3 mx-auto mt-8">
			<div>
				<FormControl
					placeholder="Receiver"
					class="text-left"
					label="Receiver's username email or id *"
				/>
			</div>
			<div class="mt-5">
				<FormControl
					placeholder="Amount"
					class="text-left"
					label="Amount"
					type="number"
				/>
			</div>
			<div>
				<Button title="Send" />
			</div>
		</div>
	</div>
</template>

<script>
import FormControl from '~/components/FormControl'
import Button from '~/components/Button'
export default {
	name: 'Send',
	components: { Button, FormControl },
	layout: 'Dashboard',
}
</script>
