<script lang="ts">
	export let href: string;
	export let target: '' | '_blank' = '';
</script>

<a {href} {target}>
	<slot>Link Label</slot>
</a>

<style lang="sass">
  
  a 
    color: $primary
    transition: 0.35s ease

    &:visited 
      color: $focus
    
    &:hover 
      color: $hover
    

    &:focus-visible 
      color: $focus
    

    &:active 
      color: $active

</style>
