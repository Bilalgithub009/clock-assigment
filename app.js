
var hour = document.getElementById("hour");
var minute = document.getElementById("min");
var second = document.getElementById("sec");
var am_pm = document.getElementById("ap");
var date = document.getElementById("date");

setInterval(function () {
  var currentDate = new Date();
  if (currentDate.getHours() < 12) {
    hour.innerText = currentDate.getHours() + ":";
  } else {
    hour.innerText = currentDate.getHours() - 12 + ":";
  }
  if (currentDate.getMinutes() < 10) {
    minute.innerText = "0" + currentDate.getMinutes()

  } else {
    minute.innerText = currentDate.getMinutes();
  }

  if (currentDate.getSeconds() < 10) {
    second.innerText = currentDate.getSeconds();

  } else {
    second.innerText = currentDate.getSeconds();
  }
  if (currentDate.getHours() < 12) {
    am_pm.innerText = 'A.M';
  } else {
    am_pm.innerText = "PM";
  }

  var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  var months = ["jan", "feb", "march", "apr", "may", "june", "july", "aug", "sep", "oct", "nov", "dec"];

  date.innerText = days[currentDate.getDay()] + " " + currentDate.getDate() + " " + months[currentDate.getMonth()] + " ," + currentDate.getFullYear();

}, 1000);
