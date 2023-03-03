<script lang="ts">
	import { supabase } from '$lib/auth';
	import Icon from '$lib/components/Icon.svelte';
	import Button from '$lib/components/Button.svelte';
	import { invalidateAll } from '$app/navigation';

	export let data;
	$: ({ id, job, start_date, end_date, company, mission, profile_id } = data);
	export let action;

	let editmode = false;

	async function deleteExperience(experience_id) {
		const { error } = await supabase.from('Experience').delete().eq('id', experience_id);
		error && console.error(error);
		invalidateAll();
	}
</script>

{#if !editmode}
	<div class="Experience">
		<div class="wrapper">
			<p class="duration-experience">
				<span>{start_date?.split('-')[0] ?? "Aujourd'hui"} - </span>
				<span>{end_date?.split('-')[0] ?? "Aujourd'hui"}</span>
			</p>
			<div class="infos">
				<p class="name-experience">{job}</p>
				<p class="name-enterprise">{company}</p>
				<p class="location-experience">Bordeaux, France</p>
				<div class="actions-experience">
					<span>Actions confiées :</span>
					<p>
						{mission}
					</p>
				</div>
			</div>
		</div>
		{#if action}
			<div class="actions">
				<button on:click={() => (editmode = !editmode)}
					>Modifier
					<Icon color="black" id="edit-2" size="1em" />
				</button>
				<button on:click={() => deleteExperience(id)}
					>Supprimer
					<Icon color="black" id="x" size="1em" />
				</button>
			</div>
		{/if}
	</div>
{:else}
	<div class="Experience">
		<div class="wrapper">
			<p class="duration-experience">
				<input type="date" value={start_date} />
				<input type="date" value={end_date} />
			</p>
			<div class="infos">
				<input class="name-experience" value={job} on:input={(e) => (job = e.target.value)} />
				<input class="name-enterprise" value={company} />
				<input class="location-experience" value="Bordeaux, France" />
				<div class="actions-experience">
					<span>Actions confiées :</span>
					<input value={mission} />
				</div>
			</div>
		</div>
		{#if action}
			<div class="actions">
				<button on:click={() => (editmode = !editmode)}>
					Modifier
					<Icon color="black" id="edit-2" size="1em" />
				</button>
				<button on:click={() => deleteExperience(id)}
					>Supprimer
					<Icon color="black" id="edit-2" size="1em" />
				</button>
			</div>
		{/if}
	</div>
	<Button>Enregistrer</Button>
{/if}

<style lang="sass">

  .Experience
    display: flex
    justify-content: space-between

    .wrapper
      display: flex
      gap: 2em
      flex-grow: 1
      align-items: flex-start

      .duration-experience
        display: flex
        flex-wrap: wrap
        max-width: 100px
        width: 100%
        color: $black
        font-weight: 600

      .infos
        display: flex
        gap: 1em
        flex-direction: column

        input
          all: inherit
          display: inline-block
          background: $white
          padding: .5rem 1rem
          border-radius: 4px
          color: $black !important
          text-decoration: none !important
          font-weight: normal !important


        .name-experience
          font-weight: 600

        .name-enterprise
          color: $primary
          text-decoration: underline
          font-weight: 600

        .location-experience
          display: none

        .actions-experience
          display: flex
          flex-direction: column
          gap: 1em

          span
            font-weight: 600

          p
            color: $gray

    .actions
      display: flex
      gap: 1rem
      align-items: center

      button
        all: inherit
        text-decoration: underline
        display: flex
        align-items: center
        gap: .5rem
        transition: all ease-in-out 150ms
        cursor: pointer

        &:hover, &:focus
          color: $primary
</style>
