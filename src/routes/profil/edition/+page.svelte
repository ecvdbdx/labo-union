<script lang="ts">
	import Input from '$lib/components/forms/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ first_name } = data.profile);
</script>

<h1>Modifier son ses informations {first_name}</h1>
<form
	method="POST"
	use:enhance={() => {
		return ({ update }) => update({ reset: false });
	}}
>
	<Input placeholder={'John'} value={first_name} name={'Prénom'} type={'text'} />
	<Button type="rounded" />
</form>
