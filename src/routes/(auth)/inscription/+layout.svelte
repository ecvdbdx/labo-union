<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	const steps = [
		{
			id: 1,
			active: false,
		},
		{
			id: 2,
			active: false,
		},
		{
			id: 3,
			active: false,
		},
	];
</script>

<div class="container-progress">
	{#each steps as step}
		<div class="step {step.id === data.step ? 'active-step' : ''}" />
	{/each}
</div>
<slot />

<style lang="sass">

.container-progress
  width: 100%
  height: fit-content
  display: flex
  margin-top: 3rem

  .step
    width: 100%
    height: 5px
    background-color: $primary
    margin-right: 10px
    border-radius: 20px
    opacity: 0.2

    &:last-child
      margin-right: 0

  .active-step
    opacity: 1
</style>
