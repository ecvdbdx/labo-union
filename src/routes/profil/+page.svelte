<script lang="ts">
	import type { PageData } from './$types';

	import type { Profile as ProfileType } from '$lib/types/profile';
	import Profile from '$lib/components/Profile.svelte';
	import Loader from '$lib/components/Loader.svelte';

	export let data: PageData;

	$: profile = data.profile as ProfileType;
</script>

{#if data.profile}
	<Profile {profile} />
{:else}
	<Loader />
{/if}
