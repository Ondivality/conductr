const form = document.getElementById("submitRoute");

form.addEventListener('submit', function(event) {
	event.preventDefault();
	newRoute(form.elements.name.value, form.elements.miles.value, form.elements.profit.value, form.elements.start.value, form.elements.destination.value)
});

function newRoute(name, miles, profit, pos1, pos2) {
	localStorage.setItem(name + "Miles", miles)
	localStorage.setItem(name + "Profit", profit)
	localStorage.setItem(name + "Start", pos1)
	localStorage.setItem(name + "Destination", pos2)
	
	console.log(localStorage.getItem(name + "Miles"))
	console.log(localStorage.getItem(name + "Profit"))
	console.log(localStorage.getItem(name + "Start"))
	console.log(localStorage.getItem(name + "Destination"))
}

// Helper Functions
function removeData(key) {
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
