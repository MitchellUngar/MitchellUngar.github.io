/*
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!DIGITAL BUZZBOARD!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
TITLE: Digital Buzzboard
AUTHOR: Mitchell Ungar
DATE: November 6 2015
VERSION: 1.0.3

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
    $( "#datepicker" ).datepicker({
      changeMonth: true,//this option for allowing user to select month
      changeYear: true //this option for allowing user to select from year range
    });
    $( "#datepicker2" ).datepicker({
      changeMonth: true,//this option for allowing user to select month
      changeYear: true //this option for allowing user to select from year range
    });
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
  var img1 = document.createElement('img');
  var img2 = document.createElement('img');
  var img3 = document.createElement('img');
  /*Creating new variables for each title and content piece
  Later work on dynamic with JAVA remotes*/
  var eventTitle1 = document.createElement("H2");
  var eventTitle2 = document.createElement("H2");
  var eventTitle3 = document.createElement("H2");

  var eventContent1 = document.createElement("H3");
  var eventContent2 = document.createElement("H3");
  var eventContent3 = document.createElement("H3");

  var day1 = document.createElement("H2");
  var day2 = document.createElement("H2");
  var day3 = document.createElement("H2");

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

  /*Putting the TITLE1 and DATE1 onto the screen*/
  eventTitle1.appendChild(document.createTextNode(qs("title") + " " + qs("datepicker")));
  document.getElementById("right-container-section-1").appendChild(eventTitle1);

  if(arr1[1] == "01")
  {
    img1.setAttribute("src", "Pictures/calendar_1.png");
    img1.setAttribute("alt","1");
  }
  else if(arr1[1] == "02")
  {
    img1.setAttribute("src", "Pictures/calendar_2.png");
    img1.setAttribute("alt","2");
  }
  else if(arr1[1] == "03")
  {
    img1.setAttribute("src", "Pictures/calendar_3.png");
    img1.setAttribute("alt","3");
  }
  else if(arr1[1] == "04")
  {
    img1.setAttribute("src", "Pictures/calendar_4.png");
    img1.setAttribute("alt","4");
  }
  else if(arr1[1] == "05")
  {
    img1.setAttribute("src", "Pictures/calendar_5.png");
    img1.setAttribute("alt","5");
  }
  else if(arr1[1] == "06")
  {
    img1.setAttribute("src", "Pictures/calendar_6.png");
    img1.setAttribute("alt","6");
  }
  else if(arr1[1] === "07"){
    img1.setAttribute("src", "Pictures/calendar_7.png");
    img1.setAttribute("alt","7");
  }
  else if(arr1[1] === "08"){
    img1.setAttribute("src", "Pictures/calendar_8.png");
    img1.setAttribute("alt","8");
  }
  else if(arr1[1] === "09" || arr2[1] == "09"){
    img1.setAttribute("src", "Pictures/calendar_9.png");
    img1.setAttribute("alt","9");
  }
  else if(arr1[1] == "10")
  {
    img1.setAttribute("src", "Pictures/calendar_10.png");
    img1.setAttribute("alt","10");
  }
  else if(arr1[1] == "11")
  {
    img1.setAttribute("src", "Pictures/calendar_11.png");
    img1.setAttribute("alt","11");
  }
  else if(arr1[1] == "12")
  {
    img1.setAttribute("src", "Pictures/calendar_12.png");
    img1.setAttribute("alt","12");
  }
  else if(arr1[1] == "13")
  {
    img1.setAttribute("src", "Pictures/calendar_13.png");
    img1.setAttribute("alt","13");
  }
  else if(arr1[1] == "14")
  {
    img1.setAttribute("src", "Pictures/calendar_14.png");
    img1.setAttribute("alt","14");
  }
  else if(arr1[1] == "15")
  {
    img1.setAttribute("src", "Pictures/calendar_15.png");
    img1.setAttribute("alt","15");
  }
  else if(arr1[1] == "16")
  {
    img1.setAttribute("src", "Pictures/calendar_16.png");
    img1.setAttribute("alt","16");
  }
  else if(arr1[1] == "17")
  {
    img1.setAttribute("src", "Pictures/calendar_17.png");
    img1.setAttribute("alt","17");
  }
  else if(arr1[1] == "18")
  {
    img1.setAttribute("src", "Pictures/calendar_18.png");
    img1.setAttribute("alt","18");
  }
  else if(arr1[1] == "19")
  {
    img1.setAttribute("src", "Pictures/calendar_19.png");
    img1.setAttribute("alt","19");
  }
  else if(arr1[1] == "20")
  {
    img1.setAttribute("src", "Pictures/calendar_20.png");
    img1.setAttribute("alt","20");
  }
  else if(arr1[1] == "21")
  {
    img1.setAttribute("src", "Pictures/calendar_21.png");
    img1.setAttribute("alt","21");
  }
  else if(arr1[1] == "22")
  {
    img1.setAttribute("src", "Pictures/calendar_22.png");
    img1.setAttribute("alt","22");
  }
  else if(arr1[1] == "23")
  {
    img1.setAttribute("src", "Pictures/calendar_23.png");
    img1.setAttribute("alt","23");
  }
  else if(arr1[1] == "24")
  {
    img1.setAttribute("src", "Pictures/calendar_24.png");
    img1.setAttribute("alt","24");
  }
  else if(arr1[1] == "25")
  {
    img1.setAttribute("src", "Pictures/calendar_25.png");
    img1.setAttribute("alt","25");
  }
  else if(arr1[1] == "26")
  {
    img1.setAttribute("src", "Pictures/calendar_26.png");
    img1.setAttribute("alt","26");
  }
  else if(arr1[1] == "27")
  {
    img1.setAttribute("src", "Pictures/calendar_27.png");
    img1.setAttribute("alt","27");
  }
  else if(arr1[1] == "28")
  {
    img1.setAttribute("src", "Pictures/calendar_28.png");
    img1.setAttribute("alt","28");
  }
  else if(arr1[1] == "29")
  {
    img1.setAttribute("src", "Pictures/calendar_29.png");
    img1.setAttribute("alt","29");
  }
  else if(arr1[1] == "30")
  {
    img1.setAttribute("src", "Pictures/calendar_30.png");
    img1.setAttribute("alt","30");
  }
  else if(arr1[1] == "31")
  {
    img1.setAttribute("src", "Pictures/calendar_31.png");
    img1.setAttribute("alt","31");
  }
  document.getElementById("right-container-section-1").appendChild(img1);

  /*Putting the EVENTS1 onto the screen*/
  eventContent1.appendChild(document.createTextNode(qs("events")));
  document.getElementById("right-container-section-1").appendChild(eventContent1);

  /*Putting the TITLE2 and DATE2 onto the screen*/
  eventTitle2.appendChild(document.createTextNode(qs("title2") + " " + qs("datepicker2")));
  document.getElementById("right-container-section-2").appendChild(eventTitle2);

  if(arr2[1] == "01")
  {
    img2.setAttribute("src", "Pictures/calendar_1.png");
    img2.setAttribute("alt","1");
  }
  else if(arr2[1] == "02")
  {
    img2.setAttribute("src", "Pictures/calendar_2.png");
    img2.setAttribute("alt","2");
  }
  else if(arr2[1] == "03")
  {
    img2.setAttribute("src", "Pictures/calendar_3.png");
    img2.setAttribute("alt","3");
  }
  else if(arr2[1] == "04")
  {
    img2.setAttribute("src", "Pictures/calendar_4.png");
    img2.setAttribute("alt","4");
  }
  else if(arr2[1] == "05")
  {
    img2.setAttribute("src", "Pictures/calendar_5.png");
    img2.setAttribute("alt","5");
  }
  else if(arr2[1] == "06")
  {
    img2.setAttribute("src", "Pictures/calendar_6.png");
    img2.setAttribute("alt","6");
  }
  else if(arr2[1] === "07"){
    img2.setAttribute("src", "Pictures/calendar_7.png");
    img2.setAttribute("alt","7");
  }
  else if(arr2[1] === "08"){
    img2.setAttribute("src", "Pictures/calendar_8.png");
    img2.setAttribute("alt","8");
  }
  else if(arr2[1] === "09" || arr2[1] == "09"){
    img2.setAttribute("src", "Pictures/calendar_9.png");
    img2.setAttribute("alt","9");
  }
  else if(arr2[1] == "10")
  {
    img2.setAttribute("src", "Pictures/calendar_10.png");
    img2.setAttribute("alt","10");
  }
  else if(arr2[1] == "11")
  {
    img2.setAttribute("src", "Pictures/calendar_11.png");
    img2.setAttribute("alt","11");
  }
  else if(arr2[1] == "12")
  {
    img2.setAttribute("src", "Pictures/calendar_12.png");
    img2.setAttribute("alt","12");
  }
  else if(arr2[1] == "13")
  {
    img2.setAttribute("src", "Pictures/calendar_13.png");
    img2.setAttribute("alt","13");
  }
  else if(arr2[1] == "14")
  {
    img2.setAttribute("src", "Pictures/calendar_14.png");
    img2.setAttribute("alt","14");
  }
  else if(arr2[1] == "15")
  {
    img2.setAttribute("src", "Pictures/calendar_15.png");
    img2.setAttribute("alt","15");
  }
  else if(arr2[1] == "16")
  {
    img2.setAttribute("src", "Pictures/calendar_16.png");
    img2.setAttribute("alt","16");
  }
  else if(arr2[1] == "17")
  {
    img2.setAttribute("src", "Pictures/calendar_17.png");
    img2.setAttribute("alt","17");
  }
  else if(arr2[1] == "18")
  {
    img2.setAttribute("src", "Pictures/calendar_18.png");
    img2.setAttribute("alt","18");
  }
  else if(arr2[1] == "19")
  {
    img2.setAttribute("src", "Pictures/calendar_19.png");
    img2.setAttribute("alt","19");
  }
  else if(arr2[1] == "20")
  {
    img2.setAttribute("src", "Pictures/calendar_20.png");
    img2.setAttribute("alt","20");
  }
  else if(arr2[1] == "21")
  {
    img2.setAttribute("src", "Pictures/calendar_21.png");
    img2.setAttribute("alt","21");
  }
  else if(arr2[1] == "22")
  {
    img2.setAttribute("src", "Pictures/calendar_22.png");
    img2.setAttribute("alt","22");
  }
  else if(arr2[1] == "23")
  {
    img2.setAttribute("src", "Pictures/calendar_23.png");
    img2.setAttribute("alt","23");
  }
  else if(arr2[1] == "24")
  {
    img2.setAttribute("src", "Pictures/calendar_24.png");
    img2.setAttribute("alt","24");
  }
  else if(arr2[1] == "25")
  {
    img2.setAttribute("src", "Pictures/calendar_25.png");
    img2.setAttribute("alt","25");
  }
  else if(arr2[1] == "26")
  {
    img2.setAttribute("src", "Pictures/calendar_26.png");
    img2.setAttribute("alt","26");
  }
  else if(arr2[1] == "27")
  {
    img2.setAttribute("src", "Pictures/calendar_27.png");
    img2.setAttribute("alt","27");
  }
  else if(arr2[1] == "28")
  {
    img2.setAttribute("src", "Pictures/calendar_28.png");
    img2.setAttribute("alt","28");
  }
  else if(arr2[1] == "29")
  {
    img2.setAttribute("src", "Pictures/calendar_29.png");
    img2.setAttribute("alt","29");
  }
  else if(arr2[1] == "30")
  {
    img2.setAttribute("src", "Pictures/calendar_30.png");
    img2.setAttribute("alt","30");
  }
  else if(arr2[1] == "31")
  {
    img2.setAttribute("src", "Pictures/calendar_31.png");
    img2.setAttribute("alt","31");
  }
  document.getElementById("right-container-section-2").appendChild(img2);

  /*Putting the EVENTS2 onto the screen*/
  eventContent2.setAttribute("float","left");
  eventContent2.appendChild(document.createTextNode(qs("events2")));
  document.getElementById("right-container-section-2").appendChild(eventContent2);


  /*Putting the TITLE3 and DATE3 onto the screen*/
  eventTitle3.appendChild(document.createTextNode(qs("title3") + " " + qs("datepicker3")));
  document.getElementById("right-container-section-3").appendChild(eventTitle3);

  if(arr3[1] == "01")
  {
    img3.setAttribute("src", "Pictures/calendar_1.png");
    img3.setAttribute("alt","1");
  }
  else if(arr3[1] == "02")
  {
    img3.setAttribute("src", "Pictures/calendar_2.png");
    img3.setAttribute("alt","2");
  }
  else if(arr3[1] == "03")
  {
    img3.setAttribute("src", "Pictures/calendar_3.png");
    img3.setAttribute("alt","3");
  }
  else if(arr3[1] == "04")
  {
    img3.setAttribute("src", "Pictures/calendar_4.png");
    img3.setAttribute("alt","4");
  }
  else if(arr3[1] == "05")
  {
    img3.setAttribute("src", "Pictures/calendar_5.png");
    img3.setAttribute("alt","5");
  }
  else if(arr3[1] == "06")
  {
    img3.setAttribute("src", "Pictures/calendar_6.png");
    img3.setAttribute("alt","6");
  }
  else if(arr3[1] === "07"){
    img3.setAttribute("src", "Pictures/calendar_7.png");
    img3.setAttribute("alt","7");
  }
  else if(arr3[1] === "08"){
    img3.setAttribute("src", "Pictures/calendar_8.png");
    img3.setAttribute("alt","8");
  }
  else if(arr3[1] === "09" || arr2[1] == "09"){
    img3.setAttribute("src", "Pictures/calendar_9.png");
    img3.setAttribute("alt","9");
  }
  else if(arr3[1] == "10")
  {
    img3.setAttribute("src", "Pictures/calendar_10.png");
    img3.setAttribute("alt","10");
  }
  else if(arr3[1] == "11")
  {
    img3.setAttribute("src", "Pictures/calendar_11.png");
    img3.setAttribute("alt","11");
  }
  else if(arr3[1] == "12")
  {
    img3.setAttribute("src", "Pictures/calendar_12.png");
    img3.setAttribute("alt","12");
  }
  else if(arr3[1] == "13")
  {
    img3.setAttribute("src", "Pictures/calendar_13.png");
    img3.setAttribute("alt","13");
  }
  else if(arr3[1] == "14")
  {
    img3.setAttribute("src", "Pictures/calendar_14.png");
    img3.setAttribute("alt","14");
  }
  else if(arr3[1] == "15")
  {
    img3.setAttribute("src", "Pictures/calendar_15.png");
    img3.setAttribute("alt","15");
  }
  else if(arr3[1] == "16")
  {
    img3.setAttribute("src", "Pictures/calendar_16.png");
    img3.setAttribute("alt","16");
  }
  else if(arr3[1] == "17")
  {
    img3.setAttribute("src", "Pictures/calendar_17.png");
    img3.setAttribute("alt","17");
  }
  else if(arr3[1] == "18")
  {
    img3.setAttribute("src", "Pictures/calendar_18.png");
    img3.setAttribute("alt","18");
  }
  else if(arr3[1] == "19")
  {
    img3.setAttribute("src", "Pictures/calendar_19.png");
    img3.setAttribute("alt","19");
  }
  else if(arr3[1] == "20")
  {
    img3.setAttribute("src", "Pictures/calendar_20.png");
    img3.setAttribute("alt","20");
  }
  else if(arr3[1] == "21")
  {
    img3.setAttribute("src", "Pictures/calendar_21.png");
    img3.setAttribute("alt","21");
  }
  else if(arr3[1] == "22")
  {
    img3.setAttribute("src", "Pictures/calendar_22.png");
    img3.setAttribute("alt","22");
  }
  else if(arr3[1] == "23")
  {
    img3.setAttribute("src", "Pictures/calendar_23.png");
    img3.setAttribute("alt","23");
  }
  else if(arr3[1] == "24")
  {
    img3.setAttribute("src", "Pictures/calendar_24.png");
    img3.setAttribute("alt","24");
  }
  else if(arr3[1] == "25")
  {
    img3.setAttribute("src", "Pictures/calendar_25.png");
    img3.setAttribute("alt","25");
  }
  else if(arr3[1] == "26")
  {
    img3.setAttribute("src", "Pictures/calendar_26.png");
    img3.setAttribute("alt","26");
  }
  else if(arr3[1] == "27")
  {
    img3.setAttribute("src", "Pictures/calendar_27.png");
    img3.setAttribute("alt","27");
  }
  else if(arr3[1] == "28")
  {
    img3.setAttribute("src", "Pictures/calendar_28.png");
    img3.setAttribute("alt","28");
  }
  else if(arr3[1] == "29")
  {
    img3.setAttribute("src", "Pictures/calendar_29.png");
    img3.setAttribute("alt","29");
  }
  else if(arr3[1] == "30")
  {
    img3.setAttribute("src", "Pictures/calendar_30.png");
    img3.setAttribute("alt","30");
  }
  else if(arr3[1] == "31")
  {
    img3.setAttribute("src", "Pictures/calendar_31.png");
    img3.setAttribute("alt","31");
  }
  document.getElementById("right-container-section-3").appendChild(img3);
  /*Putting the EVENTS3 onto the screen*/

  eventContent3.appendChild(document.createTextNode(qs("events3")));
  document.getElementById("right-container-section-3").appendChild(eventContent3);
}
function backgroundMonthPictures() {

}
/*End of show the time function*/

/*Javascript isn't smart enough to have two window.onload functions being used
So I created a function the runs the other two functions so all I have to do
is call windows.onload once*/
function start() {
  initDate();
  showTheTime();
  eventHandler();
}

/*Starts the date and time functions at the same time*/
window.onload = start;
