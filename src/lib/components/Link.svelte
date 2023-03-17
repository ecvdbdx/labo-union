<script lang="ts">
	export let href: string | null;
	export let target: '' | '_blank' = '';
	export let active = false;
	export let empty = false;
</script>

<a {href} {target} class:active class:empty>
	<slot>Link Label</slot>
</a>

<style lang="sass">
  a
    color: $primary
    transition: 0.35s ease
    text-decoration: none

    &.empty
      color: $disabled
      pointer-events: none

    &:hover
      cursor: default

    &:active 
      color: $active

      &:hover
        color: $primary
        transition: 200ms linear color

    // &:visited 
    //   color: $focus
    
    &:hover 
      color: $hover
      cursor: pointer

    &:focus-visible 
      color: $focus
</style>
