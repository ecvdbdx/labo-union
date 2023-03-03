<script lang="ts">
	import type { Profile } from '$lib/types/profile';

	import { enhance } from '$app/forms';

	import Icon from '$lib/components/Icon.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import Input from '$lib/components/forms/Input.svelte';
	import Checkbox from '$lib/components/forms/Checkbox.svelte';
	import Button from '$lib/components/Button.svelte';
	import ExperienceList from '$lib/components/ExperienceList.svelte';

	export let editable = false;
	export let profile: Profile;
	export let form: { first_name_error: string; last_name_error: string } | null = null;

	$: ({ first_name, last_name, speciality, description, status, grade, profile_img } = profile);

	let displayEditSummary = false;
	let displayEditProfilImg = false;
	const handleOpenEditModal = () => (displayEditSummary = true);

	const handleCheck = (e: Event) => {
		status = (e.target as HTMLInputElement).checked;
	};
</script>

<a href="/">home</a>
<div class="Profile">
	<section class="summary">
		<div class="wrapper-section">
			<div class="profileInfos">
				<picture>
					<img
						alt="profil"
						class="img-profile"
						src={profile_img ? profile_img : 'https://picsum.photos/200/300'}
					/>
				</picture>
				<h1>{first_name} <br /> {last_name}</h1>
				{#if editable}
					<button
						class="edit-profile"
						on:keydown={handleOpenEditModal}
						on:click={handleOpenEditModal}
						title="Editer le profil"
					>
						Modifier le profil
						<Icon id="edit-2" color="black" size="1em" />
					</button>
				{/if}
				<div class="tags">
					<p class="speciality">{speciality}</p>
					<p class="grade">{grade}</p>
				</div>
				<p class="current">
					A faire remonter
					<!-- TODO mettre le poste actuel -->
				</p>
				<a class="contact" href="" title="Contacter">Contacter</a>
				<p class="description">
					{description}
				</p>
			</div>
			<picture class="imageProfil">
				<img alt="image profil" src="https://picsum.photos/560/450" />
				<div class="edit-img" on:click={() => (displayEditProfilImg = !displayEditProfilImg)}>
					Ajouter une image
					<Icon color="black" id="edit-2" size="1em" />
				</div>
			</picture>
			<div class="illus" />
		</div>
	</section>
	<ExperienceList action={false} data={profile.Experience} />
</div>
{#if displayEditSummary === true}
	<Modal>
		<div class="title">
			Modifier le résumé de votre profil
			<button class="close" on:click={() => (displayEditSummary = false)} title="Fermer">
				<Icon id="x" color="black" size="2em" />
			</button>
		</div>
		<form
			class="form"
			method="POST"
			action="?/updateProfile"
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
			<button class="close" on:click={() => (displayEditProfilImg = false)} title="Fermer">
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
  .Profile

    section

      &.summary

        div.wrapper-section
          display: grid
          grid-template-columns: auto repeat(2, calc((50vw - 120px) - 3rem)) auto
          gap: 3rem
          grid-template-rows: 1fr

          .profileInfos
            grid-column: 2/3

            picture
              display: block
              width: 100px
              height: 100px
              border-radius: 1000px
              overflow: hidden
              margin-block-end: 1rem

              img
                width: 100%
                height: 100%
                object-fit: cover
                object-position: center
                z-index: 5

        h1
          font-size: 2rem
          font-weight: 700
          margin-block-end: 2rem

        .edit-profile
          all: inherit
          text-decoration: underline
          display: inline-flex
          align-self: start
          align-items: center
          gap: 1rem

          &:hover
            color: $primary
            transition: all ease-in-out 150ms
            cursor: pointer

        .tags
          display: flex
          align-items: center
          gap: 1rem
          margin-block: 2rem

          & > *
            background: rgba($primary, .25)
            color: $primary
            padding: .5rem 1rem
            border-radius: 100px
            font-size: .8rem
            font-weight: 700

        p.current
          font-weight: 700
          font-size: 1.25rem
          color: $gray
          margin-block: 2rem

        a.contact
          display: inline-block
          text-decoration: none
          background: $primary
          padding: .5rem 1rem
          color: $white
          border-radius: 8px
          margin-block-end: 1rem
          transition: all ease-in-out 150ms

          &:hover, &:focus
            background: darken($primary, 5)

        .description
          opacity: .6

        .illus
          display: block
          background: rgba($gray, .25)
          grid-column: 3/5
          grid-row: 1/2
          width: 100%
          height: 450px
          z-index: 10
          border-top-left-radius: 30px
          border-bottom-left-radius: 30px
          transform: translate(10%, -10%)
          backdrop-filter: blur(200px)

        .imageProfil
          grid-column: 3/4
          grid-row: 1/2
          height: 450px
          border-radius: 30px
          z-index: 20
          overflow: hidden
          position: relative

          .edit-img
            position: absolute
            top: 1rem
            right: 1rem
            z-index: 10
            background: rgba($tertiary, .75)
            padding: .5rem 1rem
            display: flex
            align-items: center
            gap: .5rem
            border-radius: 10px
            transition: all ease-in-out 150ms
            text-decoration: underline
            cursor: pointer
            backdrop-filter: blur(5px)

            &:hover, &:focus
              background: rgba($tertiary, .9)


          img
            width: 100%
            height: 100%
            object-fit: cover
            object-position: center


</style>
