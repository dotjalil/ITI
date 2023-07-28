function handleRegisteration() {
  console.log("Hello");
  const userName = document.getElementById("name").value;
  const userAge = document.getElementById("age").value;
  var userGender;
  const genders = document.getElementsByName("gender");
  for (const selection of genders) {
    if (selection.checked) {
      userGender = selection.value;
    }
  }
}
