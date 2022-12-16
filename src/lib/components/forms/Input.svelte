<script lang="ts">
	export let placeholder = 'Text description';
	export let value: string | number | boolean;
	export let noLabel = false;
	export let error: string | null = null;
	export let name: string;
	export let type: 'text' | 'password' | 'email' | 'number' | 'range' = 'text';

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
	<input {type} {placeholder} {value} {name} on:input={handleInput} on:change={handleInput} />
	{#if error}
		<div class="error">
			{error}
		</div>
	{/if}
</div>

<style lang="sass">
	.group 
		margin-bottom: 1rem
		width: 100%
		position: relative

		&.onError 
			input 
				border-color: $error
				border-radius: 10px 10px 0 0
				background-color: $errorBkg
			
			.error 
				width: 100%
				border: 1px solid $error
				border-radius: 0 0 10px 10px
				padding: 0.7rem
				background-color: $error
				color: $white
				font-size: 0.8rem
			
		

		label 
			display: block
			margin-bottom: 0.5rem
		

		input 
			width: 100%
			position: relative
			padding: 0.7rem
			border: 1px solid $disabled
			background-color: $white
			border-radius: 10px
			color: $black

			&:focus-visible 
				outline: none

</style>
