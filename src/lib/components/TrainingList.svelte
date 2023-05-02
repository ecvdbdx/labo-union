<script lang="ts">
	import { page } from '$app/stores';

	import type { Training } from '$lib/types/profile';
	import { modal } from '$lib/stores/modal';
	import TrainingDisplay from '$lib/components/TrainingDisplay.svelte';
	import EditTrainingForm from '$lib/components/profile/EditTrainingForm.svelte';
	import Icon from '$lib/components/Icon.svelte';

	export let trainings: Training[] | undefined;
	const canEdit = $page.url.pathname === '/profil';

	const sortByDate = (a: Training, b: Training) => {
		if (!a.start_date || !b.start_date) return 0;

		if (a.start_date > b.start_date) return -1;
		if (a.start_date < b.start_date) return 1;
		return 0;
	};

	const openTrainingModal = (isNew: boolean) => {
		modal.set({
			title: isNew ? 'Ajouter une nouvelle formation' : 'Modifier la formation',
			component: EditTrainingForm,
			props: {
				isNew,
				form: $page.form,
				profile: $page.data.profile,
				trainings: $page.data.profile.Training,
			},
		});
	};
</script>

<section>
	<div class="wrapper-section">
		<div class="head">
			<h2 class="experience-container-title">Formations</h2>
			{#if canEdit}
				<div class="actions">
					{#if !!trainings?.length}
						<button
							class="edit"
							on:click={() => openTrainingModal?.(false)}
							title="Éditer les expériences"
						>
							<Icon color="black" id="edit-2" size="1em" />
						</button>
					{/if}
					<button
						class="edit"
						on:click={() => openTrainingModal?.(true)}
						title="Ajouter une expérience"
					>
						<Icon color="black" id="plus" size="1em" />
					</button>
				</div>
			{/if}
		</div>
		{#if trainings && trainings.length}
			<ul class="ExperienceList">
				{#each trainings.sort(sortByDate) as train}
					<li class="block-experience">
						<TrainingDisplay {train} action={false} />
					</li>
				{/each}
			</ul>
		{:else}
			<div class="no-data">
				<p>Aucune formation</p>
			</div>
		{/if}
	</div>
</section>

<style lang="sass">
  section
    flex: 1
		
    div.wrapper-section
      border-top: 1px solid rgba($gray, .1)
      display: flex
      flex-direction: column
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

  .no-data
    text-align: center
</style>
