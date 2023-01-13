<!-- <script>
	import { supabase } from '$lib/auth';

	let password = '';
	let confirmPassword = '';
	let error = '';
	let message = '';

	async function handleReset() {
		const { data, error: err } = await supabase.auth.updateUser({
			password: password,
		});
		if (err) error = err.message;
		else message = 'Bravo';
	}
</script>

<div class="container">
	<form on:submit|preventDefault={handleReset}>
		<div class="form-widget">
			<h1 class="header">Changement de mot de passe</h1>
			<p class="description">Entrez votre nouveau mot de passe</p>
			<div class="form-group">
				<div>
					<input type="password" name="password" bind:value={password} placeholder="Password" />
				</div>
				<div>
					<input
						type="password"
						name="confirmPassword"
						bind:value={confirmPassword}
						placeholder="Confirm password"
					/>
				</div>
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
 -->
