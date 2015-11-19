/*
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!DIGITAL BUZZBOARD!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
TITLE: Digital Buzzboard
AUTHOR: Mitchell Ungar
DATE: November 12 2015
VERSION: 1.0.4

What this javascript does is allow the webpage display a Date and time that always is running.
*/
/*Beginning of Date function*/

function initDate() {
  /*an Array of months and days*/
  var dayName = new Array("Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
  var monName = new Array("January", "February", "March", "April", "May", "June", "July", "August",
   "September", "October","November","December");

   /*A variable being used to get the current date*/
   var now = new Date();
   /*Gets the months index, but isn't starting at 0 like Array, so +1 to make it correct month */
   var thisMonth = now.getMonth() + 1;
   /*The display string that is being sent to the index.html*/
   var dtString = monName[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear();
   /*Sending information to the HTML's <h1> tag called dtField*/
   document.getElementById("dtField").innerHTML = dtString;

   /*iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii Background Pictures iiiiiiiiiiiiiiiiiiiiiiii*/

   /*Allows the months to change the background picture*/
   var z = new Image();
   if(thisMonth == 1) {
     z.src = "Pictures/Januarybg.jpg";
   }
   else if(thisMonth == 2) {
     z.src = "Pictures/Februarybg.jpg";
   }
   else if(thisMonth == 3) {
     z.src = "Pictures/Marchbg.jpeg";
   }
   else if(thisMonth == 4) {
     z.src = "Pictures/Aprilbg.jpg";
   }
   else if(thisMonth == 5) {
     z.src = "Pictures/Maybg.jpg";
   }
   else if(thisMonth == 6) {
     z.src = "Pictures/Junebg.jpg";
   }
   else if(thisMonth == 7) {
     z.src = "Pictures/Julybg.jpg";
   }
   else if(thisMonth == 8) {
     z.src = "Pictures/Augustbg.jpg";
   }
   else if(thisMonth == 9) {
     z.src = "Pictures/Septemberbg.jpg";
   }
   else if(thisMonth == 10) {
     z.src = "Pictures/Octoberbg.jpg";
   }
   else if(thisMonth == 11) {
     z.src = "Pictures/Novemberbg.jpg";
   }
   if(thisMonth == 12) {
     z.src = "Pictures/Decemberbg.jpg";
   }
   /*Adds the month to the listing and shows new background*/
   document.body.background= z.src;
}
/*End of Date Function*/
/*Beginning of showTheTime function*/
function showTheTime() {
  /*Creating a current date variable*/
  var now = new Date();
  /*String that is being sent to the HTML page*/
  var theTime = showTheHours(now.getHours()) +
  showZeroFilled(now.getMinutes()) + showZeroFilled(now.getSeconds())
  + showAmPm();
  /*Sending the String tot he HTML page*/
  document.getElementById("showTime").innerHTML = theTime;
  /*start the showTheTime function ever 1 second increment time on display*/
  setTimeout("showTheTime()", 1000);
  /*Javascript runs on a 24 hour clock, this displays 1-12 for the HTML*/
  function showTheHours(theHour) {
    if(theHour == 0) {
        return 12;
      }
      if (theHour < 13) {
        return theHour;
      }
      return theHour-12;
    }
  /*anything before 10 seconds gets a 0 before it*/
  function showZeroFilled(inValue) {
    if (inValue > 9) {
      return ":" + inValue;
    }
    return ":0" + inValue;
  }
  /*puts AM or PM at the end of the time*/
  function showAmPm() {
    if(now.getHours() < 12) {
      return " am";
    }
    return " pm";
  }
}
/*  jQuery ready function. Specify a function to execute when the DOM is fully loaded.  */
$(document).ready(

  /* This is the function that will get executed after the DOM is fully loaded */
  function () {
    /*Creates the first datepicker*/
    $( "#datepicker" ).datepicker({
      changeMonth: true,//this option for allowing user to select month
      changeYear: true //this option for allowing user to select from year range
    });
    /*Creates the second datepicker*/
    $( "#datepicker2" ).datepicker({
      changeMonth: true,//this option for allowing user to select month
      changeYear: true //this option for allowing user to select from year range
    });
    /*Creates third datepicker*/
    $( "#datepicker3" ).datepicker({
      changeMonth: true,//this option for allowing user to select month
      changeYear: true //this option for allowing user to select from year range
    });
  }
);
function eventHandler() {
  function qs(search_for) {
    var query = window.location.search.substring(1);
    var parms = query.split('&');
    for (var i=0; i<parms.length; i++) {
      var pos = parms[i].indexOf('=');
      if (pos > 0  && search_for == parms[i].substring(0,pos)) {
        var newURI = decodeURIComponent(parms[i].substring(pos+1))
        newURI = newURI.replace(/\+/g, " ");
        return newURI;
      }
    }
    return "";
  }
  function notificationHandler() {
    var ctr = 0;

    var notifcationDiv = document.getElementById("notification-container");
    notifcationDiv.className = "notify";
    for (var i = 0; i < 10; i++) {
      ctr++;
      var strNotification = "not" + ctr;
      if (qs(strNotification) != "") {
        var notH3 = document.createElement('H2');
        notH3.className = 'notifications';
        notH3.appendChild(document.createTextNode(qs(strNotification)));
        notifcationDiv.appendChild(notH3);
      }
    }

  }
  function pictureHandler() {
  var img1 = document.createElement('img');
  var img2 = document.createElement('img');
  var img3 = document.createElement('img');
  /*Creating new variables for each title and content piece
  Later work on dynamic with JAVA remotes*/
  var eventTitle1 = document.createElement("H1");
  var eventTitle2 = document.createElement("H1");
  var eventTitle3 = document.createElement("H1");

  var eventContent1 = document.createElement("H3");
  var eventContent2 = document.createElement("H3");
  var eventContent3 = document.createElement("H3");

  document.getElementById("vid-box").innerHTML = qs("youtubeURL");


  /*Adding classes to the event variables so you can use CSS*/
  eventTitle1.className = "eventTitle";
  eventTitle2.className = "eventTitle";
  eventTitle3.className = "eventTitle";

  eventContent1.className = "eventContent";
  eventContent2.className = "eventContent";
  eventContent3.className = "eventContent";

  var arr1 = qs("datepicker").split('/');
  var arr2 = qs("datepicker2").split('/');
  var arr3 = qs("datepicker3").split('/');

  img1.setAttribute("height", "100");
  img1.setAttribute("width", "100");
  img1.className = "calIMG";

  img2.setAttribute("height", "100");
  img2.setAttribute("width", "100");
  img2.className = "calIMG";

  img3.setAttribute("height", "100");
  img3.setAttribute("width", "100");
  img3.className = "calIMG";


/*All the if statements that handle the day picture for events1*/
//Creating counter for dynamic pictures
var ctr = 0;

for (var i = 0; i < 31; i++) {
  //Incrementing Counter for each day
  ctr++;
  //Creating dynamic text
  var strDateIcon1 = "0" + ctr;
  var strDateIcon2 = ctr;
  var strPictureURL = "Pictures/calendar_" + ctr + ".png";
  //Determining what day each section is.
  if(arr1[1] == strDateIcon1 || arr1[1] == strDateIcon2){
    img1.setAttribute("src", strPictureURL);
    img1.setAttribute("alt",ctr);
    img1.setAttribute("height", "100");
    img1.setAttribute("width", "100");
    img1.className = "calIMG";
  }

  if(arr2[1] == strDateIcon1 || arr2[1] == strDateIcon2){
    img2.setAttribute("src", strPictureURL);
    img2.setAttribute("alt",ctr);
    img2.setAttribute("height", "100");
    img2.setAttribute("width", "100");
    img2.className = "calIMG";
  }

  if(arr3[1] == strDateIcon1 || arr3[1] == strDateIcon2){
    img3.setAttribute("src", strPictureURL);
    img3.setAttribute("alt",ctr);
    img3.setAttribute("height", "100");
    img3.setAttribute("width", "100");
    img3.className = "calIMG";
  }
}
var ctr2 = 0;
if (qs("title") != "") {
  ctr2++;
  var e1divId = 'event1Div' + ctr2;
  var event1Div = document.createElement('div');
  event1Div.className = 'rcs';
  event1Div.id = e1divId;
  document.getElementById("right-container").appendChild(event1Div);
  eventTitle1.appendChild(document.createTextNode(qs("title")));
  event1Div.appendChild(img1);
  event1Div.appendChild(eventTitle1);
}
var ctr3 = 0;
if (qs("title2") != "") {
  ctr3++;
  var e2divId = 'event1Div' + ctr3;
  var event2Div = document.createElement('div');
  event2Div.className = 'rcs';
  event2Div.id = e2divId;
  document.getElementById("right-container").appendChild(event2Div);
  eventTitle2.appendChild(document.createTextNode(qs("title2")));
  event2Div.appendChild(img2);
  event2Div.appendChild(eventTitle2);
}
var ctr4 = 0;
if (qs("title3") != "") {
  ctr4++;
  var e3divId = 'event1Div' + ctr4;
  var event3Div = document.createElement('div');
  event3Div.className = 'rcs';
  event3Div.id = e3divId;
  document.getElementById("right-container").appendChild(event3Div);
  /*Putting the TITLE1 and DATE1 onto the screen*/
  eventTitle3.appendChild(document.createTextNode(qs("title3")));
  event3Div.appendChild(img3);
  event3Div.appendChild(eventTitle3);
  //event3Div.appendChild(document.createTextNode(qs("events3")));
  //event3Div.appendChild(eventContent3);
}

}
notificationHandler();
pictureHandler();
}
ScrollRate = 175;

function scrollDiv_init() {
  //iiiiiiiiiiiiiiiiiiiiiiiiiii Right Container iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
	DivElmnt = document.getElementById('right-container');
	ReachedMaxScroll = false;

	DivElmnt.scrollTop = 0;
	PreviousScrollTop  = 0;

	ScrollInterval = setInterval('scrollDiv()', ScrollRate);

  //iiiiiiiiiiiiiiiiiiiiiiiiii Left Container iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
  DivElmnt2 = document.getElementById('notification-container');
  ReachedMaxScroll2 = false;

  DivElmnt2.scrollTop = 0;
  PreviousScrollTop2  = 0;

  ScrollInterval2 = setInterval('scrollDiv()', ScrollRate);
}

function scrollDiv() {
//iiiiiiiiiiiiiiiiiiiiiiiii Right Container iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
	if (!ReachedMaxScroll) {
		DivElmnt.scrollTop = PreviousScrollTop;
		PreviousScrollTop++;

		ReachedMaxScroll = DivElmnt.scrollTop >= (DivElmnt.scrollHeight - DivElmnt.offsetHeight);
	}
	else {
		ReachedMaxScroll = (DivElmnt.scrollTop == 0)?false:true;

		DivElmnt.scrollTop = PreviousScrollTop;
		PreviousScrollTop--;
	}
//iiiiiiiiiiiiiiiiiiiiiii Left Container iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
if (!ReachedMaxScroll2) {
  DivElmnt2.scrollTop = PreviousScrollTop2;
  PreviousScrollTop2++;

  ReachedMaxScroll2 = DivElmnt2.scrollTop >= (DivElmnt2.scrollHeight - DivElmnt2.offsetHeight);
}
else {
  ReachedMaxScroll2 = (DivElmnt2.scrollTop == 0)?false:true;

  DivElmnt2.scrollTop = PreviousScrollTop2;
  PreviousScrollTop2--;
}
}

function pauseDiv() {
	clearInterval(ScrollInterval);
  clearInterval(ScrollInterval2);
}

function resumeDiv() {
	PreviousScrollTop = DivElmnt.scrollTop;
	ScrollInterval    = setInterval('scrollDiv()', ScrollRate);
  PreviousScrollTop2 = DivElmnt2.scrollTop;
	ScrollInterval2    = setInterval('scrollDiv()', ScrollRate);
}
/*End of show the time function*/

/*Javascript isn't smart enough to have two window.onload functions being used
So I created a function the runs the other three functions so all I have to do
is call windows.onload once*/
function start() {
  initDate();
  showTheTime();
  eventHandler();
  scrollDiv_init();
}

/*Starts the date and time functions at the same time*/
window.onload = start;
