let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full Access Granted";
} else if (userRole === "manager") {
    accessLevel = "Limited Access Granted";
} else {
    accessLevel = "No Access Level";
}

console.log ("Access Level :" , accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin"){
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please login to access the system";
}

console.log("User Message:", userMessage);

/* This code snippet is using a `switch` statement to determine the `userCategory` based on the value
of the `userType` variable. */
let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Adminsitrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";     
}

console.log("User Category:", userCategory);

/* The code snippet `let isAuthenticated = true; let authenticationStatus = isAuthenticated ?
"Authenticated" : "Not Authenticated";` is using a ternary operator to assign a value to the
variable `authenticationStatus` based on the value of the `isAuthenticated` variable. */
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated";

console.log("Authentication Status:", authenticationStatus);
