// EXERCISE 30 (HELLO ADMIN).
var usernames = ["admin", "user1", "user2", "user3", "user4"];
usernames.forEach(function (username) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", welcome back! thank you for logging in again."));
    }
});
