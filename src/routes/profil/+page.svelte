<script lang="ts">
	import type { PageData, ActionData } from './$types';
	import Profile from '$lib/components/Profile.svelte';
	import { modal } from '$lib/stores/modal';
	import EditProfileForm from '$lib/components/profile/EditProfileForm.svelte';
	import EditAvatarForm from '$lib/components/profile/EditAvatarForm.svelte';

	export let data: PageData;
	export let form: ActionData;

	const openEditModal = () => {
		modal.set({
			title: 'Modifier le résumé de votre profil',
			component: EditProfileForm,
			props: {
				form,
				profile: data.profile,
			},
		});
	};

	const openAvatarModal = () => {
		modal.set({
			title: 'Modifier votre profil',
			component: EditAvatarForm,
			props: {
				form,
				profile: data.profile,
			},
		});
	};
</script>

{#if data.profile}
	<Profile profile={data.profile} editable {openEditModal} {openAvatarModal} />
{:else}
	<div>loading...</div>
{/if}
