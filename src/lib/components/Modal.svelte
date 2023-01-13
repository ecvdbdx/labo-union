<div class="container">
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
      max-width: 1050px
      width: 100%
      height: auto
      border-radius: 30px
      padding: 50px
      background-color: $background

</style>
