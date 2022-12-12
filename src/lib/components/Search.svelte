<script lang="ts">
	export let search: string;
	export let placeholder = 'Search...';
	export let label: string | null = null;
	export let name = `search_${Math.random().toString(36).substring(7)}`;
</script>

<div class="group">
	{#if label}
		<label for={name}>{label}</label>
	{/if}
	<div class="input">
		<input bind:value={search} type="search" {name} {placeholder} />

		<button class="submit" on:click>
			<svg
				width="18"
				height="18"
				viewBox="0 0 18 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M2.6001 7.3001C2.6001 4.42822 4.92822 2.1001 7.8001 2.1001C10.672 2.1001 13.0001 4.42822 13.0001 7.3001C13.0001 10.172 10.672 12.5001 7.8001 12.5001C4.92822 12.5001 2.6001 10.172 2.6001 7.3001ZM7.8001 0.100098C3.82365 0.100098 0.600098 3.32365 0.600098 7.3001C0.600098 11.2765 3.82365 14.5001 7.8001 14.5001C9.42772 14.5001 10.9292 13.96 12.1351 13.0493L15.893 16.8072C16.2835 17.1977 16.9167 17.1977 17.3072 16.8072C17.6977 16.4167 17.6977 15.7835 17.3072 15.393L13.5493 11.6351C14.46 10.4292 15.0001 8.92772 15.0001 7.3001C15.0001 3.32365 11.7765 0.100098 7.8001 0.100098Z"
					fill="#F25824"
				/>
			</svg>
		</button>
	</div>
</div>

<style lang="scss">
	@use './src/lib/styles/colors';

	.group {
		margin-bottom: 1rem;
		width: 100%;
		position: relative;

		label {
			display: block;
			margin-bottom: 0.5rem;
		}

		.input {
			display: flex;
			position: relative;
			padding: 0.55rem 0.7rem;
			border: 1px solid colors.$disabled;
			background-color: colors.$white;
			border-radius: 10px;

			input {
				flex-grow: 1;
				color: colors.$black;
				border: none;
				background-color: transparent;
				padding: 0;

				&:focus {
					outline: none;
				}
			}

			.submit {
				background-color: transparent;
				border: none;
				cursor: pointer;
				display: flex;
				align-items: center;
			}
		}
	}
</style>
