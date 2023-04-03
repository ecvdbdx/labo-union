export interface AuthorizedEmail {
	id: number /* primary key */;
	created_at?: string;
	grade?: string;
	speciality?: string;
	gender?: string;
	lastname?: string;
	firstname?: string;
	birth?: string;
	email?: string;
}
