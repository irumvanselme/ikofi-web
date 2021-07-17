export function getFirstError(errors, keys) {
	for (const key of keys) {
		if (Object.keys(errors).includes(key) && errors[key].length > 0)
			return errors[key][0]
	}
	return ''
}

export function mapMyUserToRequest(dbUser) {
	return {
		full_name: dbUser.full_names,
		email: dbUser.email,
		username: dbUser.username,
		mobile: dbUser.mobile,
		id_card: dbUser.profile.id_card,
		address: dbUser.profile.address,
	}
}
