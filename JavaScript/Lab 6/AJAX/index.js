function handleLoadData() {
  const req = new XMLHttpRequest();
  req.addEventListener("load", handleUserDataResponse);
  req.open("GET", "https://jsonplaceholder.typicode.com/users");
  req.send();
}

function handleUserDataResponse(res) {
  const data = JSON.parse(res.target.responseText);
  console.log(data);
  if (!data) {
    return;
  }

  data.forEach((user) => {
    var table = document.getElementById("table");
    const row = document.createElement("tr");

    const idCell = document.createElement("td");
    idCell.innerText = user.id;
    row.appendChild(idCell);

    const nameCell = document.createElement("td");
    nameCell.innerText = user.name;
    row.appendChild(nameCell);

    const userNameCell = document.createElement("td");
    userNameCell.innerText = user.username;
    row.appendChild(userNameCell);

    const addressCell = document.createElement("td");
    addressCell.innerText =
      user.address.suite +
      ", " +
      user.address.street +
      ", " +
      user.address.city;
    row.appendChild(addressCell);

    const phoneCell = document.createElement("td");
    phoneCell.innerText = user.phone;
    row.appendChild(phoneCell);

    const websiteCell = document.createElement("td");
    websiteCell.innerText = user.website;
    row.appendChild(websiteCell);

    const companyCell = document.createElement("td");
    companyCell.innerText = user.company.name;
    row.appendChild(companyCell);

    table.appendChild(row);
  });
}
