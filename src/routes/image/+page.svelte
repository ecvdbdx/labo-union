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

	const downloadImage = async (path: string) => {
		try {
			const { data, error } = await supabase.storage.from('image-profile').download(path);

			if (error) {
				throw error;
			}

			const url = URL.createObjectURL(data);
			avatarUrl = url;
		} catch (error) {
			if (error instanceof Error) {
				//console.log('Error downloading image: ', error.message)
			}
		}
	};

	const uploadAvatar = async () => {
		try {
			uploading = true;

			if (!files || files.length === 0) {
				throw new Error('You must select an image to upload.');
			}

			const file = files[0];
			const test = file.name.split('.').pop();
			let fileExt = '';
			if (test === 'png') {
				fileExt = test;
			} else {
				//console.log('coucou erreur');
				throw new Error('You must select an image with png format.');
			}

			const filePath = `${fakeAccount_user_id}-profile.${fileExt}`;

			const { data } = await supabase.storage.from('image-profile').list();
			// console.log('getFiles', data)

			if (data && data.length > 1) {
				data.forEach(async (image) => {
					//console.log('image.name', image.name)
					//console.log('filePath', filePath)
					if (image.name === filePath) {
						let { error } = await supabase.storage.from('image-profile').update(filePath, file);
						if (error) {
							throw error;
						}
					} else {
						let { error } = await supabase.storage.from('image-profile').upload(filePath, file);
						if (error) {
							throw error;
						}
					}
				});
			} else {
				let { error } = await supabase.storage.from('image-profile').upload(filePath, file);
				if (error) {
					throw error;
				}
			}

			url = filePath;
			//console.log(url)
			//let finalUrl = 'https://obgvvzkqopswdaczgpxl.supabase.co/storage/v1/object/public/image-profile/' + filePath
			dispatch('upload');
		} catch (error) {
			if (error instanceof Error) {
				//alert(error.message)
			}
		} finally {
			uploading = false;
		}
	};

	$: if (url) downloadImage(url);
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
		<div class="avatar no-image" style="height: {size}em; width: {size}em;" />
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

	<!-- <img src={finalUrl} alt={avatarUrl ? 'Avatar' : 'No image'} class="avatar image"
  style="height: {size}em; width: {size}em;" /> -->
</div>
