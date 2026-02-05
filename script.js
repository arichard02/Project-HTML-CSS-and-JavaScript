console.log("Script.js is working");

// toggle light/dark mode
function toggleTheme() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

// anytime you use a promise it has to be in an async function
// await = do not move on to the next statement until the 
// promise has finished its statement and given you its data
// get information from api
async function getCountryData() {
  // step 1 - fetch the response header
  let response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags",
  );
  // step 2 - then retrive the response data (payload)
  let countries = await response.json();
  // step 3 - do something with the data
  outputCountries(countries);
}

// this function requires that you pass it a list of countries
// for each country in the list it will make a html card and append it
// to the DOM element with an id of output
function outputCountries(countries) {
  let container = document.getElementById("output");
  for (let i = 0; i < countries.length; i++) {
    let htmlContent = `
        <div class="card" onclick="showCountryDetail(${i})">
              <img src= "${countries[i].flags.png}" alt="${countries[i].flags.alt}"/>
              <h3>${countries[i].name.common}</h3>
              <p>${countries[i].population}</p>
              <p>${countries[i].region}</p>
              <p>${countries[i].capital[0]}</p>
            </div>
        `;
    container.insertAdjacentHTML("beforeend", htmlContent);
  }
}

function showCountryDetail (i) {
console.log(i);
}

// invoke/run the fetch function when the page first loads(getCountryData)
getCountryData();  