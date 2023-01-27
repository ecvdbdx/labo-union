<script lang="ts">
	import Input from '$lib/components/forms/Input.svelte';
	import Checkbox from '$lib/components/forms/Checkbox.svelte';
	import Button from '$lib/components/Button.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import { enhance } from '$app/forms';
	import type { PageData, ActionData } from './$types';

	export let data: PageData;
	export let form: ActionData;

	let displayEditSummary = false;
	let displayEditProfilImg = false;

	$: ({ first_name, last_name, grade, speciality, description, status } = data.profile);

	function handleCheck(e: Event) {
		status = (e.target as HTMLInputElement).checked;
	}
</script>

<div>Page profil</div>

<div on:click={() => (displayEditSummary = true)}>Open Summary edit</div>
<div on:click={() => (displayEditProfilImg = true)}>Open Profil Image edit</div>

{#if displayEditSummary === true}
	<Modal>
		<div class="title">
			Modifier le résumé de votre profil
			<button class="close" on:click={() => (displayEditSummary = false)}>
				<Icon id="x" color="black" size="2em" />
			</button>
		</div>
		<form
			class="form"
			method="POST"
			use:enhance={() => {
				return ({ update }) => update({ reset: false });
			}}
		>
			<Input
				placeholder={'John'}
				value={first_name}
				name={'first_name'}
				type={'text'}
				required={true}
				error={form?.first_name_error}>Prénom *</Input
			>
			<Input
				placeholder={'Dupont'}
				value={last_name}
				name={'last_name'}
				type={'text'}
				required={true}
				error={form?.last_name_error}>Nom *</Input
			>
			<Input placeholder={'M2'} value={grade} name={'grade'} required={false} type={'text'}
				>Classe</Input
			>
			<Input
				placeholder={'Développement Web'}
				value={speciality}
				name={'speciality'}
				required={false}
				type={'text'}>Spécialité</Input
			>
			<Input
				placeholder={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus dignissim dolor at lacinia. Suspendisse cursus mollis dolor eu mattis. Sed ultricies commodo dictum. Suspendisse porta blandit quam. '}
				value={description}
				required={false}
				name={'description'}
				type={'text'}>Description</Input
			>

			<Checkbox
				name={'status'}
				reverse
				label={'Je suis disponible'}
				value={status}
				on:change={(e) => handleCheck(e)}
			/>

			<Button>Enregistrer</Button>
		</form>
	</Modal>
{/if}

{#if displayEditProfilImg === true}
	<Modal>
		<div class="title">
			Modifier votre photo de profil
			<button class="close" on:click={() => (displayEditProfilImg = false)}>
				<Icon id="x" color="black" size="2em" />
			</button>
		</div>
		<div class="profilImg">
			<img src="https://placebear.com/g/1000/1000" alt="" />
		</div>
		<div class="modifyImg">
			<div class="params">
				Modifier / Ajouter une image
				<Icon id="edit-2" color="black" size="1em" />
			</div>
			<div class="params">
				Supprimer
				<Icon id="x" color="black" size="1em" />
			</div>
		</div>
	</Modal>
{/if}

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

		.close 
			border: none
			background-color: transparent
			cursor: pointer

	.form 
		display: flex
		flex-direction: column
		align-items: flex-start
		width: 100%
		gap: 14px

		:global(.Button)
			align-self: end

	.profilImg 
		display: flex
		align-items: center
		justify-content: center
		width: 100%
		img
			border-radius: 50%
			max-width: 300px
			max-height: 300px
			width: 100%
			height: 100%
	
	.modifyImg
		display: flex
		flex-direction: row
		align-items: center
		justify-content: space-between
		margin-top: 60px
		.params
			display: flex
			flex-direction: row
			align-items: center
			gap: 10px
			text-decoration: underline
			cursor: pointer

</style>
