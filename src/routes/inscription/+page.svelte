<script lang="ts">
	import type { ActionData } from './$types';

	import { enhance } from '$app/forms';
	import Input from '$lib/components/forms/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import Checkbox from '$lib/components/forms/Checkbox.svelte';
	import Link from '$lib/components/Link.svelte';

	export let form: ActionData;

	$: emailError = form?.email;
	$: passwordError = form?.password;
	$: termAndConditionsError = form?.termAndConditions;
</script>

<div class="container sign-up">
	<Link href="/">Retour</Link>

	<form method="POST" use:enhance>
		<Input value="" name="email" type="email" placeholder="john.doe@mail-ecv.com" error={emailError}
			>Email</Input
		>
		<Input value="" name="password" type="password" error={passwordError}>Mot de passe</Input>
		<Checkbox
			name="termAndConditions"
			reverse
			label="J’accepte les Conditions d’utilisation et la Politique de confidentialité"
			value={false}
		/>
		{#if form?.termAndConditions}
			<p class="error">{termAndConditionsError}</p>
		{/if}
		<Button>Créer un compte</Button>
	</form>
</div>

<style lang="sass">

	.sign-up
		margin-top: 5vh

		form
			margin-top: 1rem
		
		.error
			color: $error

</style>
