interface Supabase {
	Database: import('./DatabaseDefinitions').Database;
	SchemaName: 'public';
}
interface PageData {
	session: import('@supabase/supabase-js').Session | null;
}
