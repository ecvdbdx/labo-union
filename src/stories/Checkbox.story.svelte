<script lang="ts">
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import Checkbox from '$lib/components/forms/Checkbox.svelte';

	export let Hst: HstType;

	let content = 'Default checkbox';
	let reverse = false;
</script>

<Hst.Story title="Checkbox" group="forms">
	<Checkbox {reverse} label={content} name="myCheckbox" />

	<svelte:fragment slot="controls">
		<div class="controls">
			<div>
				Content: <input type="text" bind:value={content} />
			</div>
			<div>
				Reverse: <input type="checkbox" bind:checked={reverse} />
			</div>
		</div>
	</svelte:fragment>
</Hst.Story>
