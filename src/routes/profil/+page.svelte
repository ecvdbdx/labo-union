<script lang="ts">
	import type { PageData, ActionData } from './$types';
	import Profile from '$lib/components/Profile.svelte';
	// import { supabase } from '$lib/auth';

	export let data: PageData;
	export let form: ActionData;

	/*const user_id = session.data.user?.id;




	let uploading = false;
	let files: FileList;
	export let url: string;


	export const uploadAvatar = async () => {
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

			const filePath = `${user_id}-profile.${fileExt}`;
			// const finalUrl = 'https://obgvvzkqopswdaczgpxl.supabase.co/storage/v1/object/public/image-profile/' + filePath

			const { data } = await supabase.storage.from('image-profile').getPublicUrl(filePath);

			const { data: profile, error: err } = await supabase
				.from('Profile')
				.select('profile_img')
				.eq('user_id', fakeAccount_user_id)
				.maybeSingle();
			
				console.log('data', data)


			if (profile && profile.profile_img === '') {
				console.log('strong vide')
				let { error } = await supabase.storage.from('image-profile').upload(filePath, file);
				if (error) {
					throw error;
				}


				const { error: err2 } = await supabase
				.from('Profile')
				.update({
					profile_img: data.publicUrl
				})
				.eq('user_id', fakeAccount_user_id);

				if (err2) {
					throw err2
				}

			} else if (profile && profile.profile_img !== ''){
				console.log('strong pas vide')
				let { error } = await supabase.storage.from('image-profile').update(filePath, file);
				if (error) {
					throw error;
				}
				const { error: err } = await supabase
					.from('Profile')
					.update({
						profile_img: data.publicUrl
					})
					.eq('user_id', fakeAccount_user_id);
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
	*/
</script>

<Profile profile={data.profile} editable={true} {form} />
