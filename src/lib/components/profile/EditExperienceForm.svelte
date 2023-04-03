<script lang="ts">
	import { enhance } from '$app/forms';

	import type { Experience } from '$lib/types/profile';
	import ExperienceDisplay from '$lib/components/ExperienceDisplay.svelte';
	import Input from '$lib/components/forms/Input.svelte';
	import Checkbox from '$lib/components/forms/Checkbox.svelte';
	import Button from '$lib/components/Button.svelte';
	import { modal } from '$lib/stores/modal';

	export let isNew: boolean;
	export let experiences: Experience[];
	let displayEndDate = false;
</script>

{#if isNew}
	<form
		class="form"
		method="POST"
		action="?/postExperience"
		use:enhance={() => {
			isNew = false;
			modal.set(null);
			return ({ update }) => update({ reset: false });
		}}
	>
		<Input value="" type="date" name="start_date">Date de début</Input>
		<Checkbox
			bind:value={displayEndDate}
			name="end_date_check"
			label="J'occupe actuellement ce poste"
		/>
		{#if !displayEndDate}
			<Input value="" type="date" name="end_date">Date de fin</Input>
		{/if}
		<Input value="" type="text" name="job">Poste</Input>
		<Input value="" type="text" name="company">Entreprise</Input>
		<Input value="" type="textarea" name="mission">Mission</Input>
		<Button on:click={() => modal.set(null)}>Enregistrer</Button>
	</form>
{:else}
	<div class="professional-container">
		{#each experiences as experience}
			<ul class="ExperienceList">
				<li class="block-experience">
					<ExperienceDisplay {experience} action={true} />
				</li>
			</ul>
		{/each}
	</div>
{/if}
