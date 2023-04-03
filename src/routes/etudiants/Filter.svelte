<script lang="ts">
	export let options: Record<string, string>[];
	export let label: string;

	let selectedOption: string;
	let key = Object.keys(options[0])[0];
</script>

<div class="Filter">
	<label for={label}>{label}</label>
	<select bind:value={selectedOption} on:change id={label}>
		<option value="">Sélectionner</option>
		{#each options as option}
			<option value={option[key]}>{option[key]}</option>
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
