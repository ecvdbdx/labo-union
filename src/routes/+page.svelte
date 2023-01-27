<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import Icon from '$lib/components/Icon.svelte';
</script>

<div class="container">
	<h1>Welcome to Annuaire</h1>
	<p>
		Visit <Link href="https://kit.svelte.dev">kit.svelte.dev</Link> to read the documentation
		<Icon id="bookmark" />
	</p>

	<Link href="inscription">S'enregistrer</Link>
</div>
