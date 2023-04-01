<script lang="ts">
	import { modal } from '$lib/stores/modal';
	import Icon from '$lib/components/Icon.svelte';

	let element: HTMLDialogElement;

	$: if (element) {
		if ($modal) {
			element.showModal();
		} else {
			element.close();
		}
	}

	const closeOnBackdrop = (event: MouseEvent | KeyboardEvent) => {
		if (event instanceof KeyboardEvent) return;

		const rect = element.getBoundingClientRect();
		const isInDialog =
			rect.top <= event.clientY &&
			event.clientY <= rect.top + rect.height &&
			rect.left <= event.clientX &&
			event.clientX <= rect.left + rect.width;
		if (!isInDialog) {
			element.close();
		}
	};
</script>

<dialog bind:this={element} on:click={closeOnBackdrop} on:keydown={closeOnBackdrop} class="modal">
	<div class="title">
		{$modal ? $modal.title : 'Modal'}
		<button class="close" on:click={() => modal.set(null)}>
			<Icon id="x" color="black" size="2em" />
		</button>
	</div>
	{#if !!$modal}
		<svelte:component this={$modal.component} {...$modal.props} />
	{/if}
</dialog>

<style lang="sass">
  .modal
    inset: 0
    border-radius: 30px
    padding: 50px
    background-color: $tertiary
    border: none
    animation: fade-in .3s ease-in-out
    transition: all .3s ease-in-out

    &::backdrop
      background-color: rgba($black, .6)
      animation: fade-in .3s ease-in-out

    > *
      flex: 1
  
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

  // cannot use svelte transition because dialog element not working same as basic html element
  @keyframes fade-in
    from
      opacity: 0
    to
      opacity: 1
</style>
