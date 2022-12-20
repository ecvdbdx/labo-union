<script lang="ts">
<<<<<<< HEAD
	import Link from '$lib/components/Link.svelte';
=======
	import Button from '$lib/components/Button.svelte';
	import Link from '$lib/components/Link.svelte';
	import Icon from '$lib/components/Icon.svelte';

	import { goto } from '$app/navigation';
>>>>>>> 8f79a83 (feat: handle signup form errors (wip))
</script>

<div class="container">
	<h1>Welcome to Annuaire</h1>

<<<<<<< HEAD
	<Link href="inscription">S'enregistrer</Link>
=======
	<Button on:click={() => goto('/inscription', { replaceState: true })}>S'enregister</Button>
>>>>>>> 8f79a83 (feat: handle signup form errors (wip))
</div>
