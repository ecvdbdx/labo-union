<script lang="ts">
	import { supabase } from '$lib/auth';
	import Link from '$lib/components/Link.svelte';

	import { page } from '$app/stores';
</script>

<div class="container">
	<h1>Welcome to Annuaire</h1>

	<Link href="inscription">S'enregistrer</Link>
	<br />
	<Link href="connexion">Se connecter</Link>
	<br />

	{#if $page.data.session}
		<Link href="profil">Mon profil</Link>
		<button on:click={() => supabase.auth.signOut()}>Sign out</button>
	{/if}
</div>
