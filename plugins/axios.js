export default function ({ $axios, redirect }) {
	$axios.onRequest((config) => {
		if (process.browser) {
			$axios.setHeader(
				'Authorization',
				'Bearer ' + localStorage.getItem('token')
			)
		}
	})
}
