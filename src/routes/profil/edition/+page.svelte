<script lang="ts">
	import Input from '$lib/components/forms/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ first_name, last_name, cursus, description } = data.profile);
</script>

<Modal>
	<div class="title">
		Modifier le résumé de votre profil
		<a href="/profil">
			<Icon id="x" color="black" />
		</a>
	</div>
	<form
		method="POST"
		use:enhance={() => {
			return ({ update }) => update({ reset: false });
		}}
	>
		<Input placeholder={'John'} value={first_name} name={'Prénom'} type={'text'}>Prénom *</Input>
		<Input placeholder={'Dupont'} value={last_name} name={'Nom'} type={'text'}>Nom *</Input>
		<Input
			placeholder={'Webdesigner chez Progressif Media et Étudiant en M2 UX à l’ECV Digital'}
			value={cursus}
			name={'Cursus'}
			type={'text'}>Titre du profil</Input
		>
		<Input
			placeholder={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus dignissim dolor at lacinia. Suspendisse cursus mollis dolor eu mattis. Sed ultricies commodo dictum. Suspendisse porta blandit quam. '}
			value={description}
			name={'Description'}
			type={'text'}>Description</Input
		>
		<Button>Enregistrer</Button>
	</form>
</Modal>

<style lang="sass">
	.title 
        font-weight: 700
        font-size: 2rem
        line-height: 36px
        letter-spacing: 0.02em
        margin-bottom: 60px
        display: flex
        flex-direction: row
        align-items: center
        justify-content: space-between
        width: 100%
</style>
