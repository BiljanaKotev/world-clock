// function dropDownCity(event) {
//   if (event.target.value.length > 0) {

//   }
// }

// let selectElement = document.querySelector("#select-element");
// selectElement.addEventListener("change", dropDownCity);

function updateTimeInterval() {
  let dateElement = document.getElementsByClassName("date");
  dateElement[0].innerHTML = moment.tz("Europe/London").format("ddd MMM Do YY");
  dateElement[1].innerHTML = moment
    .tz("Australia/Sydney")
    .format("ddd MMM Do YY");

  let timeElement = document.getElementsByClassName("time");
  timeElement[0].innerHTML = moment.tz("Europe/London").format("hh:mm:ss");
  timeElement[1].innerHTML = moment.tz("Australia/Sydney").format("hh:mm:ss");

  let timeReference = document.getElementsByClassName("time-reference");
  timeReference[0].innerHTML = moment().format("a");
  timeReference[1].innerHTML = moment().format("a");
}
setInterval(updateTimeInterval, 1000);
