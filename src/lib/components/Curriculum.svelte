<script lang="ts">
	import type { Profile } from '$lib/types/profile';

	import ExperienceList from '$lib/components/ExperienceList.svelte';
	import TrainingList from '$lib/components/TrainingList.svelte';
	export let profile: Profile;
	export let openExperienceModal: null | ((isNew: boolean) => void) = null;
	export let openTrainingModal: null | ((isNew: boolean) => void) = null;
</script>

<section class="Curriculum">
	<div class="wrapper-section">
		<ExperienceList {openExperienceModal} experiences={profile.Experience} />
		<TrainingList {openTrainingModal} trainings={profile.Training} />
	</div>
</section>

<style lang="sass">
	section.Curriculum
		width: 100%
		padding-inline: 1rem
		div.wrapper-section
			display: flex
			width: 100%
			margin-inline: auto
			gap: 2rem
			margin-bottom: 2rem

</style>
