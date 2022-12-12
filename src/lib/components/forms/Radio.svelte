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

<style lang="scss">
	@use './src/lib/styles/colors';

	.group {
		display: inline-flex;
		align-items: center;
		margin: 0 10px;

		label {
			margin: 0 8px;
		}

		input {
			--webkit-appearance: none;
			appearance: none;
			width: 15px;
			height: 15px;
			border: 1px solid colors.$primary;
			border-radius: 50%;
			outline: none;
			cursor: pointer;
			position: relative;
			transition: all 0.35s ease-in-out;
			margin: 0;

			&:after {
				content: '';
				position: absolute;
				width: 8px;
				height: 8px;
				border-radius: 50%;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				background: colors.$primary;
				opacity: 0;
				transition: all 0.2s ease-in-out;
			}

			&:checked:after {
				opacity: 1;
			}
		}
	}
</style>
