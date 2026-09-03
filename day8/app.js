function getUsers() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhr.onload = function () {
        if (xhr.status == 200) {
            var users = JSON.parse(xhr.responseText);

            var result = document.getElementById("result");

            result.innerHTML = "";

            for (var i = 0; i < users.length; i++) {
                result.innerHTML +=
                    "<p>" +
                    users[i].id + " - " +
                    users[i].name +
                    "</p>";
            }
        }
    };

    xhr.send();
}


function addUser() {
    var xhr = new XMLHttpRequest();

    xhr.open("POST", "https://jsonplaceholder.typicode.com/users");

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
        if (xhr.status == 201) {
            var user = JSON.parse(xhr.responseText);

            document.getElementById("result").innerHTML =
                "<p>Added User: " + user.name + "</p>";
        }
    };

    var user = {
        name: "Mohanad",
        email: "mohanad@example.com"
    };

    xhr.send(JSON.stringify(user));
}


function updateUser() {
    var xhr = new XMLHttpRequest();

    xhr.open("PUT", "https://jsonplaceholder.typicode.com/users/1");

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
        if (xhr.status == 200) {
            var user = JSON.parse(xhr.responseText);

            document.getElementById("result").innerHTML =
                "<p>Updated User: " + user.name + "</p>";
        }
    };

    var user = {
        name: "Updated User",
        email: "updated@example.com"
    };

    xhr.send(JSON.stringify(user));
}


function deleteUser() {
    var xhr = new XMLHttpRequest();

    xhr.open("DELETE", "https://jsonplaceholder.typicode.com/users/1");

    xhr.onload = function () {
        if (xhr.status == 200) {
            document.getElementById("result").innerHTML =
                "<p>User Deleted Successfully</p>";
        }
    };

    xhr.send();
}