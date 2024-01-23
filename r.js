function validateForm() {
    var name = document.forms["registrationForm"]["name"].value;
    var email = document.forms["registrationForm"]["email"].value;
    var password = document.forms["registrationForm"]["password"].value;

    if (name == "" || email == "" || password == "") {
      alert("Please fill in all fields");
      return false;
    }

    alert("Successful Registration");
    return true;
  }