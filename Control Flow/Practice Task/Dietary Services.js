let isAuthenticated = true;
let userType = "Enrolled Member";
let userMessage;

if (isAuthenticated) {
  switch (userType) {
    case "Employee":
      userMessage = "You are eligible to Dietary Services.";
      break;
    case "Enrolled Member":
      userMessage =
        "You are eligible to Dietary Services and one-on-one " +
        "interaction with a dietician.";
      break;
    case "Subscriber":
      userMessage = "You are eligible to partial access to Dietary Services.";
      break;
    case "Non-Subscriber":
    default:
      userMessage =
        "You need to enroll or at least subscribe to Dietary " + "Services!";
  }
} else {
  userMessage = "You need to log in to access Dietary Services!";
}

console.log("User Message:", userMessage);
