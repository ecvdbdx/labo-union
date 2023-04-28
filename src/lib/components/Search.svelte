<script lang="ts">
	import Icon from './Icon.svelte';
	import Button from './Button.svelte';

	export let search: string;
	export let placeholder = 'Chercher un nom...';
	export let label: string | null = null;
	export let name: string;
	export let rounded = false;
	export let buttonText: string | null = 'Rechercher';
</script>

<form class="group">
	{#if label}
		<label for={name}>{label}</label>
	{/if}
	{#if rounded}
		<div class="input-rounded">
			<input bind:value={search} type="search" {name} {placeholder} />

			<Button type="rounded" on:click>
				{buttonText}
			</Button>
		</div>
	{:else}
		<div class="input">
			<input bind:value={search} type="search" {name} {placeholder} />

			<button class="submit" on:click>
				<Icon id="search" color="#f25824" size="1.5em" />
			</button>
		</div>
	{/if}
</form>

<style lang="sass">
  .group
    margin-bottom: 1rem
    width: 100%
    position: relative

    label
      display: block
      margin-bottom: 0.5rem


    .input
      display: flex
      position: relative
      padding: 0.55rem 0.7rem
      border: 1px solid $disabled
      background-color: $white
      border-radius: 10px

      input
        flex-grow: 1
        color: $black
        border: none
        background-color: transparent
        padding: 0

        &:focus-visible
          outline: none

      .submit
        background-color: transparent
        border: none
        cursor: pointer
        display: flex
        align-items: center

    .input-rounded
      widht: 100%
      display: flex

      input
        padding: 0.6rem 1rem
        background-color: $white
        border: none
        border-radius: 2rem
        margin-right: 0.5rem
        width: 100%

</style>
