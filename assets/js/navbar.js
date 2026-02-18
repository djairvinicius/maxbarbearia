fetch("../components/navbar.html")
    .then(Response => Response.text())
    .then(data => {
        document.getElementById("navbar-container").innerHTML = data;
    });