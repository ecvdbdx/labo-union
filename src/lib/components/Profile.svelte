<script lang="ts">
	import type { Profile } from '$lib/types/profile';

	import Icon from '$lib/components/Icon.svelte';
	import Curriculum from './Curriculum.svelte';
	import Portfolio from './Portfolio.svelte';

	export let profile: Profile;
	export let openEditModal: null | (() => void) = null;
	export let openAvatarModal: null | (() => void) = null;

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
		<div
			class="curriculum"
			on:click={() => (isCurriculum = true)}
			on:keydown={() => (isCurriculum = true)}
			class:tab-selected={isCurriculum === true}
		>
			Curriculum
		</div>
		<div
			class="portfolio"
			on:click={() => (isCurriculum = false)}
			on:keydown={() => (isCurriculum = false)}
			class:tab-selected={isCurriculum === false}
		>
			Portfolio
		</div>
	</div>

	<div class="container-bottom">
		{#if isCurriculum}
			<Curriculum {profile} {editable} />
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
  div
    color: #1818184D

.tab-selected
  color: #181818!important

.curriculum
  padding-right: 1.5rem
  cursor: pointer

.portfolio
  cursor: pointer

  @media screen and (max-width: 768px)
    margin: 5rem 2rem

h1
  margin-bottom: 1.3rem

h2
  margin-bottom: 3rem
  color: $primary-300

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

.img-modal 
  width: auto
  height: auto
  cursor: initial
  margin-bottom: 0.75rem

.availability
  margin: 0.75rem 0
  font-weight: 600
  color: #18181860
  font-size: 1.25rem
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
  font-size: 1.25rem

.user-name
  display: flex
  flex-direction: column
  max-width: 180px
  flex-wrap: wrap

.presentation
  font-size: 1rem
  line-height: 24px

.image-secondary
  border-radius: 5%
  box-shadow: 50px -20px #B6AEA7

.container-bottom
 margin-inline: 7.5rem
 display: flex
 flex-direction: row
 gap: 2rem
  //flex-wrap: wrap
 justify-content: space-between

.location-degree
  color: #18181860

  @media screen and (max-width: 768px)
    margin: 7.5rem 2rem

.professional-container
  max-width: 40vw
  background-color: #FFFCFA
  border-radius: 30px
  padding: 2.6rem 1.5rem
  margin-bottom: 15px

  @media screen and (max-width: 1024px)
    margin-left: auto
    margin-right: auto
    max-width: 100%
    width: 100%

.degree-container
  max-width: 40vw
  background-color: #FFFCFA
  border-radius: 30px
  padding: 2.6rem 1.5rem
  margin-bottom: 15px

  @media screen and (max-width: 1024px)
    margin-left: auto
    margin-right: auto
    max-width: 100%
    width: 100%

  @media screen and (max-width: 768px)

.name-enterprise
  text-decoration: underline
  grid-column: 2
  color: $primary

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

    div
      color: #1818184D

  .tab-selected
    color: #181818 !important

  .curriculum
    padding-right: 1.5rem
    cursor: pointer

  .portfolio
    cursor: pointer

    @media screen and (max-width: 768px)
      margin: 5rem 2rem

  h1
    margin-bottom: 1.3rem

  h2
    margin-bottom: 3rem
    color: $primary-300

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
    padding: 5px

  .img-modal
    width: auto
    height: auto
    cursor: initial
    margin-bottom: 0.75rem

  .availability
    margin: 0.75rem 0
    font-weight: 600
    color: #18181860
    font-size: 1.25rem
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
    font-size: 1.25rem

  .user-name
    display: flex
    flex-direction: column
    max-width: 180px
    flex-wrap: wrap

  .presentation
    font-size: 1rem
    line-height: 24px

  .image-secondary
    border-radius: 5%
    box-shadow: 50px -20px #B6AEA7

  .container-bottom
    margin-inline: 7.5rem
    display: flex
    flex-direction: row
    gap: 2rem
    //flex-wrap: wrap
    justify-content: space-between

  .location-degree
    color: #18181860

    @media screen and (max-width: 768px)
      margin: 7.5rem 2rem

  .professional-container
    max-width: 40vw
    background-color: #FFFCFA
    border-radius: 30px
    padding: 2.6rem 1.5rem
    margin-bottom: 15px

    @media screen and (max-width: 1024px)
      margin-left: auto
      margin-right: auto
      max-width: 100%
      width: 100%

  .degree-container
    max-width: 40vw
    background-color: #FFFCFA
    border-radius: 30px
    padding: 2.6rem 1.5rem
    margin-bottom: 15px

    @media screen and (max-width: 1024px)
      margin-left: auto
      margin-right: auto
      max-width: 100%
      width: 100%

    @media screen and (max-width: 768px)

  .name-enterprise
    text-decoration: underline
    grid-column: 2
    color: $primary

    p
      color: $primary

  .location-experience
    color: #18181860
    grid-column: 2

  .actions-experience
    color: $black
    grid-column: 2

    h4
      font-weight: 600
      margin-bottom: 0.5rem

  .location-degree
    color: #18181860

  .name-degree
    color: #18181860

  .block-experience
    display: grid
    grid-template-columns: repeat(1fr, 2fr)
    grid-gap: 0.75rem 2rem


  .duration-experience
    grid-column: 1

    p
      color: $black
      opacity: 1
      font-weight: 600

  .name-experience
    grid-column: 2

  .block-degree
    display: grid
    grid-template-columns: repeat(1fr, 2fr)
    grid-gap: 0.75rem 2rem

  .duration-degree
    grid-column: 1

    p
      color: $black
      opacity: 1
      font-weight: 600

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
    cursor: pointer
    margin-bottom: 1.3rem

    &:hover
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

  .big-img-msg
    text-align: center
    margin-top: 1rem
    font-size: 0.8rem

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
