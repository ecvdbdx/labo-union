<script lang="ts">
	import type { ActionData } from './$types';

	import Input from '$lib/components/forms/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import { enhance } from '$app/forms';
	import Link from '$lib/components/Link.svelte';

	export let form: ActionData;
</script>

<div class="container login">
	<form method="POST" use:enhance>
		<div class="form-widget">
			<h2 class="header">Se connecter</h2>
			<Input
				name="email"
				type="email"
				placeholder="Your email"
				value={form?.email ?? ''}
				error={form?.email_error}>Email</Input
			>
			<Input
				value={form?.password ?? ''}
				name="password"
				type="password"
				required
				error={form?.password_error}>Mot de passe</Input
			>
			<Button>Me connecter</Button>
			<span>Première connexion ? <Link href="/inscription">Créer un compte</Link></span>
			<Link href="forgot-password">Mot de passe oublié ?</Link>
		</div>
		{#if form?.error}
			<p class="error">{form.error}</p>
		{/if}
	</form>
</div>

<style lang="sass">
	h2
		margin-bottom: 2rem

	.login 
		padding-top: 5rem
		width: 100%

		@media screen and (max-width: 480px)
			padding-left: 0
			padding-right: 0

	.error 
		color: red

	span
		font-size: 1rem
		display: block
		margin-top: 2rem
		margin-bottom: .5rem
</style>
