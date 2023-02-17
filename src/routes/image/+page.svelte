<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { supabase } from '$lib/auth';
	import { fakeAccount_user_id } from '$lib/constants';

	export let size = 15;
	export let url: string;

	let avatarUrl: string | null = null;
	let uploading = false;
	let files: FileList;

	const dispatch = createEventDispatcher();

	// const downloadImage = async (path: string) => {
	// 	try {
	// 		const { data, error } = await supabase.storage.from('image-profile').download(path);
	// 		console.log('path', path)

	// 		if (error) {
	// 			throw error;
	// 		}

	// 		const url = URL.createObjectURL(data);
	// 		const finalUrl = 'https://obgvvzkqopswdaczgpxl.supabase.co/storage/v1/object/public/image-profile/' + path
	// 		// avatarUrl = url;
	// 		avatarUrl = finalUrl;
	// 	} catch (error) {
	// 		if (error instanceof Error) {
	// 			//console.log('Error downloading image: ', error.message)
	// 		}
	// 	}
	// };

	const uploadAvatar = async () => {
		try {
			uploading = true;

			if (!files || files.length === 0) {
				throw new Error('You must select an image to upload.');
			}

			const file = files[0];
			const format = file.name.split('.').pop();
			let fileExt = '';
			if (format === 'png') {
				fileExt = format;
			} else {
				throw new Error('You must select an image with png format.');
			}

			const filePath = `${fakeAccount_user_id}-profile.${fileExt}`;
			// const finalUrl = 'https://obgvvzkqopswdaczgpxl.supabase.co/storage/v1/object/public/image-profile/' + filePath

			const { data } = await supabase.storage.from('image-profile').getPublicUrl(filePath);

			const { data: profile, error: err } = await supabase
				.from('Profile')
				.select('profile_img')
				.eq('user_id', fakeAccount_user_id)
				.maybeSingle();

			if (err) {
				throw err;
			}

			if (profile && profile.profile_img === '') {
				let { error } = await supabase.storage.from('image-profile').upload(filePath, file);
				if (error) {
					throw error;
				}

				const { error: err2 } = await supabase
					.from('Profile')
					.update({
						profile_img: data.publicUrl,
					})
					.eq('user_id', fakeAccount_user_id);

				if (err2) {
					throw err2;
				}
			} else if (profile && profile.profile_img !== '') {
				let { error } = await supabase.storage.from('image-profile').update(filePath, file);
				if (error) {
					throw error;
				}
				const { error: err } = await supabase
					.from('Profile')
					.update({
						profile_img: data.publicUrl,
					})
					.eq('user_id', fakeAccount_user_id);

				if (err) {
					throw err;
				}
			}

			url = filePath;

			dispatch('upload');
		} catch (error) {
			if (error instanceof Error) {
				//alert(error.message)
			}
		} finally {
			uploading = false;
		}
	};
	// $: if (url) downloadImage(url);
</script>

<div>
	{#if avatarUrl}
		<img
			src={avatarUrl}
			alt={avatarUrl ? 'Avatar' : 'No image'}
			class="avatar image"
			style="height: {size}em; width: {size}em;"
		/>
	{:else}
		<div class="avatar no-image" style="height: {size}em; width: {size}em;">Pas d'image</div>
	{/if}

	<div style="width: {size}em;">
		<label class="button primary block" for="single">
			{uploading ? 'Uploading ...' : 'Upload image'}
		</label>
		<input
			style="visibility: hidden; position:absolute;"
			type="file"
			id="single"
			accept="image/*"
			bind:files
			on:change={uploadAvatar}
			disabled={uploading}
		/>
	</div>
</div>
