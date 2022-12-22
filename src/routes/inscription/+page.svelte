<script lang="ts">
	import type { ActionData } from './$types';

	import { enhance } from '$app/forms';

	import Input from '$lib/components/forms/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import Checkbox from '$lib/components/forms/Checkbox.svelte';
	import Link from '$lib/components/Link.svelte';

	export let form: ActionData;
</script>

<div class="container sign-up">
	<Link href="/">Retour</Link>

	<form method="POST" use:enhance>
		<Input
			value={form?.email ?? ''}
			name="email"
			type="email"
			placeholder="john.doe@mail-ecv.com"
			error={form?.email_error}>Email</Input
		>
		<Input value={form?.password ?? ''} name="password" type="password" error={form?.password_error}
			>Mot de passe</Input
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

		form
			margin-top: 1rem
		
		.error
			color: $error
		
		.success
			color: $success

</style>
