<script lang="ts">
	import type { Profile } from '$lib/types/profile';
	import { enhance } from '$app/forms';
	import { v4 as uuidv4 } from 'uuid';

	import { supabase } from '$lib/auth';
	import { invalidate } from '$app/navigation';

	import Icon from '$lib/components/Icon.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/forms/Input.svelte';
	import Checkbox from '$lib/components/forms/Checkbox.svelte';
	import Curriculum from './Curriculum.svelte';
	import Portfolio from './Portfolio.svelte';

	let files: FileList;
	import { uploadImg, uploading } from '$lib/utils/upload';

	export let editable = false;
	export let userId: string;
	export let profile: Profile;
	export let form: { first_name_error: string; last_name_error: string } | null = null;

	$: ({ first_name, last_name, speciality, description, status, grade, profile_img } = profile);

	let displayEditSummary = false;
	let displayEditProfilImg = false;

	let isCurriculum = false;

	const handleOpenEditModal = () => (displayEditSummary = true);
	const handleOpenImgModal = () => (displayEditProfilImg = true);

	const handleCheck = (e: Event) => {
		status = (e.target as HTMLInputElement).checked;
	};

	function changeImg() {
		const currentImg = profile.profile_img.split('image-profile/');

		if (!files || files.length === 0) {
			throw new Error('You must select an image to upload.');
		}

		const file = files[0];
		const format = file.name.split('.').pop();

		profile.profile_img = URL.createObjectURL(file);

		const hashProfile = uuidv4();

		const filePath = `${hashProfile}-profile.${format}`;

		uploadImg(userId, filePath, currentImg, file);
	}

	async function deleteImg() {
		const { error: err } = await supabase
			.from('Profile')
			.update({ profile_img: '' })
			.eq('user_id', userId);
		if (err) {
			return err;
		}

		invalidate('app:profile');
	}
</script>

<div class="Profile">
	<a href="/">home</a>
	<div class="container-top">
		<div class="left">
			{#if editable && profile_img === ''}
				<button class="img-profile" on:click={handleOpenImgModal}>
					<Icon id="plus" color="black" size="1em" />
				</button>
			{/if}
			{#if profile_img !== ''}
				<button class="img-profile" on:click={handleOpenImgModal}>
					<div class="pencil">
						<Icon id="edit-2" color="black" size="1em" />
					</div>
					<img class="img-profile" src={profile_img} alt="" />
				</button>
			{/if}
			<div class="user-name">
				<h1>{first_name} {last_name}</h1>
				{#if editable}
					<div class="edit-profile" on:keydown={handleOpenEditModal} on:click={handleOpenEditModal}>
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
	<div class="tab">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="curriculum"
			on:click={() => (isCurriculum = true)}
			class:tab-selected={isCurriculum === true}
		>
			Curriculum
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="portfolio"
			on:click={() => (isCurriculum = false)}
			class:tab-selected={isCurriculum === false}
		>
			Portfolio
		</div>
	</div>

	<div class="container-bottom">
		{#if isCurriculum}
			<Curriculum />
		{:else}
			<Portfolio />
		{/if}
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
				displayEditSummary = false;
				return ({ update }) => update({ reset: false });
			}}
		>
			<Input
				placeholder={'John'}
				value={first_name ?? ''}
				name={'first_name'}
				type={'text'}
				required={true}
				error={form?.first_name_error}>Prénom *</Input
			>
			<Input
				placeholder={'Dupont'}
				value={last_name ?? ''}
				name={'last_name'}
				type={'text'}
				required={true}
				error={form?.last_name_error}>Nom *</Input
			>
			<Input placeholder={'M2'} value={grade ?? ''} name={'grade'} required={false} type={'text'}
				>Classe</Input
			>
			<Input
				placeholder={'Développement Web'}
				value={speciality ?? ''}
				name={'speciality'}
				required={false}
				type={'text'}>Spécialité</Input
			>
			<Input
				placeholder={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus dignissim dolor at lacinia. Suspendisse cursus mollis dolor eu mattis. Sed ultricies commodo dictum. Suspendisse porta blandit quam. '}
				value={description ?? ''}
				required={false}
				name={'description'}
				type={'text'}>Description</Input
			>

			<Checkbox
				name={'status'}
				reverse
				label={'Je suis disponible'}
				value={status ?? false}
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
			{#if editable && profile_img === ''}
				<div class="img-profile" />
			{/if}
			{#if profile_img !== ''}
				<div class="img-profile img-modal">
					<img src={profile_img} alt="" />
				</div>
			{/if}
		</div>
		<div class="modifyImg">
			<div class="params">
				<label class="button primary block" for="single">
					{uploading ? 'Uploading ...' : 'Modifier / Ajouter une image'}
				</label>
				<input
					style="visibility: hidden; position:absolute;"
					type="file"
					id="single"
					accept=".jpg, .png, .jpeg, .JPEG, .webp"
					bind:files
					on:change={changeImg}
					disabled={uploading}
				/>
				<Icon id="edit-2" color="black" size="1em" />
			</div>
			<button class="params" on:click={deleteImg}>
				Supprimer
				<Icon id="x" color="black" size="1em" />
			</button>
		</div>
	</Modal>
{/if}

<style lang="sass">

.container-top
  position: relative
  display: flex
  flex-direction: row
  margin: 5rem 7.5rem
  width: 80%
  justify-content: space-between
  
.tab
  display: flex
  flex-direction: row
  margin: 5rem 7.5rem
  border-bottom: 1.5px solid #00000010
  padding-bottom: 1.25rem
  div
    color: #1818184D

.tab-selected
  color: #181818!important
      
.curriculum
  padding-right: 1.5rem
  cursor: pointer

.portfolio
  cursor: pointer

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
  border: 1px solid #000 
  display: flex
  justify-content: center
  align-items: center
  position: relative
  object-fit: cover
  cursor: pointer
  padding: 0

.img-profile .pencil 
  position: absolute
  left: 0
  right: 0
  top: 0
  bottom: 0
  margin: auto
  width: fit-content
  height: fit-content
  z-index: 2
  background-color: #fff
  border-radius: 50%
  padding: 5px
	
.img-modal 
  width: auto
  height: auto
  cursor: initial 

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

.location-degree
  color: #18181860 

.edit-profile
  display: flex
  flex-direction: row
  align-items: flex-end
  gap: 10px
  text-decoration: underline
  cursor: pointer

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
    width: 300px
    height: 300px
    object-fit: cover

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
    border: none
    font-style: inherit
    background-color: transparent
    padding: 0
    font-family: 'Plus Jakarta Sans', sans-serif
    font-size: 16px
    label
      cursor: pointer
</style>
