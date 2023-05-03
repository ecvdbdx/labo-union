export interface Profile {
	id: number /* primary key */;
	created_at?: string;
	first_name?: string;
	last_name?: string;
	date_of_birth?: string;
	status?: boolean;
	speciality?: string;
	description?: string;
	user_id?: string;
	grade?: string;
	profile_img?: string;
	cover_img?: string;
	Experience?: Experience[];
	Training?: Training[];
	Portfolio?: Portfolio[];
}

export interface Experience {
	id: number /* primary key */;
	created_at?: string;
	job?: string;
	start_date?: string;
	end_date?: string;
	company?: string;
	mission?: string;
	profile_id?: number /* foreign key to Profile.id */;
	location?: string;
	Profile?: Profile;
}

export interface Training {
	id: number /* primary key */;
	created_at?: string;
	school?: string;
	location?: string;
	diploma?: string;
	profile_id?: number /* foreign key to Profile.id */;
	start_date?: string;
	end_date?: string;
	Profile?: Profile;
}

export interface Portfolio {
	id: number /* primary key */;
	created_at?: string;
	title?: string;
	category?: string;
	thumbnail?: string;
	link?: string;
	user_id?: string;
}
