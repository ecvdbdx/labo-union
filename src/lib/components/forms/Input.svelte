<script lang="ts">
	export let placeholder = '';
	export let value: string | number | boolean;
	export let noLabel = false;
	export let error: string | null = null;
	export let name: string;
	export let type: 'text' | 'password' | 'email' | 'number' | 'range' = 'text';
	export let required = false;

	const handleInput = (e: Event) => {
		value = (e.target as HTMLInputElement).value;
	};
</script>

<div class="group" class:onError={error}>
	{#if !noLabel}
		<label for={name}>
			<slot>Label</slot>
		</label>
	{/if}
	<input
		{type}
		{placeholder}
		{value}
		{name}
		{required}
		on:input={handleInput}
		on:change={handleInput}
		id={name}
	/>
	{#if error}
		<div class="error">
			{error}
		</div>
	{/if}
</div>

<style lang="sass">
	.group 
		margin-bottom: 1rem
		position: relative
		width: 100%

		&.onError 
			input 
				border: 1px solid $error
				margin-bottom: 0.5rem

			.error
				color: red

		label 
			display: block
			margin-bottom: 0.5rem
		

		input 
			box-sizing: border-box
			width: 100%
			display: block 
			position: relative
			padding: 0.7rem
			border: 1px solid $disabled
			background-color: $white
			border-radius: 10px
			color: $black

			&:focus-visible 
				outline: none

</style>
