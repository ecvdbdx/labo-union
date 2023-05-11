<script lang="ts">
	export let options: (string | null)[];
	export let label: string;
	export let current: string | null;

	let selectedOption: string | null;
	// let key = Object.keys(options[0])[0];

	$: selectedOption = current;
</script>

<div class="Filter">
	<label for="data-id">{label}</label>
	<select bind:value={selectedOption} on:change>
		<option value="">Sélectionner</option>
		{#each options as option}
			<option value={option}>{option}</option>
		{/each}
	</select>
</div>

<style lang="sass">
.Filter
	display: flex
	flex-direction: column
	width: 11rem
	margin-right: 3.4rem

label
	margin: 0.3rem
	font-size: 0.75rem
	font-weight: 500
</style>
