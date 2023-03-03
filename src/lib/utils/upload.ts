import { supabase } from '$lib/auth';
import type { Profile } from '$lib/types/profile';
import { v4 as uuidv4 } from 'uuid';

export const size = 15;
export let url: string;

export let uploading = false;

export const uploadImg = async (files: FileList, profile: Profile, userId: string) => {
	try {
		uploading = true;

		const currentImg = profile.profile_img.split('image-profile/');

		if (!files || files.length === 0) {
			throw new Error('You must select an image to upload.');
		}

		const file = files[0];
		const format = file.name.split('.').pop();

		const hashProfile = uuidv4();

		const filePath = `${hashProfile}-profile.${format}`;

		const { error } = await supabase.storage
			.from('image-profile')
			.upload(filePath, file, { cacheControl: '0' });
		if (error) {
			throw error;
		}

		const { data } = await supabase.storage.from('image-profile').getPublicUrl(filePath);

		const { error: err } = await supabase
			.from('Profile')
			.update({ profile_img: data.publicUrl })
			.eq('user_id', userId);
		if (err) {
			throw err;
		}

		if (currentImg !== '') {
			const { error: errorDeleteImg } = await supabase.storage
				.from('image-profile')
				.remove([currentImg[1]]);

			if (errorDeleteImg) {
				throw errorDeleteImg;
			}
		}

		url = filePath;
	} catch (error) {
		if (error instanceof Error) {
			// alert(error.message)
		}
	} finally {
		uploading = false;
	}
};
