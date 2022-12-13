<script lang="ts">
	export let type: 'default' | 'rounded' | 'square' = 'default';
</script>

<button class="Button {type}" on:click>
	<slot>Text Label</slot>
</button>

<style lang="scss">
	@use './src/lib/styles/colors';

	.Button {
		color: colors.$white;
		background-color: colors.$primary;
		padding: 0.6rem 1rem;
		border-radius: 10px;
		border: none;
		cursor: pointer;
		transition: 0.15s ease;

		&:disabled {
			background-color: colors.$disabled;
			cursor: not-allowed;
		}

		&:hover {
			background-color: colors.$hover;
		}

		&:focus {
			background-color: colors.$focus;
		}

		&:active {
			background-color: colors.$active;
		}

		&.rounded {
			border-radius: 50px;
		}

		&.square {
			border-radius: 0;
		}
	}
</style>
