/** @type {import('./$types').Actions} */
import { fakeAccount_user_id } from '$lib/constants';
import { supabase } from '$lib/auth';
import { error } from '@sveltejs/kit';

import { redirect } from '@sveltejs/kit';

interface Props {
	request: any;
}

export const actions = {
	default: async ({ request }: Props) => {
		const formData = await request.formData();
		const first_name = formData.get('Prénom');
		const last_name = formData.get('Nom');
		const cursus = formData.get('Cursus');
		const description = formData.get('Description');

		//TODO When auth will be enable, we have to change Profile RLS policies to change true with : auth.email() = user.mail

		const { error: err } = await supabase
			.from('Profile')
			.update({
				first_name: first_name,
				last_name: last_name,
				cursus: cursus,
				description: description,
			})
			.eq('user_id', fakeAccount_user_id);

		if (err) {
			throw error(500, {
				message: "L'envoie des données n'a pas pu se faire",
			});
		}

		throw redirect(303, '/profil');
	},
};
