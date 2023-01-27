<script lang="ts">
	import type { ResponseProfile } from '../../utils/get.type';
	import Icon from '$lib/components/Icon.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import Input from '$lib/components/forms/Input.svelte';
	import Checkbox from '$lib/components/forms/Checkbox.svelte';
	import Button from '$lib/components/Button.svelte';

	import { enhance } from '$app/forms';

	import type { ActionData } from './$types';

	export let editable = false;
	export let profile: ResponseProfile;
	export let form: ActionData;

	$: ({ first_name, last_name, speciality, description, status, grade } = profile);

	let displayEditSummary = false;
	let displayEditProfilImg = false;

	function handleCheck(e: Event) {
		status = (e.target as HTMLInputElement).checked;
	}
</script>

<div class="Profile">
	<div class="container-top">
		<div class="left">
			<img class="img-profile" src="https://picsum.photos/200/300" alt="profil" />
			<div class="user-name">
				<h1>{first_name} {last_name}</h1>
				{#if editable}
					<div class="edit-profile" on:click={() => (displayEditSummary = true)}>
						Modifier le profil
						<Icon id="edit-2" color="black" size="1em" />
					</div>
				{/if}
			</div>
			<div class="availability">
				{status ? 'Je suis disponible' : 'Je suis pas disponible'}
				<div class={status ? 'is-available' : 'is-not-available'} />
			</div>
			<div class="grade">
				{grade}
				{speciality}
			</div>
			<div class="presentation">
				<p>
					{description}
				</p>
			</div>
		</div>

		<div class="right">
			<img class="image-secondary" src="https://picsum.photos/560/450" alt="profil" />
		</div>
	</div>

	<div class="container-bottom">
		<div class="professional-container">
			<h2 class="experience-container-title">Expériences Professionnelles</h2>
			<div class="block-experience">
				<div class="duration-experience">
					<p>2017-2022</p>
				</div>
				<div class="name-experience">
					<p>UI designer</p>
				</div>

				<div class="name-enterprise">
					<p>Back Market</p>
				</div>

				<div class="location-experience">
					<p>Bordeaux, France</p>
				</div>

				<div class="actions-experience">
					<h4>Actions confiées</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus dignissim dolor at
						lacinia. Suspendisse cursus mollis dolor eu mattis.
					</p>
				</div>
			</div>
		</div>
		<div class="degree-container">
			<h2 class="degree-container-title">Formations</h2>
			<div class="block-degree">
				<div class="duration-degree">
					<p>2022</p>
				</div>
				<div class="name-school">
					<p>ECV Digital</p>
				</div>

				<div class="location-degree">
					<p>Paris, Île-de-France, FR</p>
				</div>

				<div class="name-degree">
					<p>Bachelor 3 Digital Project Manager, UX Design speciality, Honors</p>
				</div>
			</div>
		</div>
	</div>
</div>

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

.container-top
  position: relative
  display: flex
  flex-direction: row
  width: 80%
  margin: 5rem 7.5rem
  justify-content: space-between
  border-bottom: 1.5px solid #00000010
  padding-bottom: 80px

.right
  display: flex
  flex-direction: column
  width: 40%

.left
  display: flex
  flex-direction: column
  width: 40%
  margin-right: 1.25rem

.img-profile
  width: 84px
  height: 84px
  border-radius: 100%

.availability
  margin: 0.75rem 0
  font-weight: 600
  color: #18181860
  font-size: 1.125rem
  display: flex

.is-not-available
  background-color: red 
  width: 10px
  height: 10px
  border-radius: 50%
  margin-left: 0.313rem

.is-available
  background-color: green 
  width: 10px
  height: 10px
  border-radius: 50%
  margin-left: 0.313rem

.grade
  margin: 0.75rem 0
  font-weight: 600
  color: #18181860
  font-size: 1.125rem

.user-name
  display: flex
  flex-direction: column
  max-width: 180px
  flex-wrap: wrap

.presentation
  font-size: 1rem
  color: #18181860
  line-height: 24px

.image-secondary
  border-radius: 5%
  box-shadow: 50px -20px #B6AEA7

.container-bottom
  margin: 7.5rem
  display: flex
  flex-direction: row
  flex-wrap: wrap
  justify-content: space-between

.professional-container
  max-width: 40vw
  background-color: #FFFCFA
  border-radius: 30px
  padding: 16px 24px
  margin-bottom: 15px

.degree-container-title
  color: #F37144

.experience-container-title
  color: #F37144

.degree-container
  max-width: 40vw
  background-color: #FFFCFA
  border-radius: 30px
  padding: 16px 24px
  margin-bottom: 15px

.name-enterprise
  color: #F25824
  text-decoration: underline
  grid-column: 2

.location-experience
  color: #18181860
  grid-column: 2

.actions-experience
  color: #18181860
  grid-column: 2

.location-degree
  color: #18181860 

.name-degree
  color: #18181860

.block-experience
  display: grid
  grid-template-columns: repeat(1fr, 2fr)
  grid-gap: 20px

  
.duration-experience
  grid-column: 1
  
.name-experience
  grid-column: 2

.block-degree
  display: grid
  grid-template-columns: repeat(1fr, 2fr)
  grid-gap: 20px

.duration-degree
  grid-column: 1

.name-school
  grid-column: 2

.name-degree
  grid-column: 2

.location-degree
  grid-column: 2

.edit-profile
  display: flex
  flex-direction: row
  align-items: flex-end
  gap: 10px
  text-decoration: underline

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
