<script lang="ts">
	import { realUploadSizeLimit, uploadSizeLimit } from '$lib/constants/files';

	export let uploading = false;
	export let type: 'avatar' | 'classic' = 'classic';

	let input: HTMLInputElement;

	export function onClick() {
		input.click();
	}

	$: imageIsTooBig = false;
	$: src = '';

	const updateImage = () => {
		if (input && input.files && input.files[0]) {
			if (input.files[0].size > realUploadSizeLimit) {
				imageIsTooBig = true;
				return;
			}

			src = URL.createObjectURL(input.files[0]);
		}
	};
</script>

{#if type === 'classic'}
	<div class="container-upload-img">
		<input
			type="file"
			accept=".jpg, .png, .jpeg, .JPEG, .webp"
			disabled={uploading}
			on:change={updateImage}
			on:input={updateImage}
			bind:this={input}
		/>
		<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M7.11111 28.8L14.2222 21.6889L33.7778 41.2444L46.2222 28.8L56.8889 39.4667V7.11111H7.11111V28.8ZM7.11111 38.8587V56.8889H18.1333L28.7502 46.2756L14.2222 31.7476L7.11111 38.8587ZM28.192 56.8889H56.8889V49.5253L46.2222 38.8587L28.192 56.8889ZM3.55556 0H60.4444C61.3874 0 62.2918 0.374602 62.9586 1.0414C63.6254 1.70819 64 2.61256 64 3.55556V60.4444C64 61.3874 63.6254 62.2918 62.9586 62.9586C62.2918 63.6254 61.3874 64 60.4444 64H3.55556C2.61256 64 1.70819 63.6254 1.0414 62.9586C0.374602 62.2918 0 61.3874 0 60.4444V3.55556C0 2.61256 0.374602 1.70819 1.0414 1.0414C1.70819 0.374602 2.61256 0 3.55556 0ZM44.4444 24.8889C43.03 24.8889 41.6734 24.327 40.6732 23.3268C39.673 22.3266 39.1111 20.97 39.1111 19.5556C39.1111 18.1411 39.673 16.7845 40.6732 15.7843C41.6734 14.7841 43.03 14.2222 44.4444 14.2222C45.8589 14.2222 47.2155 14.7841 48.2157 15.7843C49.2159 16.7845 49.7778 18.1411 49.7778 19.5556C49.7778 20.97 49.2159 22.3266 48.2157 23.3268C47.2155 24.327 45.8589 24.8889 44.4444 24.8889Z"
				fill="black"
			/>
		</svg>
		<h3>Téleversez un fichier</h3>
		<p>Formats acceptés : .png, .jpg, .xd, .mp4 Taille maximale pour chaque fichier : 100 mo</p>

		{#if imageIsTooBig}
			<p class="big-img-msg">Votre image dépasse {uploadSizeLimit} ko !</p>
		{/if}
	</div>

	<div class="preview">
		{#if src}
			<img {src} alt="" />
		{/if}
	</div>
{:else}
	<div class="container-upload-img-profil">
		<div class="container-img-profil">
			<input
				type="file"
				accept=".jpg, .png, .jpeg, .JPEG, .webp"
				disabled={uploading}
				on:change={updateImage}
				on:input={updateImage}
				bind:this={input}
			/>

			{#if src}
				<img {src} alt="" />
			{/if}
		</div>
	</div>
{/if}

<style lang="sass">
	.container-upload-img
		text-align: center
		height: 30rem
		display: flex
		justify-content: center
		align-items: center
		flex-direction: column
		border: 1px dashed #000
		border-radius: 0.5rem
		position: relative

		input
			position: absolute
			height: 100%
			width: 100%
			z-index: 999
			// TODO: Not use opacity to hide the input
			opacity: 0
			&:hover
				cursor: pointer

		h3, p
			padding: 0 4rem

		p
			max-width: 30rem

		h3
			margin-bottom: 0.5rem
			font-size: 1.5rem
			font-weight: 700

		.big-img-msg
			color: #e30815
			font-size: 0.8rem
			position: absolute
			bottom: 5rem

	svg
		margin-bottom: 1.5rem

	.container-upload-img-profil
		.container-img-profil
			overflow: hidden
			border-radius: 50%
			width: 10rem
			height: 10rem
			background-color: white
			margin: 0 auto
			position: relative

			&:hover
				cursor: pointer

			input
				width: 100%
				height: 100%
				opacity: 0

			img
				object-fit: cover
				z-index: 2
				position: absolute
				top: 0
				left: 0
				width: 10rem
				height: 10rem
				cursor: pointer

	.preview
		margin-top: 1rem
		border: 1px dashed $black
		border-radius: 0.5rem
		width: 10rem
		height: 10rem

		img
			width: 100%
			height: 100%
			object-fit: cover

</style>
