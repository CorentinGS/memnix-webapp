export const baseUrl = "http://127.0.0.1:1815/v2"

export function post(url: string, body?: object) {
	return fetch(baseUrl + url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(body)
	})
}

export function getWithToken(url, token) {
	return fetch(baseUrl + url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + token
		}
	})
}