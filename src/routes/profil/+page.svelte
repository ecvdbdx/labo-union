<script lang="ts">
	export let data;

	let { first_name, last_name, cursus, description } = data.data;
</script>

<h1>Profil {first_name} {last_name}</h1>
<h1>{cursus}</h1>
<h1>{description}</h1>
<a href="/profil/edition" data-sveltekit-preload-data="hover">modifier mon profil</a>
