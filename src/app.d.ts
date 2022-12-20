// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Supabase {
<<<<<<< HEAD
		Database: import('$lib/types/database.types').Database;
		SchemaName: 'public';
	}

	// interface Locals {}
	interface PageData {
		session: import('@supabase/supabase-js').Session | null;
	}
	// interface Error {}
	// interface Platform {}
=======
		Database: import('./DatabaseDefinitions').Database;
		SchemaName: 'public';
	}
	interface PageData {
		session: import('@supabase/supabase-js').Session | null;
	}
>>>>>>> 8f79a83 (feat: handle signup form errors (wip))
}
