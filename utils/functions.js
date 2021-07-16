export function getFirstError(errors, keys) {
	for (const key of keys) {
		if (Object.keys(errors).includes(key) && errors[key].length > 0)
			return errors[key][0]
	}
	return ''
}
