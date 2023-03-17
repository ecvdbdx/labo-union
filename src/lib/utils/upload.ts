import { supabase } from '$lib/auth';
import { invalidate } from '$app/navigation';

export const size = 15;
export let url: string;

export let uploading = false;

export const uploadImg = async (
	userId: string,
	filePath: string,
	currentImg: string,
	file: File,
) => {
	try {
		uploading = true;

		const { error } = await supabase.storage
			.from('image-profile')
			.upload(filePath, file, { cacheControl: '0' });
		if (error) {
			return error;
		}

		const { data } = await supabase.storage.from('image-profile').getPublicUrl(filePath);

		const { error: err } = await supabase
			.from('Profile')
			.update({ profile_img: data.publicUrl })
			.eq('user_id', userId);
		if (err) {
			return err;
		}

		if (currentImg !== '') {
			const { error: errorDeleteImg } = await supabase.storage
				.from('image-profile')
				.remove([currentImg[1]]);

			if (errorDeleteImg) {
				return errorDeleteImg;
			}
		}

		url = filePath;

		invalidate('app:profile');
	} catch (error) {
		if (error instanceof Error) {
			// alert(error.message)
		}
	} finally {
		uploading = false;
	}
};
