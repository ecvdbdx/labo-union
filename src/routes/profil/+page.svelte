<script lang="ts">
	import type { PageData, ActionData } from './$types';
	import Profile from '$lib/components/Profile.svelte';

	export let data: PageData;
	export let form: ActionData;

	$: ({ first_name, last_name, grade, speciality, description, status } = data.profile);
</script>

<!-- <div on:click={() => (displayEditSummary = true)}>Open Summary edit</div>
<div on:click={() => (displayEditProfilImg = true)}>Open Profil Image edit</div> -->

<Profile profile={data.profile} editable={true} {form} />
