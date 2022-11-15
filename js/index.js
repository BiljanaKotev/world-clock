// function selectCity() {
//   alert("hello");
// }

// let selectDropDown = document.getElementById("#select-element");
// selectDropDown.eventAddListener("change", selectCity);

let dateElement = document.getElementsByClassName("date");
dateElement[0].innerHTML = moment().format("ddd MMM Do YY");
dateElement[1].innerHTML = moment().format("ddd MMM Do YY");

let timeElement = document.getElementsByClassName("time");
timeElement[0].innerHTML = moment().format("hh:mm:ss a");
timeElement[1].innerHTML = moment().format("hh:mm:ss a");
