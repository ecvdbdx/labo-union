<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';
	import Input from '$lib/components/forms/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	export let form: ActionData;
	import { supabase } from '$lib/auth';
</script>

<div class="container">
	<form method="POST" use:enhance>
		<div class="form-widget">
			<h1 class="header">Changement de mot de passe</h1>
			<p class="description">Entrez votre nouveau mot de passe</p>
			{#if form?.missing}<p class="danger">Veuillez remplir votre mot de passe !</p>{/if}
			{#if form?.invalid}<p class="danger">Les deux mot de passe ne correspondent pas</p>{/if}
			<div class="form-group">
				<p>{supabase.auth.getUser()}</p>
				<div>
					<Input
						type="password"
						name="password"
						value={form?.password ?? ''}
						placeholder="Mot de passe"
						noLabel={true}
					/>
				</div>
				<div>
					<Input
						type="password"
						name="confirmPassword"
						value={form?.password ?? ''}
						placeholder="Confirmation de Mot de passe"
						noLabel={true}
					/>
				</div>
			</div>
			<div class="bouton-container">
				<Button type="default">Envoyer</Button>
			</div>
		</div>
		{#if form?.success}
			<p class="success">Votre mot de passe est bien changé !</p>
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
