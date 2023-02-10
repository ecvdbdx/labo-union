<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>

<div class="container">
	<nav class="navbar">
		<div class="logo">
			<img src="logo.png" alt="Logo" />
		</div>
		<ul class="navbar-tabs">
			<li><a href="#">Accueil</a></li>
			<li><a href="#">Opportunités</a></li>
			<li><a href="#">Annuaire</a></li>
			<li><a href="#">Messages</a></li>
			<li><a href="#">Ressources</a></li>
			<li><a href="#">Tarifs entreprises</a></li>
			<li><a href="inscription">Inscription</a></li>
			<Button><a class="connexionButton" href="connexion">Se connecter</a></Button>
		</ul>
	</nav>
</div>

<style lang="sass">

</style>
