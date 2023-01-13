<script lang="ts">
	import Input from '$lib/components/forms/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';
	export let data: PageData;

	let displayEditSummary = false;
	let displayEditProfilImg = false;
	// let displayEditImg:boolean = false;
	// let displayEditExperiences:boolean = false;

	$: ({ first_name, last_name, cursus, description } = data.profile);
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
