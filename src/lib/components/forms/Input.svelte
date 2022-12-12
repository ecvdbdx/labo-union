<script lang="ts">
	export let placeholder = 'Text description';
	export let value: string | number | boolean;
	export let noLabel = false;
	export let error: string | null = null;
	export let name = `input_${Math.random().toString(36).substring(7)}`;
	export let type: 'text' | 'password' | 'email' | 'number' | 'range' = 'text';

	const handleInput = (e: Event) => {
		value = (e.target as HTMLInputElement).value;
	};
</script>

<div class="group {error ? 'onError' : ''}">
	{#if !noLabel}
		<label for={name}>
			<slot>Label*</slot>
		</label>
	{/if}
	<input {type} {placeholder} {value} {name} on:input={handleInput} on:change={handleInput} />
	{#if error}
		<div class="error">
			{error}
		</div>
	{/if}
</div>

<style lang="scss">
	@use './src/lib/styles/colors';

	.group {
		margin-bottom: 1rem;
		width: 100%;
		position: relative;

		&.onError {
			input {
				border-color: colors.$error;
				border-radius: 10px 10px 0 0;
				background-color: colors.$errorBkg;
			}

			.error {
				width: 100%;
				border: 1px solid colors.$error;
				border-radius: 0 0 10px 10px;
				padding: 0.7rem;
				background-color: colors.$error;
				color: colors.$white;
				font-size: 0.8rem;
			}
		}

		label {
			display: block;
			margin-bottom: 0.5rem;
		}

		input {
			width: 100%;
			position: relative;
			padding: 0.7rem;
			border: 1px solid colors.$disabled;
			background-color: colors.$white;
			border-radius: 10px;
			color: colors.$black;

			&:focus {
				outline: none;
			}
		}
	}
</style>
