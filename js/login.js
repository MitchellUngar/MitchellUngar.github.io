function login() {
  var user = document.getElementById('username');
  var pass = document.getElementById('password');

  var coruser = "Admin";
  var corpass = "Mitchell";

  var coruser2 = "User";
  var corpass2 = "Jessica";

  if(user.value == coruser) {
    if(pass.value == corpass){
      window.alert("You are logged in as " + user.value);
      window.open("editbuzzboardindex.html");
    } else {
      window.alert("Incorrect username or password");
    }
  } else {
    window.alert("Incorrect username or password");
  }
}
