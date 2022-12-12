<script lang="ts">
	export let value = false;
	export let label: string;
	export let name = `checkbox_${Math.random().toString(36).substring(7)}`;
	export let reverse = false;
</script>

<div class="group {reverse ? 'reverse' : ''}">
	<label for={name}>{label}</label>
	<input bind:checked={value} {name} type="checkbox" />
</div>

<style lang="scss">
	@use './src/lib/styles/colors';

	.group {
		display: flex;
		justify-content: start;
		margin-bottom: 1rem;
		align-items: center;

		&.reverse {
			flex-direction: row-reverse;
		}
	}

	input {
		width: 20px;
		height: 20px;
		--webkit-appearance: none;
		appearance: none;
		border: 1px solid colors.$black;
		position: relative;
		border-radius: 5px;
		z-index: 0;

		&::before {
			content: '';
			background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><title>checkbox</title><g class="nc-icon-wrapper"><path fill="%23F25824" d="M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM20 34L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z"></path></g></svg>');
			position: absolute;
			transition: 0.35s ease;
			top: -1px;
			left: -1px;
			width: 20px;
			height: 20px;
			display: block;
			background-repeat: no-repeat;
			background-size: cover;
			transform: scale(1.3);
			opacity: 0;
		}

		&:checked {
			border: 1px solid colors.$primary;
		}

		&:checked::before {
			opacity: 1;
		}
	}
</style>
