<script lang="ts">
	import Link from './Link.svelte';

	const links: { label: string; url: string | null }[] = [
		{
			label: 'Opportunités',
			url: null,
		},
		{
			label: 'Annuaire',
			url: null,
		},
		{
			label: 'Messages',
			url: null,
		},
		{
			label: 'Actualités',
			url: null,
		},
		{
			label: 'Profil',
			url: '/profil',
		},
	];

	const subLinks: { label: string; url: string | null }[] = [
		{
			label: 'Mentions légales',
			url: null,
		},
		{
			label: 'CGU',
			url: null,
		},
		{
			label: 'Politique de confidentialité',
			url: null,
		},
		{
			label: 'Plan du site',
			url: null,
		},
	];
</script>

<footer class="Footer">
	<a href="/">
		<img src="/svg/logo_white.svg" alt="logo union" />
	</a>
	<div class="container">
		<div class="container-links">
			<nav>
				{#each links as link}
					<Link href={link.url} empty={link.url === null ? true : false}>
						{link.label}
					</Link>
				{/each}
			</nav>
		</div>
	</div>
</footer>

<footer class="subFooter">
	<div>
		<div class="container-links">
			<nav>
				{#each subLinks as subLink}
					<Link href={subLink.url} empty={subLink.url === null ? true : false}>
						{subLink.label}
					</Link>
				{/each}
			</nav>
		</div>
	</div>
</footer>

<style lang="sass">
	.Footer
		background-color: $primary
		height: fit-content
		padding: 1.25rem 7.5rem
		display: flex
		justify-content: space-between
		align-items: center
		font-size: 0.9rem
		
		img
			width: auto
			height: 100%
			
		.container
			margin: auto
			
		.container-links
			display: flex
			align-items: center
			justify-content: center

			nav
				display: flex
				gap: 2rem
				color: $white
				height: fit-content
				align-items: center
				margin-right: 2rem
	
	:global(.Footer a:not(.active))
		text-decoration: none
		color: $white
		
	.subFooter
		background-color: $hover
		height: fit-content
		padding: 1.25rem 7.5rem
		display: flex
		justify-content: center
		font-size: 0.75rem
		
		.container-links
			display: flex
			align-items: center

			nav
				display: flex
				gap: 2rem
				color: $disabled
				height: fit-content
				align-items: center
				margin-right: 2rem
				
	:global(.subFooter a:not(.active))
		text-decoration: none
		color: $disabled
</style>
