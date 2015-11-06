/*http://mounirmesselmeni.github.io/2012/11/20/reading-csv-file-with-javascript-and-html5-file-api/*/
function handleFiles(files) {
	// Check for the various File API support.
	if (window.FileReader) {
		// FileReader are supported.
		getAsText(files[0]);
	} else {
		alert('FileReader are not supported in this browser.');
	}
}

function getAsText(fileToRead) {
	var reader = new FileReader();
	// Handle errors load
	reader.onload = loadHandler;
	reader.onerror = errorHandler;
	// Read file into memory as UTF-8
	reader.readAsText(fileToRead);
}

function loadHandler(event) {
	var csv = event.target.result;
	processData(csv);
}

function processData(csv) {
    var allTextLines = csv.split(/\r\n|\n/);
    var lines = [];
    while (allTextLines.length) {
        lines.push(allTextLines.shift().split(','));
    }
	console.log(lines);
	drawOutput(lines);
}

function errorHandler(evt) {
	if(evt.target.error.name == "NotReadableError") {
		alert("Canno't read file !");
	}
}

function drawOutput(lines){
	var monName = new Array("January", "February", "March", "April", "May", "June", "July", "August",
   "September", "October","November","December");
var date = new Date();
month = date.getMonth() + 1;
day = date.getDate() + 1;

dateString = monName[date.getMonth()];
	//Clear previous data
	document.getElementById("left-container").innerHTML = "";
	var table = document.createElement("table");
	var birthdayTitle = document.createElement("H1");
	birthdayTitle.appendChild(document.createTextNode("Birthdays"));
	document.getElementById("left-container").appendChild(birthdayTitle);
	for (var i = 0; i < lines.length; i++) {
		var row = table.insertRow(-1);
		for (var j = 0; j < lines[j].length; j++) {
      if(lines[i][j] != dateString) {

      } else {

				var cell = row.insertCell(-1);
				var firstName = lines[i][0];
				var lastName = lines[i][1];
				var birthDay = lines[i][2];
				var birthMonth = lines[i][3];
				var anniversaryDay = lines[i][4];
				var anniversaryMonth = lines[i][5];
				var anniveraryYear = lines[i][6];

				if(lines[i][3] == dateString){
					var birthdayDetails = document.createElement("H4")
					birthdayDetails.appendChild(document.createTextNode(firstName + " " + lastName + " " + birthMonth + " " + birthDay));
					document.getElementById("left-container").appendChild(birthdayDetails);
					cell.appendChild(document.createTextNode("HAPPY BIRTHDAY:    "));
				}
      }

		}
	}
	var anniversaryTitle = document.createElement("H1");
	anniversaryTitle.appendChild(document.createTextNode("Anniversaries"));
	document.getElementById("left-container").appendChild(anniversaryTitle);
	for (var i = 0; i < lines.length; i++) {

		var row = table.insertRow(-1);
		for (var j = 0; j < lines[j].length; j++) {
      if(lines[i][j] != dateString) {

      } else {

				var cell = row.insertCell(-1);
				var firstName = lines[i][0];
				var lastName = lines[i][1];
				var birthDay = lines[i][2];
				var birthMonth = lines[i][3];
				var anniversaryDay = lines[i][4];
				var anniversaryMonth = lines[i][5];
				var anniveraryYear = lines[i][6];

				if(lines[i][5] == dateString){
					var anniversaryDetails = document.createElement("H4")
					anniversaryDetails.appendChild(document.createTextNode(firstName + " " + lastName + " " + anniversaryMonth + " " + anniversaryDay + " " + anniveraryYear));
					document.getElementById("left-container").appendChild(anniversaryDetails);
				}
      }

		}
	}
}
