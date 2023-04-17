<script lang="ts">
	import { page } from '$app/stores';
	import { invalidate } from '$app/navigation';

	import Link from './Link.svelte';
	import Button from './Button.svelte';
	import type { Profile } from '$lib/types/profile';

	export let user: Profile;
	export let logout: () => void;

	const logout = async () => {
		await $page.data.supabase.auth.signOut();
		invalidate('supabase:auth');
	};

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
			label: 'Ressources',
			url: null,
		},
	];
</script>

<header class="Header">
	<a href="/">
		<img src="/svg/logo.svg" alt="logo union" />
	</a>
	<div class="container-links">
		<nav>
			{#each links as link}
				<Link
					active={$page.url.pathname === link.url}
					href={link.url}
					empty={link.url === null ? true : false}
				>
					{link.label}
				</Link>
			{/each}
			{#if user}
				<div class="container-profil">
					<Link active={$page.url.pathname === '/profil'} href="/profil">
						{user?.first_name}
					</Link>
					{#if user.profile_img !== ''}
						<img src={user.profile_img} alt="" />
					{:else}
						<span class="profil-img-not-available" />
					{/if}
				</div>
			{:else}
				<Link active={$page.url.pathname === '/connexion'} href="/connexion">Connexion</Link>
			{/if}
		</nav>
		{#if user}
			<Button on:click={logout}>Déconnexion</Button>
		{/if}
	</div>
</header>

<style lang="sass">
	.Header
		width: 100vw
		height: fit-content
		padding: 1.25rem 7.5rem
		background-color: $white
		display: flex
		justify-content: space-between
		align-items: center
		position: fixed
		top: 0
		left: 0
		right: 0
		z-index: 9
		font-size: 0.9rem

		@media screen and (max-width: 1024px)
			padding: 1.25rem 2rem

		img
			width: auto
			height: 100%

		.container-links
			display: flex
			align-items: center

			nav
				display: flex
				gap: 2rem
				height: fit-content
				align-items: center
				margin-right: 2rem

			.container-profil
				display: flex
				gap: 0.6rem
				align-items: center

				img,
				span.profil-img-not-available
					width: 2rem
					height: 2rem
					border-radius: 50%

				img
					object-fit: cover

				span.profil-img-not-available
					background-color: $disabled


	:global(.Header a:not(.active):not(.empty))
		text-decoration: none
		color: $black

</style>
