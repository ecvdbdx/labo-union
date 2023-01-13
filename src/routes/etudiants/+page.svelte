<script lang="ts">
	import type { PageData } from './$types';
	import Button from '$lib/components/Button.svelte';

	export let data: PageData;
</script>

<div>
	<ul>
		{#if data.profiles}
			{#each data.profiles as { last_name, first_name, user_id }}
				<Button type="rounded">
					<a data-sveltekit-preload-data="hover" href="/etudiants/{user_id}">
						<li>
							{first_name}
							{last_name}
						</li>
					</a>
				</Button>
			{/each}
		{/if}
	</ul>
</div>

<style lang="sass">
	a
		text-decoration: none
		color: $white
	li
		list-style: none
</style>
