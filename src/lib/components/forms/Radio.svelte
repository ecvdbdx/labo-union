<script lang="ts">
	export let name: string;
	export let value: string;
	export let label: string = value;
	export let checked = false;
	export let selected = '';

	const handleInput = (e: Event) => {
		selected = (e.target as HTMLInputElement).value;
	};
</script>

<div class="group">
	<label for={name}>{label}</label>
	<input {name} {value} {checked} type="radio" on:input={handleInput} on:change={handleInput} />
</div>

<style lang="sass">
	
	.group 
		display: inline-flex
		align-items: center
		margin: 0 10px

		label 
			margin: 0 8px
		

		input 
			cursor: pointer
			position: relative
			margin: 0
			accent-color: $primary
		

</style>
