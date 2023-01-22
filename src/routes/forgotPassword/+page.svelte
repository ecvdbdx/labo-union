<script>
	import { supabase } from '$lib/auth';
	import { getURL } from '$lib/utils';

	let email = '';
	let error = '';
	let message = '';

	async function handleReset() {
		const { error: err } = await supabase.auth.resetPasswordForEmail(email, {
			redirectTo: getURL() + 'changement-mdp',
		});
		if (err) {
			error = 'Le mail est invalide. Veuillez réessayez !';
		} else {
			message = 'Regardez vos mails pour changer le mot de passe !';
		}
	}
</script>

<div class="container">
	<form on:submit|preventDefault={handleReset}>
		<div class="form-widget">
			<h1 class="header">Demande de changement de mot de passe</h1>
			<p class="description">Entrez votre email</p>
			<div class="form-group">
				<label for="email">Email</label>
				<input
					id="email"
					class="form-control"
					type="email"
					placeholder="Votre Email"
					bind:value={email}
				/>
			</div>
			<div class="bouton-container">
				<input type="submit" class="btn btn-success" />
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
	label {
		font-weight: bold;
		margin-bottom: 7px;
	}
	input {
		gap: 10px;

		width: 500px;
		height: 52px;

		background: #ffffff;
		border: 1px solid #d6d6d6;
		border-radius: 12px;
	}
	.bouton-container {
		display: flex;
		justify-content: flex-end;
	}
	.btn {
		width: 144px;
		height: 39px;
		margin-top: 20px;
		background: #f25824;
		border-radius: 10px;
		padding: 10px 16px;
		gap: 8px;
		color: white;
		font-weight: bold;
		border: 1px solid #f25824;
	}
	.danger {
		background-color: red;
		color: black;
	}
</style>
