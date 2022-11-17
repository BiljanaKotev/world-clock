// function dropDownCity(event) {
//   if (event.target.value.length > 0) {

//   }
// }

// let selectElement = document.querySelector("#select-element");
// selectElement.addEventListener("change", dropDownCity);

function updateTimeInterval() {
  let dateElement = document.getElementsByClassName("date");
  dateElement[0].innerHTML = moment()
    .tz("Europe/London")
    .format("ddd MMM Do YY");
  dateElement[1].innerHTML = moment()
    .tz("Australia/Sydney")
    .format("ddd MMM Do YY");

  let timeElement = document.getElementsByClassName("time");
  timeElement[0].innerHTML = moment().tz("Europe/London").format("HH:mm:ss");
  timeElement[1].innerHTML = moment().tz("Australia/Sydney").format("HH:mm:ss");

  let timeReference = document.getElementsByClassName("time-reference");
  timeReference[0].innerHTML = moment().tz("Europe/London").format("a");
  timeReference[1].innerHTML = moment().tz("Australia/Sydney").format("a");
}
setInterval(updateTimeInterval, 1000);

function dropDownCity(event) {
  let timeZone = event.target.value;
  let cityTimeZone = moment().tz(timeZone);
  let cityName = timeZone.replace("_", " ").split("/")[1];
  let timeReference = moment().format("a");
  let citiesContainer = document.querySelector("#cities-container");
  citiesContainer.innerHTML = ` <div class="city-container">
            <div class="city-heading">
               <h3>${cityName}</h3>
               <div><date class="date">${cityTimeZone.format(
                 "ddd MMM Do YY"
               )}</date></div>
           </div>
            <div class="time-container">
             <time class="time">${cityTimeZone.format("h:mm:ss")}</time>
               <div class="time-reference-container">
               <small class="time-reference">${timeReference}</small>
              </div>
            </div>
          </div>`;
}

let dropDownSelect = document.querySelector("#select-element");
dropDownSelect.addEventListener("change", dropDownCity);
