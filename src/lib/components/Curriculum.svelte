<script lang="ts">
	import ExperienceList from '$lib/components/ExperienceList.svelte';
	import TrainingList from '$lib/components/TrainingList.svelte';
	export let profile;
</script>

<ExperienceList action={false} data={profile.Experience} />
<TrainingList action={false} data={profile.Training} />
