<script>
</script>

<div class="Card">
	<slot />
</div>

<style lang="sass">
.Card
  position: relative
  min-height: 14rem
  height: 23.5rem
  border-radius: 1rem
  background-color: $white
  padding: 1.25rem
  border: 3px solid $white
  transition: all ease-in-out 200ms
  &:hover, &:focus
   //border: 3px solid $primary
</style>
