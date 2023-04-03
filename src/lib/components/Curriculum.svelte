<script lang="ts">
	import type { Profile } from '$lib/types/profile';

	import ExperienceList from '$lib/components/ExperienceList.svelte';
	import TrainingList from '$lib/components/TrainingList.svelte';
	export let profile: Profile;
	export let editable = false;
</script>

{#if profile?.Experience?.length > 0}
	<ExperienceList action={editable} data={profile.Experience} />
{/if}
{#if profile?.Training?.length > 0}
	<TrainingList action={editable} data={profile.Training} />
{/if}
