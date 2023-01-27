<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';

	import Input from '$lib/components/forms/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import Checkbox from '$lib/components/forms/Checkbox.svelte';

	export let form: ActionData;
</script>

<div class="container sign-up">
	<form method="POST" use:enhance>
		<Input
			value={form?.email ?? ''}
			name="email"
			type="email"
			required
			placeholder="john.doe@mail-ecv.com"
			error={form?.email_error}>Email*</Input
		>
		<Input
			value={form?.password ?? ''}
			name="password"
			required
			type="password"
			error={form?.password_error}>Mot de passe*</Input
		>
		<Input
			value={''}
			name="confirmedPassword"
			type="password"
			required
			error={form?.confirmedPassword_error}>Confirmer votre mot de passe*</Input
		>
		<Checkbox
			name="termAndConditions"
			reverse
			label="J’accepte les Conditions d’utilisation et la Politique de confidentialité"
			value={false}
		/>
		{#if form?.termAndConditions_error}
			<p class="error">{form?.termAndConditions_error}</p>
		{/if}

		<Button>Créer un compte</Button>

		{#if form?.success}
			<p class="success">Votre compte a bien été créé !</p>
		{/if}
	</form>
</div>

<style lang="sass">

	.sign-up
		margin-top: 5vh
		width: 100%

		form
			margin-top: 1rem
		
		.error
			color: $error
		
		.success
			color: $success

</style>
