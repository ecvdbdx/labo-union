<script lang="ts">
	import type { PageData } from '../etudiants/$types';
	import Button from '$lib/components/Button.svelte';

	export let data: PageData;
</script>

<div>
	<ul>
		{#if data.profile}
			{#each data.profile as user}
				<Button type={'rounded'}>
					<a href={`/etudiants/${user.user_id}`}>
						<li>
							{user.first_name}
							{user.last_name}
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
