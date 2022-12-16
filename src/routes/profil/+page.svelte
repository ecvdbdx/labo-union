<script lang="ts">
	export let data;

	let { first_name } = data.data;
</script>

<h1>Profil {first_name}</h1>
<a href="/profil/edition" data-sveltekit-preload-data="hover">modifier mon profil</a>
