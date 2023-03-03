<script>
	const portfolioData = [
		{
			image: 'https://picsum.photos/id/5/600/400',
			img_alt: 'application',
			title: 'Application',
			description: 'Product Design',
		},
		{
			image: 'https://picsum.photos/id/6/600/400',
			img_alt: 'site web',
			title: 'Site Web',
			description: 'E-commerce',
		},
		{
			image: 'https://picsum.photos/id/7/600/400',
			img_alt: 'maquette',
			title: 'Maquette UX/UI',
			description: 'Design',
		},
	];
</script>

<div class="grid-container">
	{#each portfolioData as portfolioItem}
		<div>
			<img src={portfolioItem.image} alt={portfolioItem.img_alt} />
			<h3>{portfolioItem.title}</h3>
			<p>{portfolioItem.description}</p>
		</div>
	{/each}
</div>

<style lang="sass">
.grid-container
  display: grid
  grid-template-columns: repeat(3, 1fr)
  grid-gap: 2rem

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
