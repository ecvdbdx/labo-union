<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<div class="container">
	<section class="hero-section">
		<div class="container-images">
			<img class="picture picture__1" src="/png/home/1.png" alt="" />
			<img class="picture picture__2" src="/png/home/2.png" alt="" />
			<img class="picture picture__3" src="/png/home/3.png" alt="" />
		</div>
		<div class="container-text-intro">
			<h1>Fédérez votre avenir dès <strong>maintenant !</strong></h1>
			<p>
				Restez en contact avec vos collègues, renouez des liens avec des anciens camarades et
				créez-vous un solide réseau.
			</p>
		</div>
		<div class="container-images">
			<img class="picture picture__4" src="/png/home/4.png" alt="" />
			<img class="picture picture__5" src="/png/home/5.png" alt="" />
			<img class="picture picture__6" src="/png/home/6.png" alt="" />
		</div>
	</section>
	<section class="section-pictos">
		<div class="container-pictos">
			<div class="container-content">
				<div class="container-icon-circle-1">
					<div class="container-icon-circle-2">
						<Icon id="heart" color="#F25824" />
					</div>
				</div>
				<h3>Rester en contact</h3>
				<p>
					Union permet à chaque étudiant d’une école de garder contact avec les autres étudiants et
					entreprises.
				</p>
			</div>
			<div class="container-content">
				<div class="container-icon-circle-1">
					<div class="container-icon-circle-2">
						<Icon id="heart" color="#F25824" />
					</div>
				</div>
				<h3>Rester en contact</h3>
				<p>
					Accédez au contact des entreprises qui ont recrutés et des étudiants qui y ont travaillés,
					années après années.
				</p>
			</div>
			<div class="container-content">
				<div class="container-icon-circle-1">
					<div class="container-icon-circle-2">
						<Icon id="heart" color="#F25824" />
					</div>
				</div>
				<h3>Rendez votre profil utile aux autres</h3>
				<p>
					Grâce aux informations qui vous laissez ici, vous servez à toute une génération suivante.
				</p>
			</div>
		</div>
	</section>
	<section class="section-plateform">
		<div class="container-plateform-text">
			<span class="subtitle">Plateforme</span>
			<h2>Le trait d’union entre vous et votre avenir</h2>
			<p>
				Laissez votre empreinte et aidez les autres à réussir. Retrouvez plus tard qui vous avez
				aidés.
			</p>
		</div>
		<div class="container-part">
			<div class="container-image" />
			<div class="container-text-part">
				<div class="container-icon">
					<Icon id="zap" color="#F25824" />
				</div>
				<h3>Personnalisez votre profil</h3>
				<p>
					Complétez votre profil pour qu’il soit plus attractif pour vous et pour les autres :
					expériences, compétences, lien utiles ...
				</p>
				<Button light>
					<a href="/connexion">Se connecter</a>
				</Button>
			</div>
		</div>
		<div class="container-part">
			<div class="container-text-part">
				<div class="container-icon">
					<Icon id="mail" color="#F25824" />
				</div>
				<h3>Retrouvez tous les profils étudiants avec leurs expériences et leurs contacts</h3>
				<p>
					Accédez sur chaque profil étudiant aux stages et alternances réalisées, aux contacts
					d’entreprise et liens utiles.
				</p>
			</div>
			<div class="container-image" />
		</div>
		<div class="container-part">
			<div class="container-image" />
			<div class="container-text-part">
				<div class="container-icon">
					<Icon id="zap" color="#F25824" />
				</div>
				<h3>Trouvez des offres d’emploi facilement et bien plus encore</h3>
				<p>
					Retrouvez des offres d’emploi liées à votre secteur d’activité. Postulez en candidature
					spontanée grâce à tous les autres contacts d’entreprise enregistrées
				</p>
				<Button light>
					<a href="/connexion">Se connecter</a>
				</Button>
			</div>
		</div>
	</section>
	<section class="section-go-to-login">
		<div class="go-to-login-text">
			<div class="container-icon">
				<Icon id="zap" color="#F25824" />
			</div>
			<h3>Vous souhaitez rejoindre la communauté ?</h3>
			<p>Inscrivez-vous dès maintenant</p>
			<Button type="rounded" light>
				<a href="/connexion">Se connecter</a>
			</Button>
		</div>
	</section>
</div>

