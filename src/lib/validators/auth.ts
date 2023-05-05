export function isPasswordValid(password: string): boolean {
	const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#?&])[A-Za-z\d@$!#?&]{9,}$/;
	return regex.test(password);
}

export function isEmailValid(email: string): boolean {
	const emailRegex = /^[^@]+@mail-ecv\.fr$/;
	return emailRegex.test(email);
}
