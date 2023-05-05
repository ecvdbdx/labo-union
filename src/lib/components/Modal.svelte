<script lang="ts">
	import dialogPolyfill from 'dialog-polyfill';

	import { modal } from '$lib/stores/modal';
	import Icon from '$lib/components/Icon.svelte';
	import { onMount } from 'svelte';

	let element: HTMLDialogElement;
	let css = '';

	onMount(() => {
		// if browser support dialog element, do nothing
		if (typeof HTMLDialogElement === 'function') return;

		dialogPolyfill.registerDialog(element);
		css = 'polyfill';
	});

	$: if (element) {
		if ($modal) {
			element.showModal();
		} else {
			try {
				element.close();
			} catch (error) {
				// ignore
			}
		}
	}

	const closeOnBackdrop = (event: MouseEvent | KeyboardEvent) => {
		if (event instanceof KeyboardEvent) return;

		const { top, left, height, width } = element.getBoundingClientRect();
		const isInDialog =
			top <= event.clientY &&
			event.clientY <= top + height &&
			left <= event.clientX &&
			event.clientX <= left + width;
		if (!isInDialog) {
			element.close();
		}
	};
</script>

<dialog
	bind:this={element}
	on:click={closeOnBackdrop}
	on:keydown={closeOnBackdrop}
	class="modal {css}"
>
	<div class="title">
		{$modal ? $modal.title : 'Modal'}
		<button class="close" on:click={() => modal.set(null)} aria-label="close modal">
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
    width: 75vw
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
