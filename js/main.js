function removeData() {
	localStorage.clear()
}

// Doesn't work, should add if statement to check if key exists before adding value
function addData(key, value) { 
	key += value
	console.log(localStorage.getItem(key))
}
