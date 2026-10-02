function removeData() {
	localStorage.clear()
}

// Hopefully works now ?
// Adds OR sets data
function addData(key, value) {
	if (localStorage.getItem(key) === null) { // Sets
		localStorage.setItem(key, value)
	} else { // Adds
		item = localStorage.getItem(key)
		localStorage.setItem(key, Number(localStorage.getItem(key)) + Number(value))
	}
	console.log(localStorage.getItem(key))
	updateData(key)
}

function updateData(key) {
	document.getElementById("timeCounter").innerHTML = localStorage.getItem(key)
}
