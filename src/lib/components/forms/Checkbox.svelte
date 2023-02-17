<script lang="ts">
	export let value = false;
	export let label: string;
	export let name: string;
	export let reverse = false;
</script>

<div class="group" class:reverse>
	<label for={name}>{label}</label>
	<input bind:checked={value} {name} type="checkbox" on:change />
</div>

<style lang="sass">
	.group 
		display: flex
		justify-content: start
		margin-bottom: 1rem
		align-items: center

		&.reverse 
			flex-direction: row-reverse

	input 
		width: 20px
		height: 20px
		accent-color: $primary
		margin-right: 0.5rem
</style>
