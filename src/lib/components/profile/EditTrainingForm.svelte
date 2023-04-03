<script lang="ts">
	import { enhance } from '$app/forms';

	import Input from '$lib/components/forms/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import Checkbox from '$lib/components/forms/Checkbox.svelte';
	import TrainingDisplay from '$lib/components/TrainingDisplay.svelte';
	import type { Training } from '$lib/types/profile';

	export let trainings: Training[];
	export let isNew = false;

	let displayEndDate = false;
</script>

{#if isNew}
	<form
		class="form"
		method="POST"
		action="?/postTraining"
		use:enhance={() =>
			({ update }) => {
				isNew = false;
				return update({ reset: false });
			}}
	>
		<Input value="" type="date" name="start_date">Date de début</Input>
		<Checkbox
			bind:value={displayEndDate}
			name="end_date_check"
			label="Je suis actuellement dans cette école"
		/>
		{#if !displayEndDate}
			<Input value="" type="date" name="end_date">Date de fin</Input>
		{/if}
		<Input value="" type="text" name="school">École</Input>
		<Input value="" type="text" name="diploma">Diplôme</Input>
		<Button>Enregistrer</Button>
	</form>
{:else}
	<div class="professional-container">
		<ul class="ExperienceList">
			{#if trainings}
				{#each trainings as train}
					<li class="block-experience">
						<TrainingDisplay {train} action={true} />
					</li>
				{/each}
			{/if}
		</ul>
	</div>
{/if}
