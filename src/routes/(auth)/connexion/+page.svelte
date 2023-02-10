<script lang="ts">
	import type { ActionData } from './$types';

	import Input from '$lib/components/forms/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import Link from '$lib/components/Link.svelte';
	import { enhance } from '$app/forms';

	export let form: ActionData;
</script>

<div class="container login">
	<form method="POST" use:enhance>
		<div class="form-widget">
			<h1 class="header">J'ai déjà un compte</h1>
			<Input
				name="email"
				type="email"
				placeholder="Votre email"
				value={form?.email ?? ''}
				error={form?.email_error}>Email<span>&#42;</span></Input
			>
			<Input
				value={form?.password ?? ''}
				name="password"
				type="password"
				placeholder="Votre mot de passe"
				required
				error={form?.password_error}>Mot de passe<span>&#42;</span></Input
			>
			<Button>Connexion</Button>
			<p>Première connexion ? <a href="inscription" class="connexionPath">Créer mon compte</a></p>
			<br />
			<Link href="/">Retour</Link>
		</div>
		{#if form?.error}
			<p class="error">{form.error}</p>
		{/if}
	</form>
</div>

<style lang="sass">
	.login 
		margin-top: 20vh
		width: 100%

		.error 
			color: red

		.connexionPath
			color: #d94f21
</style>
