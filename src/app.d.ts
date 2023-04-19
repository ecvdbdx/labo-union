// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Supabase {
		Database: import('$lib/types/database.types').Database;
		SchemaName: 'public';
	}

	interface Locals {
		supabase: import('@supabase/supabase-js').SupabaseClient;
		getSession: () => Promise<import('@supabase/supabase-js').Session | null>;
	}
	interface PageData {
		session: import('@supabase/supabase-js').Session | null;
	}
	interface Error {
		code?: number;
		message: string;
	}
	// interface Platform {}
}
