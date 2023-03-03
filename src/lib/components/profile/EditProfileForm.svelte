<script lang="ts">
	import { enhance } from '$app/forms';
	import type { Profile } from '$lib/types/profile';

	import Input from '$lib/components/forms/Input.svelte';
	import Checkbox from '$lib/components/forms/Checkbox.svelte';
	import Button from '$lib/components/Button.svelte';

	export let form: { first_name_error: string; last_name_error: string };
	export let profile: Profile;
</script>

<form
	class="form"
	method="POST"
	use:enhance={() =>
		({ update }) =>
			update({ reset: false })}
>
	<Input
		placeholder={'John'}
		value={profile.first_name ?? ''}
		name={'first_name'}
		type={'text'}
		required={true}
		error={form?.first_name_error}>Prénom *</Input
	>
	<Input
		placeholder={'Dupont'}
		value={profile.last_name ?? ''}
		name={'last_name'}
		type={'text'}
		required={true}
		error={form?.last_name_error}>Nom *</Input
	>
	<Input
		placeholder={'M2'}
		value={profile.grade ?? ''}
		name={'grade'}
		required={false}
		type={'text'}>Classe</Input
	>
	<Input
		placeholder={'Développement Web'}
		value={profile.speciality ?? ''}
		name={'speciality'}
		required={false}
		type={'text'}>Spécialité</Input
	>
	<Input
		placeholder={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus dignissim dolor at lacinia. Suspendisse cursus mollis dolor eu mattis. Sed ultricies commodo dictum. Suspendisse porta blandit quam. '}
		value={profile.description ?? ''}
		required={false}
		name={'description'}
		type={'text'}>Description</Input
	>

	<Checkbox name={'status'} reverse label={'Je suis disponible'} value={profile.status ?? false} />

	<Button>Enregistrer</Button>
</form>
