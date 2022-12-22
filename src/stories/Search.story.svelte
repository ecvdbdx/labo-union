<script lang="ts">
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import Search from '$lib/components/Search.svelte';

	export let Hst: HstType;

	let label = 'Default label';
	let search = '';
	let placeholder = 'Default placeholder';
</script>

<Hst.Story title="Search" group="general">
	<Search name="input_1" bind:search {label} {placeholder} />

	<svelte:fragment slot="controls">
		<div class="controls">
			<div>
				Label: <input type="text" bind:value={label} />
			</div>
			<div>
				Placeholder: <input type="text" bind:value={placeholder} />
			</div>
		</div>
	</svelte:fragment>
</Hst.Story>
