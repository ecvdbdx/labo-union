<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ profile, experience } = data);
	$: ({ first_name, last_name, speciality, description, status, grade } = profile);
	$: ({ job, start_date, end_date, company, mission } = experience);
</script>

<div class="container-page">
	<div class="container-top">
		<div class="left">
			<img class="img-profile" src="https://picsum.photos/200/300" alt="profil" />
			<div class="user-name">
				<h1>{first_name} {last_name}</h1>
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
					<p>2017 {start_date}-2022 {end_date}</p>
				</div>
				<div class="name-experience">
					<p>{job}</p>
				</div>

				<div class="name-enterprise">
					<p>{company}</p>
				</div>

				<div class="location-experience">
					<p>Bordeaux, France</p>
				</div>

				<div class="actions-experience">
					<h4>Actions confiées</h4>
					<p>
						{mission}
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus dignissim dolor at lacinia.
						Suspendisse cursus mollis dolor eu mattis.
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
</style>
