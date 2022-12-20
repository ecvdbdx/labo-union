<script lang="ts">
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import Link from '$lib/components/forms/Link.svelte';

	export let Hst: HstType;

	let content = 'Default link';
</script>

<Hst.Story title="Link" group="general">
	<Link href="#">{content}</Link>

	<svelte:fragment slot="controls">
		<div class="controls">
			<div>
				Content: <input type="text" bind:value={content} />
			</div>
		</div>
	</svelte:fragment>
</Hst.Story>
