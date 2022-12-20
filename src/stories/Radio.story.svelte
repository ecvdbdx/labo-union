<script lang="ts">
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import Radio from '$lib/components/forms/Radio.svelte';

	export let Hst: HstType;

	let content = 'Default checkbox';
	let checked = false;
</script>

<Hst.Story title="Radio" group="forms">
	<Radio label={content} name="myCheckbox" value="1" {checked} />

	<svelte:fragment slot="controls">
		<div class="controls">
			<div>
				Content: <input type="text" bind:value={content} />
			</div>
			<div>
				Checked: <input type="checkbox" bind:checked />
			</div>
		</div>
	</svelte:fragment>
</Hst.Story>
