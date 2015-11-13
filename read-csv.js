/*
By: Mitchell Ungar
Date: Nov. 5th 2015
Reading the CSV file into Birthdays and Anniversaries
*/
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
	/*Looks for csv files*/
	processData(csv);
}
function processData(csv) {
		/*Grabs all the text lines of csv*/
    var allTextLines = csv.split(/\r\n|\n/);
		/*Creating empty Array*/
    var lines = [];
		/*Go through all the lines and add each information into the array lines*/
    while (allTextLines.length) {
        lines.push(allTextLines.shift().split(','));
    }
	/*Shows in console what is in lines*/
	console.log(lines);
	/*Displays the array of lines*/
	drawOutput(lines);
}
/*If for some reason it can't be read, do this error*/
function errorHandler(evt) {
	if(evt.target.error.name == "NotReadableError") {
		alert("Canno't read file !");
	}
}

function drawOutput(lines){
	/*An Array of month names*/
	var monName = new Array("January", "February", "March", "April", "May", "June", "July", "August",
   												"September", "October","November","December");
	/*Creating a DATE variable*/
	var date = new Date();
	/*date function is 0 justified, so you have to plus one to go from 1-12*/
	month = date.getMonth() + 1;
	day = date.getDate();
	/*Grabbing the date string by using the integer that DATE gives you*/
	dateString = monName[date.getMonth()];
	//Clear previous data
	document.getElementById("left-container").innerHTML = "";
	var table = document.createElement("table");
	/**Creating the birthdayTitle Object*/
	var birthdayTitle = document.createElement("H1");
	/*Assigning the className for CSS*/
	birthdayTitle.className = "birthdayTitle";
	birthdayTitle.appendChild(document.createTextNode("Birthdays"));
	/*Add the birthday title to the left container*/
	document.getElementById("left-container").appendChild(birthdayTitle);
	var ctr = 0;
	/*Create a row*/
	for (var i = 0; i < lines.length; i++) {
		var row = table.insertRow(-1);
		/*Add information into cells in that row*/
		for (var j = 0; j < lines[j].length; j++) {
      if(lines[i][j] != dateString) {
				/*Suitable error message*/
      } else {
				/*Adding all birthdays to each individual row*/
				var cell = row.insertCell(-1);
				var firstName = lines[i][0];
				var lastName = lines[i][1];
				var birthDay = lines[i][2];
				var birthMonth = lines[i][3];
				var anniversaryDay = lines[i][4];
				var anniversaryMonth = lines[i][5];
				var anniveraryYear = lines[i][6];
				/*Comparing the this month the month in csv file*/
				if(lines[i][3] == dateString){
					var birthdayDetails = document.createElement("H4")
					birthdayDetails.className = "birthdayDetails";
					birthdayDetails.appendChild(document.createTextNode(firstName + " " + lastName + " " + birthMonth + " " + birthDay));
					document.getElementById("left-container").appendChild(birthdayDetails);
					cell.appendChild(document.createTextNode("HAPPY BIRTHDAY:    "));
				}
      }

		}
	}
	var anniversaryTitle = document.createElement("H1");
	anniversaryTitle.className = "anniversaryTitle";
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

				if(anniversaryMonth == dateString){
					var anniversaryDetails = document.createElement("H4");
					anniversaryDetails.className = "anniversaryDetails";
					anniversaryDetails.appendChild(document.createTextNode(firstName + " " + lastName + " " + anniversaryMonth + " " + anniversaryDay + " " + anniveraryYear));
					document.getElementById("left-container").appendChild(anniversaryDetails);
					
				}

				if(anniversaryMonth == dateString && anniversaryDay == day){

						ctr++;
						var anniversaryDetails = document.createElement("H4");
						anniversaryDetails.className = "anniversaryDetails";
						anniversaryDetails.appendChild(document.createTextNode(firstName + " " + lastName + " " + anniversaryMonth + " " + anniversaryDay + " " + anniveraryYear));
						//document.getElementById("right-container").appendChild(anniversaryDetails);
						var divId = 'annivDiv' + ctr;
						var altImg = 'Anniv' + ctr;
						//document.getElementById("right-container").appendChild(document.createTextNode(divId));

						var annivDiv = document.createElement('div');
						annivDiv.className = 'rcs';
						annivDiv.id = divId;
						document.getElementById("right-container").appendChild(annivDiv);


						var annivImg = document.createElement('img');
						annivImg.setAttribute("height", "100");
					  annivImg.setAttribute("width", "100");
					  annivImg.className = "calIMG";

						annivImg.setAttribute("src", "Pictures/Anniversary.png");
				    annivImg.setAttribute("alt",altImg);

						annivDiv.appendChild(annivImg);

						var annivInfo = document.createElement("H1");
						var br = document.createElement("br");
						annivInfo.className = "anniversaryDetails";
						annivInfo.appendChild(document.createTextNode("Happy Anniversary!"));
						annivInfo.appendChild(br);
						annivInfo.appendChild(document.createTextNode(firstName + " " + lastName));

						annivDiv.appendChild(annivInfo);
				}
      }

		}
	}
}
