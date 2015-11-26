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
