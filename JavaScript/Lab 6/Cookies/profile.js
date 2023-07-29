if (!getCookie("isRegisteredUser")) {
  navigation.navigate("./register.html");
} else {
  if (hasCookie("pageViews")) {
    const pageViews = Number(getCookie("pageViews")) + 1;
    setCookie("pageViews", pageViews, "31 July 2024");
  } else {
    setCookie("pageViews", 1, "31 July 2024");
  }

  var uname = document.getElementById("userName");
  var views = document.getElementById("views");
  var color = getCookie("color");
  uname.style.color = color;
  views.style.color = color;
  uname.innerText = getCookie("name");
  views.innerText = getCookie("pageViews");

  const containerDiv = document.getElementsByClassName("container")[0];
  const h1 = document.getElementsByTagName("h1")[0];
  const img = document.createElement("img");
  img.src =
    getCookie("gender") === "male" ? "./img/male.jpg" : "./img/female.jpg";
  containerDiv.insertBefore(img, h1);
}
