<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;
	export let target: '' | '_blank' = '';
	export let headerLink = false;
</script>

{#if headerLink && href}
	<a class="header-link" {href} {target} class:active={$page.url.pathname === href}>
		<slot>Link Label</slot>
	</a>
{:else if !href}
	<span class="inactive">
		<slot>Link Label</slot>
	</span>
{:else}
	<a {href} {target}>
		<slot>Link Label</slot>
	</a>
{/if}

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

  a.header-link
    text-decoration: none
    color: $black

    &:hover
      color: $primary
      transition: 200ms linear color

  a.active
    color: $primary

  span.inactive
    color: $disabled

    &:hover
      cursor: default
</style>
