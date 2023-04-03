<script lang="ts">
	import type { Profile } from '$lib/types/profile';

	import ExperienceList from '$lib/components/ExperienceList.svelte';
	import TrainingList from '$lib/components/TrainingList.svelte';
	export let profile: Profile;
	export let editable = false;
</script>

<section class="Curriculum">
	<div class="wrapper-section">
		<ExperienceList action={editable} data={profile.Experience} />
		<TrainingList action={editable} data={profile.Training} />
	</div>
</section>

<style lang="sass">
	section.Curriculum
		width: 100%
		padding-inline: 1rem
		div.wrapper-section
			display: grid
			width: 100%
			max-width: 80%
			margin-inline: auto
			grid-template-columns: repeat(2, 1fr)
			gap: 2rem
			@media (max-width: 1000px)
				grid-template-columns: repeat(1, 1fr)
</style>
