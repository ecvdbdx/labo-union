<script lang="ts">
	export let placeholder = '';
	export let noLabel = false;
	export let error: string | null = null;
	export let name: string;
	export let disabled = false;
	export let hidden = false;
	export let type:
		| 'text'
		| 'password'
		| 'email'
		| 'number'
		| 'range'
		| 'tel'
		| 'textarea'
		| 'date' = 'text';
	export let required = false;
</script>

<div class="group" class:onError={error}>
	{#if !noLabel}
		<label for={name}>
			<slot>Label</slot>
		</label>
	{/if}
	{#if type !== 'textarea'}
		<input {disabled} {type} {placeholder} {name} {required} {hidden} id={name} />
	{:else}
		<textarea {disabled} {placeholder} {name} {required} id={name} />
	{/if}
	{#if error}
		<div class="error">
			{error}
		</div>
	{/if}
</div>

<style lang="sass">
  .group
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

    textarea, input
      box-sizing: border-box
      width: 100%
      display: block
      position: relative
      padding: 0.7rem
      border: 1px solid $disabled
      background-color: $white
      border-radius: 10px
      color: $black
      margin-bottom: 1.8rem
      font-family: $base_font

      &:disabled
        background: $disabled
        cursor: not-allowed
			
    input[hidden]
        display: none
		
 

    textarea
      resize: vertical

      &:focus-visible
        outline: none

</style>
