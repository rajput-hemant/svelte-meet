export function isEmpty(value: string) {
	return value.trim() === "";
}

export function isValidEmail(value: string) {
	return value.includes("@");
}
