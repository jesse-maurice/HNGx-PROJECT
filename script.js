function updateDateTime() {
  // Get the current date
  const today = new Date();

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
  const dayOfWeek = daysOfWeek[today.getDay()];
  const utcTimeMilliseconds = today.getTime();
  const utcHours = today.getUTCHours().toString().padStart(2, "0");
  const utcMinutes = today.getUTCMinutes().toString().padStart(2, "0");
  const utcSeconds = today.getUTCSeconds().toString().padStart(2, "0");


  document.querySelector("#currentDayOfTheWeek").textContent = dayOfWeek;
  document.querySelector("#currentUTCTime").textContent =
    utcTimeMilliseconds.toString();
}


updateDateTime();

setInterval(updateDateTime, 100);
