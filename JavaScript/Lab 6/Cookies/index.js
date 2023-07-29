if (getCookie("isRegisteredUser")) {
  navigation.navigate("./profile.html");
} else {
  navigation.navigate("./register.html");
}
