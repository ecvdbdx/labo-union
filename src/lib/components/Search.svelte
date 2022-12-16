<script lang="ts">
	import Icon from './Icon.svelte';

	export let search: string;
	export let placeholder = 'Search...';
	export let label: string | null = null;
	export let name: string;
</script>

<div class="group">
	{#if label}
		<label for={name}>{label}</label>
	{/if}
	<div class="input">
		<input bind:value={search} type="search" {name} {placeholder} />

		<button class="submit" on:click>
			<Icon id="search" color="#f25824" size="1.5em" />
		</button>
	</div>
</div>

<style lang="sass">
	
	.group 
		margin-bottom: 1rem
		width: 100%
		position: relative

		label 
			display: block
			margin-bottom: 0.5rem
		

		.input 
			display: flex
			position: relative
			padding: 0.55rem 0.7rem
			border: 1px solid $disabled
			background-color: $white
			border-radius: 10px

			input 
				flex-grow: 1
				color: $black
				border: none
				background-color: transparent
				padding: 0

				&:focus-visible 
					outline: none

			.submit 
				background-color: transparent
				border: none
				cursor: pointer
				display: flex
				align-items: center
			
		

</style>
