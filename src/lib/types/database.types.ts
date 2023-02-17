export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];
export interface Database {
	public: {
		Tables: {
			AuthorizedEmail: {
				Row: {
					birth: string | null;
					created_at: string | null;
					email: string | null;
					firstname: string | null;
					gender: string | null;
					grade: string | null;
					id: number;
					lastname: string | null;
					speciality: string | null;
				};
				Insert: {
					birth?: string | null;
					created_at?: string | null;
					email?: string | null;
					firstname?: string | null;
					gender?: string | null;
					grade?: string | null;
					id?: number;
					lastname?: string | null;
					speciality?: string | null;
				};
				Update: {
					birth?: string | null;
					created_at?: string | null;
					email?: string | null;
					firstname?: string | null;
					gender?: string | null;
					grade?: string | null;
					id?: number;
					lastname?: string | null;
					speciality?: string | null;
				};
			};
			Profile: {
				Row: {
					created_at: string | null;
					date_of_birth: string | null;
					description: string | null;
					first_name: string | null;
					grade: string | null;
					id: number;
					last_name: string | null;
					speciality: string | null;
					status: boolean | null;
					user_id: string | null;
					grade: string | null;
					speciality: string | null;
				};
				Insert: {
					created_at?: string | null;
					date_of_birth?: string | null;
					description?: string | null;
					first_name?: string | null;
					grade?: string | null;
					id?: number;
					last_name?: string | null;
					speciality?: string | null;
					status?: boolean | null;
					user_id?: string | null;
					grade?: string | null;
					speciality?: string | null;
				};
				Update: {
					created_at?: string | null;
					date_of_birth?: string | null;
					description?: string | null;
					first_name?: string | null;
					grade?: string | null;
					id?: number;
					last_name?: string | null;
					speciality?: string | null;
					status?: boolean | null;
					user_id?: string | null;
					grade?: string | null;
					speciality?: string | null;
				};
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
	};
}
