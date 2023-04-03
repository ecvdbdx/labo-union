<script lang="ts">
	import ExperienceDisplay from '$lib/components/ExperienceDisplay.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import type { Experience } from '$lib/types/profile';

	export let experiences: Experience[] | undefined;
	export let openExperienceModal: null | ((isNew: boolean) => void) = null;

	// avoid openTrainingModal possibly being undefined
	function handleOpenModal(isNew: boolean) {
		if (!openExperienceModal) return;

		openExperienceModal(isNew);
	}
	const sortByDate = (a: Experience, b: Experience) => {
		if (!a.start_date || !b.start_date) return 0;

		if (a.start_date > b.start_date) return -1;
		if (a.start_date < b.start_date) return 1;
		return 0;
	};
</script>

<section>
	<div class="wrapper-section">
		<div class="head">
			<h2 class="experience-container-title">Expériences Professionnelles</h2>
			{#if !!openExperienceModal}
				<div class="actions">
					{#if !!experiences?.length}
						<button
							class="edit"
							on:click={() => handleOpenModal(false)}
							title="Editer les experiences"
						>
							<Icon color="black" id="edit-2" size="1em" />
						</button>
					{/if}
					<button
						class="edit"
						on:click={() => handleOpenModal(true)}
						title="Ajouter une experience"
					>
						<Icon color="black" id="plus" size="1em" />
					</button>
				</div>
			{/if}
		</div>
		{#if experiences && experiences.length > 0}
			<ul class="ExperienceList">
				{#each experiences.sort(sortByDate) as experience}
					<li class="block-experience">
						<ExperienceDisplay {experience} action={false} />
					</li>
				{/each}
			</ul>
		{:else}
			<div class="no-experiences">
				<p>Aucune expérience professionnelle</p>
			</div>
		{/if}
	</div>
</section>

<style lang="sass">
  section
    flex: 1

    div.wrapper-section
      display: flex
      flex-direction: column
      border-top: 1px solid rgba($gray, .1)
      gap: 2rem
      background-color: $white
      border-radius: 30px
      padding: 2rem 2rem

      ul.ExperienceList
        display: flex
        flex-direction: column
        gap: 4em
        width: 100%

    .head
      display: flex
      align-items: center
      gap: 2rem
      margin-bottom: 2rem
      width: 100%
      justify-content: space-between

      h2
        font-size: 1.5rem
        font-weight: 600
        color: $primary

      .actions
        display: flex
        align-items: center
        gap: 1rem

        button
          all: inherit
          cursor: pointer
          display: flex
          align-items: center
          justify-content: center

  


  .no-experiences
    text-align: center
</style>
