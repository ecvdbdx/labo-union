<script lang="ts">
	import Input from '$lib/components/forms/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import Search from '$lib/components/Search.svelte';
	import Radio from '$lib/components/forms/Radio.svelte';
	import Checkbox from '$lib/components/forms/Checkbox.svelte';
	import Link from '$lib/components/Link.svelte';
	import Icon from '$lib/components/Icon.svelte';

	let search = '';
	let value = '';
	let number = 0;
	let bool_1 = false;
	let bool_2 = false;
	let radio_value = '';
</script>

<div class="container">
	<h1>Welcome to Annuaire</h1>
	<p>
		Visit <Link href="https://kit.svelte.dev">kit.svelte.dev</Link> to read the documentation <Icon
			id="bookmark"
		/>
	</p>

	<Search bind:search label="Search*" name="searchbar" />

	<Input bind:value name="input_1">Input*</Input>
	<Input bind:value={number} name="input_2" type={'number'} noLabel />

	<p>Radio & checkbox</p>

	<div style:margin={'0 0 10px 0'}>
		<Radio bind:selected={radio_value} name="radio_1" value="1" label="radio_1" checked />
		<Radio bind:selected={radio_value} name="radio_1" value="2" />
		<Radio bind:selected={radio_value} name="radio_1" value="3" />
	</div>

	<Checkbox name="checkbox_1" label={'Checkbox'} bind:value={bool_1} />

	<Checkbox name="checkbox_2" reverse label={'Checkbox reversed'} bind:value={bool_2} />

	<p>Buttons</p>

	<Button />
	<Button type="rounded" />
	<Button type="square" />
</div>
