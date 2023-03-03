<script lang="ts">
	import type { PageData, ActionData } from './$types';
	import Profile from '$lib/components/Profile.svelte';
	import { modal } from '$lib/stores/modal';
	import EditProfileForm from '$lib/components/profile/EditProfileForm.svelte';

	export let data: PageData;
	export let form: ActionData;

	const handleOpenEditModal = () => {
		modal.set({
			title: 'Modifier le résumé de votre profil',
			component: EditProfileForm,
			props: {
				form,
				profile: data.profile,
			},
		});
	};
</script>

{#if data.profile}
	<Profile profile={data.profile} editable openEditModal={handleOpenEditModal} />
{:else}
	<div>loading...</div>
{/if}
