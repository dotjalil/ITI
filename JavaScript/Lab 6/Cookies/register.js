if (getCookie("isRegisteredUser")) {
  navigation.navigate("./profile.html");
}

function handleRegisteration() {
  const userName = document.getElementById("name").value;
  const userAge = document.getElementById("age").value;
  const color = document.getElementById("color").value;
  var userGender;
  const genders = document.getElementsByName("gender");
  for (const selection of genders) {
    if (selection.checked) {
      userGender = selection.value;
    }
  }

  if (!userName || !userAge || !userGender) {
    alert("Enter valid info");
    return;
  }

  setCookie("name", userName, "31 Jul 2024");
  setCookie("age", userAge, "31 Jul 2024");
  setCookie("color", color, "31 Jul 2024");
  setCookie("gender", userGender, "31 Jul 2024");
  setCookie("isRegisteredUser", true, "31 July 2024");

  navigation.navigate("./profile.html");
}
