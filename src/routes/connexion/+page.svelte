<script lang="ts">
	import type { ActionData } from './$types';

	import Input from '$lib/components/forms/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import Link from '$lib/components/Link.svelte';
	import { enhance } from '$app/forms';

	export let form: ActionData;
</script>

<div class="container">
	<Link href="/">Retour</Link>

	<form method="POST" use:enhance>
		<div class="form-widget">
			<h1 class="header">Me connecter</h1>
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
		</div>
		{#if form?.error}
			<p class="error">{form.error}</p>
		{/if}
	</form>
</div>

<style lang="sass">
	.error 
		color: red
</style>
