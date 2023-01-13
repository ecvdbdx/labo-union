<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Link from '$lib/components/Link.svelte';
	import Icon from '$lib/components/Icon.svelte';

	import { goto } from '$app/navigation';
</script>

<div class="container">
	<h1>Welcome to Annuaire</h1>
	<p>
		Visit <Link href="https://kit.svelte.dev">kit.svelte.dev</Link> to read the documentation
		<Icon id="bookmark" />
	</p>

	<Button on:click={() => goto('/inscription', { replaceState: true })}>S'enregister</Button>
</div>
