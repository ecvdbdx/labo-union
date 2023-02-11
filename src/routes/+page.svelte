<script lang="ts">
	import { page } from '$app/stores';

	import { supabase } from '$lib/auth';
	import Link from '$lib/components/Link.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<div class="container">
	<h1>Welcome to Annuaire</h1>

	<Link href="inscription">S'enregistrer</Link>
	<br />
	<Link href="connexion">Se connecter</Link>
	<br />

	{#if $page.data.session}
		<hr />
		<Link href="profil">Mon profil</Link>
		<br /><br />
		<Button on:click={() => supabase.auth.signOut()}>Sign out</Button>
	{/if}
</div>
