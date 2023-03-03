<script lang="ts">
	import { fade } from 'svelte/transition';

	import { modal } from '$lib/stores/modal';
	import Icon from '$lib/components/Icon.svelte';
</script>

{#if $modal}
	<div class="container" transition:fade={{ duration: 300 }}>
		<div class="PopIn">
			<div class="title">
				{$modal.title}
				<button class="close" on:click={() => modal.set(null)}>
					<Icon id="x" color="black" size="2em" />
				</button>
			</div>
			<svelte:component this={$modal.component} {...$modal.props} />
		</div>
	</div>

	<div class="background" on:keydown={() => modal.set(null)} on:click={() => modal.set(null)} />
{/if}

<style lang="sass">
  .container
    position: fixed
    inset: 0
    pointer-events: none
    width: 100vw
    height: 100vh
    display: flex
    align-items: center
    justify-content: center
    z-index: 10
    
    .PopIn
      pointer-events: auto
      width: 75vw
      height: auto
      max-height: 90vh
      border-radius: 30px
      padding: 50px
      background-color: $tertiary
      overflow: auto

      .title 
        font-weight: 700
        font-size: 2rem
        line-height: 36px
        letter-spacing: 0.02em
        margin-bottom: 60px
        display: flex
        flex-direction: row
        align-items: center
        justify-content: space-between
        width: 100%

        .close 
          border: none
          background-color: transparent
          cursor: pointer

  .background
    position: fixed
    width: 100vw
    height: 100vh
    top: 0
    left: 0
    background-color: rgba($black, .3)
    z-index: 1
</style>
