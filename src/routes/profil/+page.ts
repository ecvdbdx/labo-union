import { error } from '@sveltejs/kit';

import type { PageLoad } from './$types';
import getProfile from '$lib/utils/getProfile';

export const load: PageLoad = async ({ parent, depends }) => {
	const { session } = await parent();
	const userId = session?.user.id;

	depends('app:profile');

	if (!userId) {
		throw error(401, {
			code: 401,
			message: 'Vous devez être connecté•e pour accéder à cette page',
		});
	}

	const data = await getProfile(userId);

	return {
		profile: data,
	};
};
