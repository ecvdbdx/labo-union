<slot />

<style lang="scss">
	@use './src/lib/styles/colors';

	:global(body) {
		padding: 0;
		margin: 0;
		background-color: colors.$tertiary;
		display: contents;
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
</style>
