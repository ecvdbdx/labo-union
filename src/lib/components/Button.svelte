<script lang="ts">
	export let type: 'default' | 'rounded' | 'square' = 'default';
</script>

<button class="Button {type}" on:click>
	<slot>Text Label</slot>
</button>

<style lang="sass">

	.Button 
		color: $white
		background-color: $primary
		padding: 0.6rem 1rem
		border-radius: 10px
		border: none
		cursor: pointer
		transition: 0.15s ease

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
		

</style>
