<script lang="ts">
	import { v4 as uuidv4 } from 'uuid';

	import type { Profile } from '$lib/types/profile';
	import { realUploadSizeLimit, uploadSizeLimit } from '$lib/constants/files';
	import { invalidate } from '$app/navigation';
	import { page } from '$app/stores';

	export let profile: Profile;
	export let storage: string;
	export let table: string;
	export let field: string;

	$: ({ user_id, profile_img } = profile);
	$: imageIsTooBig = false;
	$: uploading = false;
	let files: FileList;

	async function uploadImg(userId: string, filePath: string, currentImg: string, file: File) {
		try {
			uploading = true;

			const { error } = await $page.data.supabase.storage
				.from(storage)
				.upload(filePath, file, { cacheControl: '0' });
			if (error) {
				return error;
			}

			const { data } = await $page.data.supabase.storage.from(storage).getPublicUrl(filePath);
			const payload: Record<string, string> = {};
			payload[field] = data.publicUrl;

			const { error: err } = await $page.data.supabase
				.from(table)
				.update(payload)
				.eq('user_id', userId);
			if (err) {
				return err;
			}

			if (currentImg !== '') {
				const { error: errorDeleteImg } = await $page.data.supabase.storage
					.from(storage)
					.remove([currentImg[1]]);

				if (errorDeleteImg) {
					return errorDeleteImg;
				}
			}

			invalidate('app:profile');
		} finally {
			uploading = false;
		}
	}

	async function changeImg() {
		if (!user_id) {
			return;
		}

		const currentImg = profile_img ? profile_img.split('image-profile/')[1] : '';

		if (!files || files.length === 0) {
			throw new Error('You must select an image to upload.');
		}

		const file = files[0];

		if (file.size > realUploadSizeLimit) {
			imageIsTooBig = true;
			return;
		}

		imageIsTooBig = false;
		const format = file.name.split('.').pop();
		const hashProfile = uuidv4();

		profile.profile_img = URL.createObjectURL(file);
		const filePath = `${hashProfile}-${table.toLowerCase()}.${format}`;

		await uploadImg(user_id, filePath, currentImg, file);
	}
</script>

<div class="container-upload-img">
	<input
		type="file"
		accept=".jpg, .png, .jpeg, .JPEG, .webp"
		bind:files
		on:change={changeImg}
		disabled={uploading}
	/>
	<h3>Téleversez un fichier</h3>
	<p>Formats acceptés : .png, .jpg, .xd, .mp4 Taille maximale pour chaque fichier : 100 mo</p>
	{#if imageIsTooBig}
		<p class="big-img-msg">Votre image dépasse {uploadSizeLimit} ko !</p>
	{/if}
</div>

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

		.container-header
			width: 100%
			height: 100%

		h3, p
			padding: 0 4rem

		h3
			margin-bottom: 0.5rem
			font-size: 1.5rem
			font-weight: 700

		.big-img-msg
			color: #e30815
			font-size: 0.8rem
			position: absolute
			bottom: 5rem
</style>
