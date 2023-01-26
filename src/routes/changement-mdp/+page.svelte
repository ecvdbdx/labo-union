<!--<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';
	import Input from '$lib/components/forms/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	export let form: ActionData;

	let password = '';
	let confirmPassword = '';
	let error = '';
	let message = '';

	async function handleReset() {
		const { error: err } = await supabase.auth.updateUser({
			password: password,
		});
		if (err) error = err.message;
		else message = 'Bravo';
	}
	console.log(form);
</script>

<div class="container">
	<form method="POST" use:enhance>
		<div class="form-widget">
			<h1 class="header">Changement de mot de passe</h1>
			<p class="description">Entrez votre nouveau mot de passe</p>
			{#if form?.missing}<p class="danger">Veuillez remplir votre mot de passe !</p>{/if}
			<div class="form-group">
				<div>
					<Input
						type="password"
						name="password"
						value={form?.password ?? ' '}
						placeholder="Mot de passe"
						noLabel={true}
					/>
				</div>
				<div>
					<Input
						type="password"
						name="confirmPassword"
						value={form?.password ?? ' '}
						placeholder="Confirmation de Mot de passe"
						noLabel={true}
					/>
				</div>
			</div>
			<div class="bouton-container">
				<Button type="default">Envoyer</Button>
			</div>
		</div>
		{#if message}
			<div><p>{message}</p></div>
		{/if}

		{#if error}
			<div><p class="danger">{error}</p></div>
		{/if}
	</form>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
	}
	.form-group {
		margin-top: 20px;
		display: flex;
		flex-direction: column;
	}
	.bouton-container {
		display: flex;
		justify-content: flex-end;
	}
	.danger {
		background-color: red;
		color: black;
	}
</style>
-->
