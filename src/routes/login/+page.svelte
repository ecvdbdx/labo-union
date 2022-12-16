<script>
</script>

<div class="container">
	<form>
		<div class="form-widget">
			<h1 class="header">Connexion</h1>
			<p class="description">Entrez votre email et mdp pour vous connecter</p>
			<div class="form-group">
				<label for="email">Email</label>
				<input id="email" class="form-control" type="email" placeholder="Votre Email" />
			</div>
			<div class="form-group">
				<label for="password">Mot de passe</label>
				<input
					id="password"
					class="form-control"
					type="password"
					placeholder="Votre Mot de passe"
				/>
			</div>
			<div class="bouton-container">
				<input type="submit" class="btn btn-success" />
			</div>
		</div>
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
</style>
