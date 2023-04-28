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
			Experience: {
				Row: {
					company: string | null;
					created_at: string | null;
					end_date: string | null;
					id: number;
					job: string | null;
					location: string | null;
					mission: string | null;
					profile_id: number | null;
					start_date: string | null;
				};
				Insert: {
					company?: string | null;
					created_at?: string | null;
					end_date?: string | null;
					id?: number;
					job?: string | null;
					location?: string | null;
					mission?: string | null;
					profile_id?: number | null;
					start_date?: string | null;
				};
				Update: {
					company?: string | null;
					created_at?: string | null;
					end_date?: string | null;
					id?: number;
					job?: string | null;
					location?: string | null;
					mission?: string | null;
					profile_id?: number | null;
					start_date?: string | null;
				};
			};
			Portfolio: {
				Row: {
					category: string | null;
					created_at: string | null;
					id: number;
					link: string | null;
					thumbnail: string | null;
					title: string | null;
				};
				Insert: {
					category?: string | null;
					created_at?: string | null;
					id?: number;
					link?: string | null;
					thumbnail?: string | null;
					title?: string | null;
				};
				Update: {
					category?: string | null;
					created_at?: string | null;
					id?: number;
					link?: string | null;
					thumbnail?: string | null;
					title?: string | null;
				};
			};
			Profile: {
				Row: {
					cover_img: string | null;
					created_at: string | null;
					date_of_birth: string | null;
					description: string | null;
					first_name: string | null;
					grade: string | null;
					id: number;
					last_name: string | null;
					profile_img: string | null;
					speciality: string | null;
					status: boolean | null;
					user_id: string | null;
				};
				Insert: {
					cover_img?: string | null;
					created_at?: string | null;
					date_of_birth?: string | null;
					description?: string | null;
					first_name?: string | null;
					grade?: string | null;
					id?: number;
					last_name?: string | null;
					profile_img?: string | null;
					speciality?: string | null;
					status?: boolean | null;
					user_id?: string | null;
				};
				Update: {
					cover_img?: string | null;
					created_at?: string | null;
					date_of_birth?: string | null;
					description?: string | null;
					first_name?: string | null;
					grade?: string | null;
					id?: number;
					last_name?: string | null;
					profile_img?: string | null;
					speciality?: string | null;
					status?: boolean | null;
					user_id?: string | null;
				};
			};
			Training: {
				Row: {
					created_at: string | null;
					diploma: string | null;
					end_date: string | null;
					id: number;
					location: string | null;
					profile_id: number | null;
					school: string | null;
					start_date: string | null;
				};
				Insert: {
					created_at?: string | null;
					diploma?: string | null;
					end_date?: string | null;
					id?: number;
					location?: string | null;
					profile_id?: number | null;
					school?: string | null;
					start_date?: string | null;
				};
				Update: {
					created_at?: string | null;
					diploma?: string | null;
					end_date?: string | null;
					id?: number;
					location?: string | null;
					profile_id?: number | null;
					school?: string | null;
					start_date?: string | null;
				};
			};
		};
		Views: {
			distinct_grade: {
				Row: {
					grade: string | null;
				};
			};
			distinct_speciality: {
				Row: {
					speciality: string | null;
				};
			};
		};
		Functions: {
			filterandsearchprofile: {
				Args: {
					search: string;
					grade?: string;
					speciality?: string;
				};
				Returns: {
					cover_img: string | null;
					created_at: string | null;
					date_of_birth: string | null;
					description: string | null;
					first_name: string | null;
					grade: string | null;
					id: number;
					last_name: string | null;
					profile_img: string | null;
					speciality: string | null;
					status: boolean | null;
					user_id: string | null;
				}[];
			};
			searchprofile: {
				Args: {
					search: string;
					grade?: string;
					speciality?: string;
				};
				Returns: {
					cover_img: string | null;
					created_at: string | null;
					date_of_birth: string | null;
					description: string | null;
					first_name: string | null;
					grade: string | null;
					id: number;
					last_name: string | null;
					profile_img: string | null;
					speciality: string | null;
					status: boolean | null;
					user_id: string | null;
				}[];
			};
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
