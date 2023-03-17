<div class="container-auth">
	<div class="container-content">
		<div class="container-form">
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
	.container-auth
		box-sizing: border-box
		display: flex
		width: 100vw
		height: fit-content
		min-height: 100%
		margin-top: 5rem

		.container-content
			width: 50%
			height: fit-content
			padding: 20px 7.5rem

			@media screen and (max-width: 1024px)
				width: 100%

			@media screen and (max-width: 768px)
				padding: 20px 4rem

			@media screen and (max-width: 480px)
				padding: 20px 2rem

			.container-form
				width: 100%
				height: fit-content


		.container-pictures
			position: fixed
			width: 50%
			height: calc(100% - 5rem)
			right: 0
			padding: 20px

			@media screen and (max-width: 1024px)
				display: none

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
