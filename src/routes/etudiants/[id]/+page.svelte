<script lang="ts">
	import type { PageData } from './$types';
	import Modal from '$lib/components/Modal.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import ExperienceList from '$lib/components/ExperienceList.svelte';

	export let data: PageData;
	$: ({ profile, experiences } = data);
	let displayEditExp = false;
</script>

<div class="container-page">
	<div class="container-top">
		<div class="left">
			<img class="img-profile" src="https://picsum.photos/200/300" alt="profil" />
			<div class="user-name">
				<h1>{profile.first_name} {profile.last_name}</h1>
			</div>
			<div class="availability">
				{profile.status ? 'Je suis disponible' : 'Je suis pas disponible'}
				<div class={profile.status ? 'is-available' : 'is-not-available'} />
			</div>
			<div class="grade">
				{profile.grade}
				{profile.speciality}
			</div>
			<div class="presentation">
				<p>
					{profile.description}
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
			<div class="edit-profile" on:click={() => (displayEditExp = true)}>edit profil</div>
			<ExperienceList data={experiences} />
		</div>
	</div>
</div>
{#if displayEditExp === true}
	<Modal>
		<div class="title">
			<button class="close" on:click={() => (displayEditExp = false)}>
				<Icon id="x" color="black" size="2em" />
			</button>
			Expériences professionnelles
			<button>Ajouter +</button>
		</div>
		<div class="professional-container">
			<ExperienceList data={experiences} />
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

  .container-bottom
    margin: 7.5rem
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: space-between

  .professional-container
    max-width: 40vw

  .container-bottom
    margin: 7.5rem
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: space-between

  .professional-container
    max-width: 40vw

  .container-bottom
    margin: 7.5rem
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: space-between

  .professional-container
    max-width: 40vw

  .container-bottom
    margin: 7.5rem
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: space-between

  .professional-container
    max-width: 40vw
    grid-column: 2

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
</style>
