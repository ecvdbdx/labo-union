<script lang="ts">
	export let type: 'default' | 'rounded' | 'square' | 'link' = 'default';
	export let disabled = false;
	export let light = false;
	export let href: string | null = null;
</script>

{#if href}
	<a class="Button {type}" class:light {href}>
		<slot>Text link</slot>
	</a>
{:else}
	<button class="Button {type}" class:light {disabled} on:click>
		<slot>Text Label</slot>
	</button>
{/if}

<style lang="sass">
	.Button 
		color: $white
		background-color: $primary
		padding: 0.65rem 1rem
		border-radius: 10px
		border: none
		cursor: pointer
		transition: 0.15s ease
		min-width: 7.25rem
		font-size: 1rem
		font-weight: 500
		text-decoration: none

		&:disabled
			background-color: $disabled
			cursor: not-allowed


		&:hover
			background-color: $hover
		

		&:focus-visible
			background-color: $focus
		

		&:active
			background-color: $active
		

		&.rounded
			border-radius: 50px
		

		&.square
			border-radius: 0

		&.link
			color: $primary
			text-decoration: underline
			background-color: transparent
			padding: 0

			&:hover
				color: $hover

			&:active
				color: $active

			&:focus-visible
				color: $focus


		
	.light
		background-color: $white
		color: $primary
		box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05)

		&:hover
			opacity: 0.7
			background-color: $white

</style>
