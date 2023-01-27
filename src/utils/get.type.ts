import { supabase } from '$lib/auth';

export async function getProfiles() {
	const { data } = await supabase.from('Profile').select('*');
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	return data![0];
}

type Response = Awaited<ReturnType<typeof getProfiles>>;
export type ResponseProfile = Response;
