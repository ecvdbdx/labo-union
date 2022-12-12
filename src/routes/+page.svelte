<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';

	let search = '';
</script>

<div class="container">
	<h1>Welcome to Annuaire</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

	<Input bind:value={search} />

	<div style:height="10px" />

	<Button />
</div>
