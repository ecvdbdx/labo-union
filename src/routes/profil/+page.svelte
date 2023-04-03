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
			title: 'Modifier votre photo de profil',
			component: EditAvatarForm,
			props: {
				form,
				profile: data.profile,
			},
		});
	};

	const openExperienceModal = () => {
		modal.set({
			title: 'Modifier mon expérience professionnelle',
			component: EditAvatarForm,
			props: {
				form,
				profile: data.profile,
			},
		});
	};

	const openTrainingModal = () => {
		modal.set({
			title: 'Modifier mon parcours de formation',
			component: EditAvatarForm,
			props: {
				form,
				profile: data.profile,
			},
		});
	};
</script>

{#if data.profile}
	<Profile
		profile={data.profile}
		{openEditModal}
		{openAvatarModal}
		{openTrainingModal}
		{openExperienceModal}
	/>
{:else}
	<div>loading...</div>
{/if}
