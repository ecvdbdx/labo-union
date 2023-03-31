<script lang="ts">
	import ExperienceList from '$lib/components/ExperienceList.svelte';
	import TrainingList from '$lib/components/TrainingList.svelte';
	export let profile;
</script>

{#if profile?.Experience?.length > 0}
	<ExperienceList action={false} data={profile.Experience} />
{/if}
{#if profile?.Training?.length > 0}
	<TrainingList action={false} data={profile.Training} />
{/if}
