<script lang="ts">
	import ExperienceDisplay from '$lib/components/ExperienceDisplay.svelte';

	export let data;
	export let action: boolean;
</script>

<ul class="ExperienceList">
	{#each data as experience}
		<li class="block-experience">
			<ExperienceDisplay data={experience} {action} />
		</li>
	{/each}
</ul>

<style lang="sass">
  ul.ExperienceList
    display: flex
    flex-direction: column
    gap: 4em
    width: 100%
</style>
