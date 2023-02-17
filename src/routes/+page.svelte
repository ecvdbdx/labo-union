<script lang="ts">
	import { page } from '$app/stores';

	import { supabase } from '$lib/auth';
	import Link from '$lib/components/Link.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<div class="container">
	<nav class="navbar">
		<div class="logo">
			<img src="../svg/logo.svg" alt="Logo" />
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

	{#if $page.data.session}
		<hr />
		<Link href="profil">Mon profil</Link>
		<br /><br />
		<Button on:click={() => supabase.auth.signOut()}>Sign out</Button>
	{/if}
</div>

<style lang="sass">
	.connexionButton
		color: $tertiary
</style>
