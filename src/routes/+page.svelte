<script lang="ts">
	import Input from '$lib/components/forms/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import Search from '$lib/components/Search.svelte';
	import Radio from '$lib/components/forms/Radio.svelte';
	import Checkbox from '$lib/components/forms/Checkbox.svelte';

	let search = '';
	let value = '';
	let number = 0;
	let bool_1 = false;
	let bool_2 = false;
	let radio_value = '';
</script>

<div class="container">
	<h1>Welcome to Annuaire</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

	<div style:height="10px" />

	<Search bind:search label="Search*" />

	<Input bind:value>Input*</Input>
	<Input bind:value={number} type={'number'} noLabel />

	<p>Radio & checkbox</p>

	<div style:margin={'0 0 10px 0'}>
		<Radio bind:selected={radio_value} name="radio_1" value="1" label="radio_1" checked />
		<Radio bind:selected={radio_value} name="radio_1" value="2" />
		<Radio bind:selected={radio_value} name="radio_1" value="3" />
	</div>

	<Checkbox label={'Checkbox'} bind:value={bool_1} />

	<Checkbox reverse label={'Checkbox reversed'} bind:value={bool_2} />

	<p>Buttons</p>

	<Button />
	<Button type="rounded" />
	<Button type="square" />
</div>
