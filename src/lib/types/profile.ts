import { supabase } from '$lib/auth';

async function getProfile() {
	const { data, error } = await supabase.from('Profile').select('*').single();
	if (error) {
		throw new Error(error.message);
	}

	return data;
}

export type Profile = Awaited<ReturnType<typeof getProfile>>;
