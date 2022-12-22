<script lang="ts">
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import Input from '$lib/components/forms/Input.svelte';

	export let Hst: HstType;

	let label = 'Default label';
	let noLabel = false;
	let value = '';
	let error = '';
	let type: 'text' | 'password' | 'email' | 'number' | 'range' | 'tel' = 'text';
	let placeholder = 'Default placeholder';
</script>

<Hst.Story title="Input" group="forms">
	<Input name="input_1" bind:value {noLabel} {error} {type} {placeholder}>{label}</Input>

	<svelte:fragment slot="controls">
		<div class="controls">
			<div>
				Label: <input type="text" bind:value={label} />
			</div>
			<div>
				Placeholder: <input type="text" bind:value={placeholder} />
			</div>
			<div>
				No label: <input type="checkbox" bind:checked={noLabel} />
			</div>
			<div>
				error: <input type="text" bind:value={error} />
			</div>
			<div>
				type: <select bind:value={type}>
					<option value="text">text</option>
					<option value="email">email</option>
					<option value="password">password</option>
					<option value="number">number</option>
					<option value="tel">tel</option>
				</select>
			</div>
		</div>
	</svelte:fragment>
</Hst.Story>
