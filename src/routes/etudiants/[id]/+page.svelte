<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ first_name, last_name, cursus, description, status } = data.profile);
</script>

<div class="container-page">
	<!-- <div class="background-container" /> -->
	<div class="container-top">
		<div class="left">
			<img class="img-profile" src="https://picsum.photos/200/300" alt="profil" />
			<div class="user-name">
				<h1>{first_name} {last_name}</h1>
			</div>
			<div class="available">
				{status ? 'Je suis disponible' : 'Je suis pas disponible'}
				<div class={status ? 'isavailable' : 'notavailable'} />
			</div>
			<div class="cursus">
				{cursus}
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
			<h2 class="degree-container-title">Expériences Professionnelles</h2>
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
		<div class="degree-container">
			<h2 class="degree-container-title">Formations</h2>

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

.available
  margin: 0.75rem 0
  font-weight: 600
  color: #18181860
  font-size: 1.125rem
  display: flex

.notavailable
  background-color: red 
  width: 10px
  height: 10px
  border-radius: 50%
  margin-left: 0.313rem

.isavailable
  background-color: green 
  width: 10px
  height: 10px
  border-radius: 50%
  margin-left: 0.313rem

.cursus
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
  display: flex
  flex-direction: row
  justify-content: space-around

.professional-container
  background-color: #FFFCFA
  border-radius: 30px
  padding: 16px 24px

.degree-container-title
  color: #F37144

.degree-container
  background-color: #FFFCFA
  border-radius: 30px
  padding: 16px 24px

.name-enterprise
  color: #F25824
  text-decoration: underline

.location-experience
  color: #18181860

.actions-experience
  color: #18181860

.location-degree
  color: #18181860 

.name-degree
  color: #18181860

</style>
