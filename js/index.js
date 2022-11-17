function updateTimeInterval() {
  let dateElement = document.getElementsByClassName("date");
  let timeElement = document.getElementsByClassName("time");
  let timeReference = document.getElementsByClassName("time-reference");

  dateElement[0].innerHTML = moment()
    .tz("Europe/London")
    .format("ddd MMM Do YY");

  if (dateElement[1]) {
    dateElement[1].innerHTML = moment()
      .tz("Australia/Sydney")
      .format("ddd MMM Do YY");
  }

  timeElement[0].innerHTML = moment().tz("Europe/London").format("HH:mm:ss");

  if (timeElement[1]) {
    timeElement[1].innerHTML = moment()
      .tz("Australia/Sydney")
      .format("HH:mm:ss");
  }

  timeReference[0].innerHTML = moment().tz("Europe/London").format("a");

  if (timeReference[1]) {
    timeReference[1].innerHTML = moment().tz("Australia/Sydney").format("a");
  }
}
updateTimeInterval();
setInterval(updateTimeInterval, 1000);

function dropDownCity(event) {
  let timeZone = event.target.value;
  if (timeZone === "current") {
    timeZone = moment.tz.guess();
  }
  let cityTimeZone = moment().tz(timeZone);
  let cityName = timeZone.replace("_", " ").split("/")[1];
  let timeReference = moment().tz(timeZone).format("a");
  let citiesContainer = document.querySelector("#cities-container");
  citiesContainer.innerHTML = ` 
  <div id="cities-container">
  <div class="city-container">
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
          </div></div>`;
}

let dropDownSelect = document.querySelector("#select-element");
dropDownSelect.addEventListener("change", dropDownCity);
