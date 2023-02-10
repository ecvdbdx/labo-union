<script lang="ts">
	export let data: any;
</script>

<ul class="ExperienceList">
	{#each data as experience}
		<li class="block-experience">
			<p class="duration-experience">
				<span>{experience.start_date?.split('-')[0] ?? "Aujourd'hui"} - </span>
				<span>{experience.end_date?.split('-')[0] ?? "Aujourd'hui"}</span>
			</p>
			<div class="infos">
				<p class="name-experience">{experience.job}</p>
				<p class="name-enterprise">{experience.company}</p>
				<p class="location-experience">Bordeaux, France</p>
				<div class="actions-experience">
					<span>Actions confiées :</span>
					<p>
						{experience.mission}
					</p>
				</div>
			</div>
		</li>
	{/each}
</ul>

<style lang="sass">
  ul.ExperienceList
    display: flex
    flex-direction: column
    gap: 2em
    width: 100%

    li.block-experience
      display: flex
      gap: 2rem

      .duration-experience
        display: flex
        flex-direction: column
        max-width: 90px
        width: 100%
        color: $gray
        font-weight: 600

      .infos
        .name-experience
          font-weight: 600

        .name-enterprise
          color: $primary
          text-decoration: underline
          font-weight: 600

        .location-experience
          display: none

        .actions-experience
          span
            font-weight: 600

          p
            color: $gray

</style>
