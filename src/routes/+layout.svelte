<slot />

<style lang="scss">
	@use './src/lib/styles/colors';

	:global(body) {
		padding: 0;
		margin: 0;
		background-color: colors.$tertiary;
		font-family: sans-serif;
	}

	:global(a) {
		color: colors.$primary;
		transition: 0.35s ease;

		&:visited {
			color: colors.$focus;
		}

		&:hover {
			color: colors.$hover;
		}

		&:focus {
			color: colors.$focus;
		}

		&:active {
			color: colors.$active;
		}
	}

	:global(.container) {
		width: calc(100vw - 240px);
		margin: 0 auto;
	}
</style>
