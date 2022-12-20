<script lang="ts">
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import Icon from '$lib/components/Icon.svelte';

	export let Hst: HstType;

	let icon = 'alert-circle';
	let size = 1.5;
	let color = '#000';
</script>

<Hst.Story title="Icon" group="general">
	<Icon id={icon} size={`${size}em`} {color} />

	<svelte:fragment slot="controls">
		<div class="controls">
			<div>
				Icon: <input type="text" bind:value={icon} />
			</div>
			<div>
				Size: <input type="number" step="0.1" bind:value={size} />
			</div>
			<div>
				Color: <input type="color" bind:value={color} />
			</div>
		</div>
	</svelte:fragment>
</Hst.Story>
