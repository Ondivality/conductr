function removeData(key) { //
	localStorage.setItem(key, 0)
	displayData(key)
}

// Adds OR sets data
function addData(key, value) {
	if (localStorage.getItem(key) === null) { // Sets
		localStorage.setItem(key, value)
	} else { // Adds
		localStorage.setItem(key, Number(localStorage.getItem(key)) + Number(value))
	}
	displayData(key)
}

function subtractData(key, value) {
	if (localStorage.getItem(key) === null) {
		console.log("Subtract Data failed! Key is not set.")
		return;
	} else {
		localStorage.setItem(key, Number(localStorage.getItem(key)) - Number(value))
	}
	displayData(key)
}

function displayData(key) {
	document.getElementById(key + "Display").innerHTML = localStorage.getItem(key)
}
