function newRoute(name, miles, profit, time, pos1, pos2) {
	localStorage.setItem(name + ";Miles", miles)
	localStorage.setItem(name + ";Profit", profit)
	localStorage.setItem(name + ";Time", time)
	localStorage.setItem(name + ";Start", pos1)
	localStorage.setItem(name + ";Destination", pos2)

	console.log(localStorage.getItem(name + ";Miles"))
	console.log(localStorage.getItem(name + ";Profit"))
	console.log(localStorage.getItem(name + ";Time"))
	console.log(localStorage.getItem(name + ";Start"))
	console.log(localStorage.getItem(name + ";Destination"))
}

async function playRoute(name) {
	let time = 0
	let addCash = Number(localStorage.getItem(name + ";Profit")) / Number(localStorage.getItem(name + ";Time"))
	let addMiles = Number(localStorage.getItem(name + ";Miles")) / Number(localStorage.getItem(name + ";Time"))
	while (time != localStorage.getItem(name + ";Time")) {
		time += 1
		addData('miles', addMiles)
		addData('cash', addCash)
		addData('time', 1)
		await wait(1000);
	}
}

// Helper Functions
function removeData(key) {
	localStorage.setItem(key, 0)
	displayData(key)
}

function removeAllData() {
	localStorage.clear();
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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
    if (!isNaN(localStorage.getItem(key))) {
        document.getElementById(key + "Display").innerHTML =
            Math.round(Number(localStorage.getItem(key)) * 100) / 100;
    } else {
        document.getElementById(key + "Display").innerHTML =
            localStorage.getItem(key);
    }
}
