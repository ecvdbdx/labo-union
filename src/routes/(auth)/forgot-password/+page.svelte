<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';

	import Input from '$lib/components/forms/Input.svelte';
	import Button from '$lib/components/Button.svelte';

	export let form: ActionData;
</script>

<h2>Réinitialisation de votre mots de passe</h2>

<form method="POST" use:enhance>
	<div class="email_input">
		<Input
			name="email"
			type="email"
			placeholder="Your email"
			value={form?.email ?? ''}
			error={form?.email_error}>Entrez votre email</Input
		>
	</div>

	<Button>Envoyer</Button>
</form>

{#if form?.success}
	<p class="success">
		Un email vous a été envoyé avec un lien pour réinitialiser votre mot de passe.
	</p>
{/if}

<style lang="sass">
  h2
    margin-bottom: 3rem

  .email_input
    margin-bottom: 2rem

  .success
    color: green
    margin-top: 1rem


</style>
