<script lang="ts">
	import ExperienceDisplay from '$lib/components/ExperienceDisplay.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Input from '$lib/components/forms/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import { enhance } from '$app/forms';
	import Checkbox from '$lib/components/forms/Checkbox.svelte';

	let displayEditExp = false;
	let addNew = false;
	let displayEndDate = false;

	export let data;
	export let action: boolean;
</script>

<section>
	<div class="wrapper-section">
		<div class="head">
			<h2 class="experience-container-title">Expériences Professionnelles</h2>
			{#if action}
				<div class="actions">
					{#if !!data?.length}
						<button
							class="edit"
							on:click={() => (displayEditExp = true)}
							title="Editer les experiences"
						>
							<Icon color="black" id="edit-2" size="1em" />
						</button>
					{/if}
					<button class="edit" on:click={() => (addNew = !addNew)} title="Ajouter une experience">
						<Icon color="black" id="plus" size="1em" />
					</button>
				</div>
			{/if}
		</div>
		{#if data?.length > 0}
			<ul class="ExperienceList">
				{#each data as experience}
					<li class="block-experience">
						<ExperienceDisplay data={experience} action={false} />
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</section>

{#if displayEditExp === true}
	<Modal>
		<div class="modalSection">
			<div class="title">
				<div class="left">
					<button class="close" on:click={() => (displayEditExp = false)} title="Fermer">
						<Icon id="x" color="black" size="2em" />
					</button>
					<span>Expériences professionnelles</span>
				</div>
			</div>
			<div class="professional-container">
				{#each data as experience}
					<ul class="ExperienceList">
						<li class="block-experience">
							<ExperienceDisplay data={experience} action={true} />
						</li>
					</ul>
				{/each}
			</div>
		</div>
	</Modal>
{/if}

{#if addNew}
	<Modal>
		<div class="modalSection">
			<div class="title">
				<div class="left">
					<button class="close" on:click={() => (addNew = false)} title="Fermer">
						<Icon id="x" color="black" size="2em" />
					</button>
					<span>Ajouter une expériences professionnelles</span>
				</div>
			</div>
			<form
				class="form"
				method="POST"
				action="?/postExperience"
				use:enhance={() => {
					addNew = false;
					return ({ update }) => update({ reset: false });
				}}
			>
				<Input value="" type="date" name="start_date">Date de début</Input>
				<Checkbox
					value={displayEndDate}
					name="end_date_check"
					label="J'occupe actuellement ce poste"
					on:change={(e) => (displayEndDate = e.target.checked)}
				/>
				{#if !displayEndDate}
					<Input value="" type="date" name="end_date">Date de fin</Input>
				{/if}
				<Input value="" type="text" name="job">Poste</Input>
				<Input value="" type="text" name="company">Entreprise</Input>
				<Input value="" type="textarea" name="mission">Mission</Input>
				<Button>Enregistrer</Button>
			</form>
		</div>
	</Modal>
{/if}

<style lang="sass">
  section
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
      grid-column: 1/3

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

  .modalSection
    display: flex
    flex-direction: column
    gap: 4rem

    .title
      display: flex
      align-items: center
      justify-content: space-between

      .left
        display: flex
        align-items: center
        gap: 2rem

        span
          font-size: 2rem

      button
        all: inherit
        text-decoration: underline

        &:hover, &:focus
          transition: all ease-in-out 150ms
          color: $primary
          cursor: pointer


</style>
