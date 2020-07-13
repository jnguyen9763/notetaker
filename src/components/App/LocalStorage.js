export const KEY = 'notetaker';

export function getFromLS(key) {
	let ls = {}
	if (global.localStorage) {
		try {
			ls = JSON.parse(global.localStorage.getItem(KEY)) || {}
		} catch (e) {
			/*Ignore*/
		}
	}
	return ls[key]
}

export function saveToLS(key, value) {
	if (global.localStorage) {
		global.localStorage.setItem(
			KEY,
			JSON.stringify({
				[key]: value
			})
		)
	}
}