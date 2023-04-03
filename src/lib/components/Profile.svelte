<script lang="ts">
	import type { Profile } from '$lib/types/profile';

	import Icon from '$lib/components/Icon.svelte';
	import Curriculum from './Curriculum.svelte';
	import Portfolio from './Portfolio.svelte';

	export let profile: Profile;
	export let openEditModal: null | (() => void) = null;
	export let openAvatarModal: null | (() => void) = null;
	export let openExperienceModal: null | ((isNew: boolean) => void) = null;
	export let openTrainingModal: null | ((isNew: boolean) => void) = null;

	$: ({ first_name, last_name, speciality, description, status, grade, profile_img } = profile);
	let isCurriculum = true;
</script>

<div class="Profile">
	<div class="container-top">
		<div class="left">
			{#if openAvatarModal}
				{#if profile_img !== ''}
					<button class="img-profile" on:click={openAvatarModal}>
						<img class="img-profile" src={profile_img} alt="" />
						<div class="pencil">
							<Icon id="edit-2" color="black" size="1em" />
						</div>
					</button>
				{:else}
					<button class="img-profile" on:click={openAvatarModal}>
						<Icon id="plus" color="black" size="1em" />
					</button>
				{/if}
			{:else}
				<img class="img-profile" src={profile_img} alt="" />
			{/if}

			<div class="user-name">
				<h1>{first_name} {last_name}</h1>
				{#if openEditModal}
					<div class="edit-profile" on:keydown={openEditModal} on:click={openEditModal}>
						Modifier le profil
						<Icon id="edit-2" color="black" size="1em" />
					</div>
				{/if}
			</div>
			<div class="availability">
				{status ? 'Je suis disponible' : 'Je suis pas disponible'}
				<div class={status ? 'is-available' : 'is-not-available'} />
			</div>
			<h3 class="grade">
				{grade}
				{speciality}
			</h3>
			{#if description}
				<div class="presentation">
					<p>
						{description}
					</p>
				</div>
			{/if}
		</div>

		<div class="right">
			<img class="image-secondary" src="https://picsum.photos/560/450" alt="profil" />
		</div>
	</div>
	<div class="tab">
		<button
			class="curriculum"
			on:click={() => (isCurriculum = true)}
			class:tab-selected={isCurriculum}
		>
			Curriculum
		</button>
		<button
			class="portfolio"
			on:click={() => (isCurriculum = false)}
			class:tab-selected={!isCurriculum}
		>
			Portfolio
		</button>
	</div>

	<div class="container-bottom">
		{#if isCurriculum}
			<Curriculum {profile} {openExperienceModal} {openTrainingModal} />
		{:else}
			<Portfolio />
		{/if}
	</div>
</div>

<style lang="sass">
.Profile
  padding-top: 5rem

p
  opacity: 1
  color: $black

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
  margin: 2rem 7.5rem
  border-bottom: 1.5px solid #00000010
  padding-bottom: 1.25rem

.curriculum, .portfolio
  background: none
  border: none
  outline: none
  margin: 0 .5rem
  font-size: $p_size
  font-family: $base_font
  opacity: .4
  transition: opacity .2s ease-in-out

.tab-selected
  opacity: 1
      

.curriculum
  cursor: pointer

.portfolio
  cursor: pointer

  @media screen and (max-width: 768px)
    margin: 5rem 2rem

h1
  margin-bottom: 1.3rem

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
  padding: 0

.pencil 
  position: absolute
  display: flex
  cursor: pointer
  align-items: center
  justify-content: center
  right: 1px
  top: 3.5rem
  bottom: 0
  margin: auto
  width: 30px
  height: 30px
  background-color: #fff
  border-radius: 50%

.availability
  margin: 0.75rem 0
  font-weight: $bold
  color: #18181860
  font-size: $h5_size
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
  color: $gray
  font-size: $h5_size

.user-name
  display: flex
  flex-direction: column
  max-width: 180px
  flex-wrap: wrap

.presentation
  font-size: $p_size
  line-height: 24px

.image-secondary
  border-radius: 5%
  box-shadow: 50px -20px #B6AEA7

.container-bottom
  margin-inline: 7.5rem
  display: flex
  flex-direction: row
  gap: 2rem
  justify-content: space-between

</style>
