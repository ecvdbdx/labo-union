<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<div class="container" transition:fade={{ duration: 300 }}>
	<div class="PopIn">
		<slot />
	</div>
</div>

<style lang="sass">
  .container
    position: fixed
    inset: 0
    background-color: rgba($black, .3)
    width: 100vw
    height: 100vh
    display: flex
    align-items: center
    justify-content: center
    .PopIn
      width: 75vw
      height: auto
      max-height: 90vh
      border-radius: 30px
      padding: 50px
      background-color: $background
      overflow: auto

</style>
