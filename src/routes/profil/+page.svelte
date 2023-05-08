<script lang="ts">
	import type { PageData, ActionData } from './$types';

	import type { Profile as ProfileType } from '$lib/types/profile';
	import Profile from '$lib/components/Profile.svelte';
	import { modal } from '$lib/stores/modal';
	import EditProfileForm from '$lib/components/profile/EditProfileForm.svelte';
	import EditAvatarForm from '$lib/components/profile/EditAvatarForm.svelte';
	import EditExperienceForm from '$lib/components/profile/EditExperienceForm.svelte';
	import EditTrainingForm from '$lib/components/profile/EditTrainingForm.svelte';
	import Loader from '$lib/components/Loader.svelte';

	export let data: PageData;
	export let form: ActionData;

	$: profile = data.profile as ProfileType;

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

	const openExperienceModal = (isNew: boolean) => {
		modal.set({
			title: isNew
				? 'Ajouter une expérience professionnelle'
				: 'Modifier mon expérience professionnelle',
			component: EditExperienceForm,
			props: {
				isNew,
				form,
				profile: data.profile,
				experiences: data.profile!.Experience,
			},
		});
	};

	const openTrainingModal = (isNew: boolean) => {
		modal.set({
			title: isNew ? 'Ajouter une nouvelle formation' : 'Modifier la formation',
			component: EditTrainingForm,
			props: {
				isNew,
				form,
				profile: data.profile,
				trainings: data.profile!.Training,
			},
		});
	};
</script>

{#if data.profile}
	<Profile {profile} {openEditModal} {openAvatarModal} {openTrainingModal} {openExperienceModal} />
{:else}
	<Loader />
{/if}
