<script lang="ts">
	import { page } from '$app/stores';

	import { modal } from '$lib/stores/modal';
	import PortfolioForm from '$lib/components/profile/PortfolioForm.svelte';
	import Button from '$lib/components/Button.svelte';

	export let portfolioData: {
		image: string;
		img_alt: string;
		title: string;
		description: string;
	}[] = [];
	const canEdit = $page.url.pathname === '/profil';

	const createNewProject = () => {
		modal.set({
			title: 'Ajouter un projet à votre Portfolio',
			component: PortfolioForm,
			props: {
				form: $page.form,
			},
		});
	};
</script>

<div class="grid-container">
	{#if canEdit}
		<div class="project-card add-project">
			<div>
				<p>Ajouter un projet à votre Portfolio</p>
				<Button on:click={createNewProject} type="another-one">Ajouter un projet</Button>
			</div>
		</div>
	{/if}

	{#if portfolioData.length === 0 && !canEdit}
		<div class="no-project">
			<p>Il n'y a pas encore de projet dans ce portfolio</p>
		</div>
	{:else}
		{#each portfolioData as portfolioItem}
			<div class="project-card">
				<img src={portfolioItem.image} alt={portfolioItem.img_alt} />
				<h3>{portfolioItem.title}</h3>
				<p>{portfolioItem.description}</p>
			</div>
		{/each}
	{/if}
</div>

<style lang="sass">
.add-project
  display: flex
  justify-content: center
  align-items: center
  padding: 3rem
  background: $white
  border-radius: 1.875rem

  div 
    text-align: center
    padding: 1rem 2rem
    border: 1px dashed #D0D0D0
    border-radius: 0.875rem
  
  p
    margin-bottom: 1rem
    color: $black


.grid-container
  display: grid
  grid-template-columns: repeat(3, 1fr)
  grid-gap: 2rem
  margin-bottom: 2rem

  .no-project
    text-align: center
    grid-column: 2

h3
  padding-top: 0.625rem

img
  object-fit: cover
  width: 100%
  height: auto
  border-radius: 1.875rem

p
  color: #18181899
  padding-top: 0.625rem

</style>
