<script lang="ts">
	import { page } from '$app/stores';
	import { supabase } from '$lib/auth';

	import Link from './Link.svelte';
	import Button from './Button.svelte';

	$: currentUser = null;
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

	async function setCurrentUser() {
		if (!$page.data.session) return;

		const response = await supabase
			.from('Profile')
			.select()
			.eq('user_id', $page.data.session.user.id);

		currentUser = response.data[0];
	}

	setCurrentUser();
</script>

<header class="Header">
	<a href="/">
		<img src="/svg/logo.svg" alt="logo union" />
	</a>
	<div class="container-links">
		<nav>
			{#each links as link}
				<Link headerLink href={link.url}>{link.label}</Link>
			{/each}
			{#if $page.data.session && currentUser}
				<div class="container-profil">
					<Link headerLink href="/profil">
						{currentUser?.first_name}
					</Link>
					{#if currentUser.profile_img !== ''}
						<img src={currentUser.profile_img} alt="" />
					{:else}
						<span class="profil-img-not-available" />
					{/if}
				</div>
			{:else}
				<Link headerLink href="/connexion">Connexion</Link>
			{/if}
		</nav>
		{#if $page.data.session && currentUser}
			<Button on:click={() => supabase.auth.signOut()}>Déconnexion</Button>
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

			.sign-out-link

</style>
