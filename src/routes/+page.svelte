<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import Search from '$lib/components/Search.svelte';

	let search = '';
	let value = '';
</script>

<div class="container">
	<h1>Welcome to Annuaire</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

	<Search bind:search label="Search*" />

	<div style:height="10px" />

	<Input bind:value />

	<div style:height="10px" />

	<Button />
</div>
