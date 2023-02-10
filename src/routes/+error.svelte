<script>
	import { page } from '$app/stores';
</script>

<h1>{$page.error && $page.error.message}</h1>
<a href="/">Retour à l'accueil</a>
