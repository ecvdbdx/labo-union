<script lang="ts">
	import Link from './Link.svelte';

	const links: { label: string; url: string | null }[] = [
		{
			label: 'Annuaire',
			url: '/etudiants',
		},
		{
			label: 'Opportunités',
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
			url: null,
		},
	];
</script>

<footer class="Footer">
	<a href="/">
		<img src="/svg/logo.svg" alt="logo union" />
	</a>
	<div>
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

<style lang="sass">
    .Footer
        width: 100vw
        background-color: $primary
        height: fit-content
        padding: 1.25rem 7.5rem
        display: flex
        justify-content: space-between
        align-items: center
        font-size: 0.9rem
</style>
