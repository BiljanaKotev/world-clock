// function selectCity() {
//   alert("hello");
// }

// let selectDropDown = document.getElementById("#select-element");
// selectDropDown.eventAddListener("change", selectCity);

let time = document.querySelector(".date");
time.innerHTML = moment().format("MMM Do YY");
