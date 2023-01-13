<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ first_name, last_name, cursus } = data.profile);
</script>

<div class="container">
	<div class="left">
		<img class="img-profile" src="https://picsum.photos/200/300" alt="profil" />
		<div class="user-name">
			<h1>{first_name} {last_name}</h1>
		</div>
		<Button type="rounded">
			{cursus}
		</Button>
		<div class="presentation">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</div>
	</div>

	<div class="right">
		<img class="image-secondary" src="https://picsum.photos/560/450" alt="profil" />
	</div>
</div>

<style lang="sass">
.container
  background-color: $tertiary
  display: flex
  flex-direction: row
  width: 80%
  margin: 5rem 7.5rem
  justify-content: space-between

.right
  display: flex
  flex-direction: column
  width: 35%

.left
  display: flex
  flex-direction: column
  width: 40%
  margin-right: 1.25rem

.img-profile
  width: 84px
  height: 84px
  border-radius: 100%
  
.user-name
  display: flex
  flex-direction: column
  max-width: 180px
  flex-wrap: wrap

.image-secondary
  border-radius: 5%
  box-shadow: 75px -45px #B6AEA7

</style>
