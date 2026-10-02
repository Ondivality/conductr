function removeData() {
	localStorage.clear()
}

// Adds OR sets data
function addData(key, value) {
	if (localStorage.getItem(key) === null) { // Sets
		localStorage.setItem(key, value)
	else { // Adds
		key += value
	}
	console.log(localStorage.getItem(key))
}
