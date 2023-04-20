<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';

	import Input from '$lib/components/forms/Input.svelte';
	import Button from '$lib/components/Button.svelte';

	export let form: ActionData;
</script>

<h2>Réinitialisation de votre mot de passe</h2>

<form method="POST" use:enhance>
	<div class="inputs">
		<Input
			name="password"
			type="password"
			placeholder="Password"
			value={form?.password ?? ''}
			error={form?.password_error}
		>
			Mot de passe
		</Input>

		<Input
			name="passwordConfirm"
			type="password"
			placeholder="Password"
			value={form?.passwordConfirm ?? ''}
			error={form?.passwordConfirm_error}
		>
			Confirmer le mot de passe
		</Input>
	</div>

	{#if form?.error}
		<div class="error">
			{form.error}
		</div>
	{/if}

	<Button>Envoyer</Button>
</form>

<style lang="sass">
  h2
    margin-bottom: 3rem

  .error
    color: $error
    margin-bottom: 2rem

  .inputs
    margin-bottom: 2rem

</style>
