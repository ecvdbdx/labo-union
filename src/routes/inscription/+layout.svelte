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

<div class="container-registration">
	<div class="container-content">
		<div class="container-form">
			<img alt="" src="/svg/logo.svg" />
			<div class="container-progress">
				{#each steps as step}
					<div class="step {step.id === data.step ? 'active-step' : ''}" />
				{/each}
			</div>
			<slot />
		</div>
	</div>
	<div class="container-pictures">
		<div class="container-content-pictures">
			<img alt="" class="svg-background" src="/svg/background.svg" />
			<img alt="" class="picture picture-1" src="/png/placeholder_1.png" />
			<img alt="" class="picture picture-2" src="/png/placeholder_2.png" />
			<img alt="" class="picture picture-3" src="/png/placeholder_3.png" />
		</div>
	</div>
</div>

<style lang="sass">
	.container-registration
		box-sizing: border-box
		display: flex
		width: 100vw
		height: fit-content
		min-height: 100%

		.container-content
			width: 50%
			min-height: 100vh
			height: fit-content
			padding: 20px 7.5rem

			.container-form
				width: 100%
				height: fit-content

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


		.container-pictures
			position: fixed
			width: 50%
			height: 100%
			right: 0
			padding: 20px

			.container-content-pictures
				width: 100%
				height: 100%
				position: relative
				top: 0
				left: 0
				right: 0
				bottom: 0
				background-color: $primary
				border-radius: 20px

				.svg-background
					width: 100%
					height: 100%
					object-fit: cover
					position: absolute
					top: 0
					left: 0
					bottom: 0
					right: 0
					padding: 20px

				.picture
					width: 9.6rem
					height: 11.6rem
					border-radius: 22px
					position: absolute
					background-color: palegoldenrod
					object-fit: cover

				.picture-1
					left: 25%
					top: 18%

				.picture-2
					left: 60%
					top: 35%

				.picture-3
					left: 20%
					top: 60%
</style>
