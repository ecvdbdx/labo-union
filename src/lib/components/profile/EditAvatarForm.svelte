<script lang="ts">
	import { v4 as uuidv4 } from 'uuid';
	import { invalidate } from '$app/navigation';
	import { page } from '$app/stores';

	import type { Profile } from '$lib/types/profile';
	import Icon from '$lib/components/Icon.svelte';
	import { realUploadSizeLimit, uploadSizeLimit } from '$lib/constants/files';
	import { modal } from '$lib/stores/modal';

	export let profile: Profile;
	let files: FileList;

	$: ({ user_id, profile_img } = profile);
	$: imageIsTooBig = false;
	$: uploading = false;

	async function uploadImg(userId: string, filePath: string, currentImg: string, file: File) {
		try {
			uploading = true;

			const { error } = await $page.data.supabase.storage
				.from('image-profile')
				.upload(filePath, file, { cacheControl: '0' });
			if (error) {
				return error;
			}

			const { data } = await $page.data.supabase.storage
				.from('image-profile')
				.getPublicUrl(filePath);

			const { error: err } = await $page.data.supabase
				.from('Profile')
				.update({ profile_img: data.publicUrl })
				.eq('user_id', userId);
			if (err) {
				return err;
			}

			if (currentImg !== '') {
				const { error: errorDeleteImg } = await $page.data.supabase.storage
					.from('image-profile')
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
		const filePath = `${hashProfile}-profile.${format}`;

		await uploadImg(user_id, filePath, currentImg, file);
		modal.set(null);
	}

	async function deleteImg() {
		const { error: err } = await $page.data.supabase
			.from('Profile')
			.update({ profile_img: '' })
			.eq('user_id', user_id);
		if (err) {
			return err;
		}

		await invalidate('app:profile');
		modal.set(null);
	}
</script>

<div class="profilImg">
	<div class="img-profile">
		<img src={profile_img} alt="" />
	</div>
</div>
{#if imageIsTooBig}
	<p class="big-img-msg">Votre image dépasse {uploadSizeLimit} ko !</p>
{/if}
<div class="modifyImg">
	<div class="params">
		<label class="button primary block" for="single">
			{uploading ? 'Uploading ...' : 'Modifier / Ajouter une image'}
		</label>
		<input
			style="visibility: hidden; position:absolute;"
			type="file"
			id="single"
			accept=".jpg, .png, .jpeg, .JPEG, .webp"
			bind:files
			on:change={changeImg}
			disabled={uploading}
		/>
		<Icon id="edit-2" color="black" size="1em" />
	</div>
	<button class="params" on:click={deleteImg}>
		Supprimer
		<Icon id="x" color="black" size="1em" />
	</button>
</div>

<style lang="sass">
.img-profile
  border-radius: 100%
  border: 1px solid #000 
  display: flex
  justify-content: center
  align-items: center
  position: relative
  object-fit: cover
  padding: 0
  width: auto
  height: auto
  cursor: initial 
  margin-bottom: 0.75rem

.profilImg 
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  img
    border-radius: 50%
    width: 300px
    height: 300px
    object-fit: cover

.modifyImg
  display: flex
  flex-direction: row
  align-items: center
  justify-content: space-between
  margin-top: 60px
  .params
    display: flex
    flex-direction: row
    align-items: center
    gap: 10px
    text-decoration: underline
    cursor: pointer
    border: none
    font-style: inherit
    background-color: transparent
    padding: 0
    font-family: 'Plus Jakarta Sans', sans-serif
    font-size: $p_size
    label
      cursor: pointer

.big-img-msg
  text-align: center
  margin-top: 1rem
  color: $error
  font-size: 0.8rem
</style>
