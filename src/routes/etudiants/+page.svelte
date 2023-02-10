<script lang="ts">
	import type { PageData } from './$types';
	import Card from '$lib/components/Card.svelte';

	export let data: PageData;

	// TODO: Update this variable when data from database is available
	const disponibilityIsVisible = true;
	const disponibility = false;
	const profilPictureUrl = undefined;
</script>

<div class="main-container">
	<ul class="grid-container">
		{#if data.profiles}
			{#each data.profiles as { last_name, first_name, user_id, grade, speciality }}
				<li class="list">
					<a data-sveltekit-preload-data="hover" href="/etudiants/{user_id}">
						<Card>
							<div class="picture-student">
								{#if profilPictureUrl}
									<img src={profilPictureUrl} alt={`picture-${first_name}`} />
								{:else}
									<img class="no-picture" src="/svg/no-picture.svg" alt="" />
								{/if}
							</div>
							<div class="container-student">
								{first_name}
								{last_name}
							</div>
							<div class="container-cursus">
								{grade}
								{speciality}
							</div>
							<div class="undefined">Alternance</div>
							<div class="container-tags">
								<div class="tag student-tag" style="background-color: #f25824">
									<span>{speciality}</span>
								</div>
								{#if disponibilityIsVisible}
									<div
										class="tag student-disponibility"
										style={`background-color: ${disponibility ? '#3ccf4e' : '#d6d6d6'}`}
									>
										<span>{disponibility ? 'Disponible' : 'Indisponible'}</span>
									</div>
								{/if}
							</div>
						</Card>
					</a>
				</li>
			{/each}
		{/if}
	</ul>
</div>

<style lang="sass">
.main-container

  ul.grid-container
    padding: 0
    display: grid
    grid-gap: 2rem
    grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr))
	
    li
      position: relative
      list-style: none
      height: auto
      margin: auto

      a
        text-decoration: none
        width: 100%
        display: block
        height: 100%

        .picture-student
          width: 100%
          height: 70%
          margin: 0 auto
          border-radius: 0.5rem
          background-color: $tertiary
          margin-bottom: 1.5rem
          box-sizing: border-box
          display: flex
          justify-content: center
          box-sizing: border-box
          align-items: center

          img
            width: 100%
            height: 100%
            object-fit: cover

          .no-picture
            opacity: 0.3
            width: 30%
            height: auto

        .container-student
          height: fit-content
          font-size: 1rem
          color: black
          width: 100%
          margin-bottom: 0.6rem
        
        .container-cursus
          color: $gray
          margin-bottom: 0.6rem

        .undefined
          font-size: 1rem
          font-weight: $font-400
          color: $black

        .container-tags
          position: absolute
          width: 45%
          top: 50%
          right: 0

          .tag
            height: 1.5rem
            border-radius: 1.5rem 0 0 1.5rem

            &:first-child
              margin-bottom: 0.3rem
  
            span
              display: block
              font-size: 0.8rem
              color: $white
              margin: 0
              padding: 0.1rem 1.25rem 0 1.25rem
              height: 100%
              width: 100%
              text-overflow: ellipsis
              overflow: hidden
              white-space: nowrap
</style>
