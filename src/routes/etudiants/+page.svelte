<script lang="ts">
	import type { PageData } from './$types';

	import Card from '$lib/components/Card.svelte';
	import Filter from './Filter.svelte';
	import Tooltip from '$lib/components/Tooltip.svelte';
	import Search from '$lib/components/Search.svelte';

	export let data: PageData;

	// TODO: Update this variables when data from database is available
	const disponibilityIsVisible = true;

	let search = '';
	let grade: string | null;
	let speciality: string | null;

	$: filteredProfiles = data.profiles;

	async function searchProfiles() {
		const { data: profiles, error: err } = await data.supabase.rpc('filterandsearchprofile', {
			search,
			grade: grade || undefined,
			speciality: speciality || undefined,
		});

		if (err) {
			console.error(err);
		}

		filteredProfiles = profiles || [];
	}

	function updateSpecialty(e: Event) {
		const target = e.target as HTMLSelectElement;
		speciality = target?.value;
		searchProfiles();
	}

	function updateGrade(e: Event) {
		const target = e.target as HTMLSelectElement;
		grade = target?.value;
		searchProfiles();
	}
</script>

<div class="container main-container">
	<h2>L'annuaire</h2>
	<div class="container-search-bar">
		<Search rounded={true} name="profile" bind:search on:click={searchProfiles} />
	</div>
	<div class="container-filters">
		<Filter label="Cursus" options={data.speciality} on:change={updateSpecialty} />
		<Filter label="Classe" options={data.grade} on:change={updateGrade} />
	</div>
	{#if filteredProfiles?.length > 0}
		<ul class="grid-container">
			{#each filteredProfiles as { last_name, first_name, id, grade, speciality, status, profile_img }}
				<li class="list">
					<a data-sveltekit-preload-data="hover" href="/etudiants/{id}">
						<Card>
							<div class="picture-student">
								{#if profile_img}
									<img src={profile_img} alt={`picture-${first_name}`} />
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
								<div class="tag student-tag">
									<span>{speciality}</span>
								</div>
								{#if disponibilityIsVisible}
									<div class="tag student-disponibility" class:is-available={status}>
										<span>{status ? 'Disponible' : 'Indisponible'}</span>
									</div>
								{/if}
							</div>
						</Card>
					</a>
				</li>
			{/each}
		</ul>
	{:else}
		<Tooltip message="Aucun profile ne correspondent à votre recherche" />
	{/if}
</div>

<style lang="sass">
.main-container
	margin-top: 8rem
	margin-bottom: 4rem

	@media screen and (max-width: 768px)
		width: 90vw

	h2
		margin-bottom: 2rem	

	.container-search-bar
		width: 55%

		@media screen and (max-width: 1024px)
			width: 100%  	

	.container-filters
		width: 100%
		display: flex
		margin-bottom: 2rem

	ul.grid-container
		padding: 0
		display: grid
		grid-gap: 2rem
		grid-template-columns: repeat(auto-fill, 17rem)
	
		li
			position: relative
			list-style: none
			height: auto
			width: fit-content

			a
				text-decoration: none
				width: fit-content
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
					font-weight: 400
					color: $black

				.container-tags
					position: absolute
					width: 45%
					top: 50%
					right: 0

					.tag
						height: 1.5rem
						border-radius: 1.5rem 0 0 1.5rem			
						background-color: $disabled

					&:first-child
						margin-bottom: 0.3rem

					.student-tag
						background-color: $primary

					.is-available
						background-color: $success

					.student-disponibility
						margin-top: 0.5rem
  
					span
						display: block
						font-size: 0.8rem
						color: $white
						margin: 0
						padding: 0.28rem 1.25rem 0 1.25rem
						height: fit-content
						width: 100%
						text-overflow: ellipsis
						overflow: hidden
						white-space: nowrap
</style>
