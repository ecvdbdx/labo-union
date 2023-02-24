<script lang="ts">
	export let data: any;
</script>

<ul class="TrainingList">
	{#each data as training}
		<li class="block-degree">
			<p class="duration-degree">
				<span>{training.start_date?.split('-')[0] ?? "Aujourd'hui"} - </span>
				<span>{training.end_date?.split('-')[0] ?? "Aujourd'hui"}</span>
			</p>
			<div class="infos">
				{#if training.school}
					<p class="name-school">{training.school}</p>
				{/if}
				{#if training.location}
					<p class="location-degree">{training.location}</p>
				{/if}
				{#if training.diploma}
					<p class="name-degree">{training.diploma}</p>
				{/if}
			</div>
		</li>
	{/each}
</ul>

<style lang="sass">
  ul.TrainingList
    display: flex
    flex-direction: column
    gap: 2em
    width: 100%
    margin-top: 60px

    li.block-degree
      display: flex
      gap: 2rem

      .duration-degree
        display: flex
        flex-direction: column
        max-width: 90px
        width: 100%
        color: $gray
        font-weight: 600

      .infos
        .name-school
          font-weight: 600

        .location-degree
            color: $gray

        .name-degree
            color: $gray

</style>
