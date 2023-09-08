// Get the current day of the week
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const today = new Date();
const currentDayOfTheWeek = daysOfWeek[today.getDay()];

// Get the current UTC time
const utcHours = today.getUTCHours().toString().padStart(2, "0");
const utcMinutes = today.getUTCMinutes().toString().padStart(2, "0");
const utcSeconds = today.getUTCSeconds().toString().padStart(2, "0");

// Display the day of the week and UTC time in the HTML
document.getElementById("currentDayOfTheWeek").textContent =
  currentDayOfTheWeek;
document.getElementById(
  "currrentUTCTime"
).textContent = `${utcHours}:${utcMinutes}:${utcSeconds}`;
