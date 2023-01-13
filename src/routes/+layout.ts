import type { LayoutLoad } from './$types';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';

export const load: LayoutLoad = async (event) => {
	const { session, supabaseClient } = await getSupabase(event);
	return { session, supabaseClient };
};