<style lang="sass">
	.container
		width: 100%
		height: fit-content
		margin-top: 5rem

		section
			width: 100%

		.hero-section
			height: 100vh
			min-height: 100vh
			display: flex
			align-items: center

			.container-text-intro
				width: 100%
				height: fit-content
				text-align: center
				margin: 0 10%

				@media screen and (max-width: 768px)
					margin: 0

				h1
					margin-bottom: 1.5rem
					font-size: 4rem
					line-height: 4rem

					@media screen and (max-width: 768px)
						font-size: 3rem
						line-height: 3rem

					strong
						width: 100%
						height: 100%
						position: relative

						&::after
							content: ''
							position: absolute
							bottom: 0.5rem
							left: 0
							width: 100%
							height: 1.5rem
							background-color: $primary
							border-radius: 1.25rem
							mix-blend-mode: darken
							z-index: -1
							opacity: 0.35

							@media screen and (max-width: 768px)
								height: 1rem

				p
					padding: 0 4rem

					@media screen and (max-width: 768px)
						padding: 0 2rem

			.container-images
				width: 40%
				height: 100%
				position: relative

				img.picture
					position: absolute
					object-fit: cover

					&__1
						left: 55%
						top: 8%

					&__4
						right: 55%
						top: 8%

					&__2
						left: 0%
						top: 40%

					&__5
						right: 0%
						top: 40%

					&__3
						left: 85%
						top: 60%

					&__6
						right: 85%
						top: 60%

				@media screen and (max-width: 1024px)
					display: none
		
		.section-pictos
			width: 100%
			height: fit-content
			padding: 10rem 0

			.container-pictos
				width: 90%
				height: fit-content
				background-color: $white
				border-radius: 1.25rem
				display: flex
				padding: 4.3rem 5rem
				margin: auto
				gap: 3.75rem
				box-shadow: 0px 7px 15px rgba(97, 19, 0, 0.1)

			.container-content
				width: 30%
				height: fit-content
				text-align: center

				.container-icon-circle-1
					background-color: $primary-100
					width: 3rem
					height: 3rem
					border-radius: 50%
					display: flex
					align-items: center
					justify-content: center
					margin: 0 auto 1.25rem auto
				
					.container-icon-circle-2
						background-color: $primary-200
						width: 2rem
						height: 2rem
						border-radius: 50%
						display: flex
						align-items: center
						justify-content: center

				h3
					margin-bottom: 0.5rem

		.section-plateform
			.container-plateform-text
				width: 50%
				height: fit-content
				text-align: center
				padding: 5rem 0
				margin: 0 auto 11.25rem auto

				@media screen and (max-width: 1024px)
					width: 100%

				h2
					margin-bottom: 1.5rem
					font-size: 3.75rem
					font-weight: 700

				p
					padding: 0 8rem

				@media screen and (max-width: 1024px)
					padding: 0 2rem

			.container-part
				width: 100%
				height: 50vh
				display: flex
				gap: 4rem
				margin-bottom: 6.25rem

				.container-image
					width: 50%
					height: 100%
					background-color: $black

				.container-text-part:nth-child(1)
					padding-left: 7.5rem

				.container-text-part:nth-child(2)
					padding-right: 7.5rem

				.container-text-part
					width: 50%
					height: fit-content
					margin: auto

					h3
						margin-bottom: 1rem
						font-weight: 700

					p 
						margin-bottom: 2rem

					a
						text-decoration: none
						color: $primary

		.section-go-to-login
			width: 100%
			height: fit-content
			text-align: center
			margin-bottom: 2.5rem
			padding: 5rem 0

			.go-to-login-text
				width: 100%
				height: fit-content
				margin: auto

				.container-icon
					margin: 0 auto 1rem auto

				h3
					margin-bottom: 1rem
					font-weight: 700
					font-size: 2.5rem
					line-height: 2.5rem

				p
					margin-bottom: 1.5rem

				a
					text-decoration: none
					color: $primary

		.subtitle
			text-transform: uppercase
			color: $primary
			font-size: 0.8rem
			font-weight: 700
			width: fit-content
			height: fit-content
			margin-bottom: 1rem
		
		.container-icon
			width: 3rem
			height: 3rem
			border-radius: 50%
			background-color: $primary-200
			display: flex
			align-items: center
			justify-content: center
			margin-bottom: 1.5rem
</style>
