/*
Author: Mitchell Ungar
Date: November 27th 2015
This code deals with the login area of index.html
NOTE
People can still get at the info through the debugger, but it will keep most People
out.
There are three users. Admin, Jessica, and Julie. So far all do the same job,
but maybe in the future they might have different jobs and maybe use a database
to hold values so the can work seperately.
*/
function tricky_win_close() {
    window.opener = top;
    window.close();
}
function login() {
  var user = document.getElementById('username');
  var pass = document.getElementById('password');

  var coruser = "Admin";
  var corpass = "Mitchell";

  var coruser2 = "Jessica";
  var corpass2 = "BJessica";

  var coruser3 = "Julie";
  var corpass3 = "EJulie";

  if(user.value == coruser) {
    if(pass.value == corpass){
      window.alert("You are logged in as " + user.value);
      tricky_win_close();
      window.open("editbuzzboardindex.html");
    }
  }

  if(user.value == coruser3) {
    if(pass.value == corpass3){
      window.alert("You are logged in as " + user.value);
      tricky_win_close();
      window.open("editbuzzboardindex.html");
    }
  }

  if(user.value == coruser2) {
    if(pass.value == corpass2){
      window.alert("You are logged in as " + user.value);
      tricky_win_close();
      window.open("editbuzzboardindex.html");

    } else {
      window.alert("Incorrect username or password");
    }
  } else {
    window.alert("Incorrect username or password");
  }
}
