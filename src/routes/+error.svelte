<script>
	import { page } from '$app/stores';

	import Link from '$lib/components/Link.svelte';
</script>

<div class="page">
	<div class="error">
		<p>{$page.status}</p>
		<span>|</span>
		<h1>
			{$page.error?.message}
		</h1>
	</div>
	<Link href="/">Retour à l'accueil</Link>
</div>

<style lang="sass">
	.page
		width: 100vw
		height: 100vh
		display: flex
		justify-content: center
		align-items: center
		flex-direction: column
		font-weight: 400
		.error
			font-size: 1rem
			display: flex
			justify-content: center
			align-items: center
			gap: .25rem
			margin-bottom: 1rem

			p, span
				font-size: 1.7rem

</style>
