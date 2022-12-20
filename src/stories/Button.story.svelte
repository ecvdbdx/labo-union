<script lang="ts">
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import Button from '$lib/components/Button.svelte';

	export let Hst: HstType;

	let content = 'Default button';
	let type: 'default' | 'rounded' | 'square' = 'default';
	let disabled = false;
</script>

<Hst.Story title="Button" group="general">
	<Button {disabled} {type}>{content}</Button>

	<svelte:fragment slot="controls">
		<div class="controls">
			<div>
				Content: <input type="text" bind:value={content} />
			</div>
			<div>
				Type: <select bind:value={type}>
					<option value="default">default</option>
					<option value="rounded">rounded</option>
					<option value="square">square</option>
				</select>
			</div>
			<div>
				Disabled: <input type="checkbox" bind:checked={disabled} />
			</div>
		</div>
	</svelte:fragment>
</Hst.Story>
