<script lang="ts">
	import type { ActionData } from './$types';
	import Input from '$lib/components/forms/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import { enhance } from '$app/forms';

	export let form: ActionData;
</script>

<div class="container">
	<form method="POST" use:enhance>
		<div class="form-widget">
			<h1 class="header">Demande de changement de mot de passe</h1>
			<p class="description">Entrez votre email</p>
			{#if form?.missing}<p class="danger">Veuillez remplir votre mail !</p>{/if}
			{#if form?.invalid}<p class="danger">Veuillez remplir votre email de l'école !</p>{/if}
			<div class="form-group">
				<Input
					name="email"
					type="email"
					placeholder="Votre Email"
					value={form?.email ?? ''}
					noLabel={true}
				/>
			</div>
			<div class="bouton-container">
				<Button type="default">Envoyer</Button>
			</div>
		</div>
		{#if form?.success}
			<p>Un email vous a été envoyé !</p>
		{/if}
	</form>
</div>

<style lang="sass">
	.container 
		display: flex
		justify-content: center
	
	.form-group 
		margin-top: 20px
		display: flex
		flex-direction: column
	
	.bouton-container 
		display: flex
		justify-content: flex-end
	
	.danger 
		color: $error

</style>
