import type { LayoutLoad } from './$types';
import type { LayoutServerLoad } from './$types'
import { getServerSession } from '@supabase/auth-helpers-sveltekit'
import { getSupabase } from '@supabase/auth-helpers-sveltekit';

export const load: LayoutLoad = async (event) => {
	const { session } = await getSupabase(event);
	return { session };
};

// export const loadBis: LayoutServerLoad = async (event) => {
// 	return {
// 		session: await getServerSession(event),
// 	}
// }
