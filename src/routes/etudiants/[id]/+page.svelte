<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ first_name, last_name, cursus, description, status } = data.profile);
</script>

<div class="container-page">
	<div class="background-container" />
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

	<div class="container-bottom" />
</div>

<style lang="sass">

.background-container
  background-image: url('/Rectangle3.png')
  top: 0
  left: 0
  width: 150px
  height: 150px
  position: fixed

.container-top
  position: absolute
  display: flex
  flex-direction: row
  width: 80%
  margin: 5rem 7.5rem
  justify-content: space-between

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

</style>
