console.log("Script.js is working");
let countries;


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
  countries = await response.json();
  // step 3 - do something with the data
  outputCountries(countries);
}

// the job of this function is to create a html card from the country json object
function createCountryCard(countryObj, i) {
  let htmlContent = `
        <div class="card" onclick="showCountryDetail(${i})">
              <img src= "${countryObj.flags.png}" alt="${countryObj.flags.alt}"/>
              <h3>${countryObj.name.common}</h3>
              <p>${countryObj.population}</p>
              <p>${countryObj.region}</p>
              <p>${countryObj.capital[0]}</p>
            </div>
        `;
  return htmlContent;
}

function createCountryDetailDisplay(countryObj) {
  let htmlContent = `
        <div>
        <button onclick="backButton()">Back</button>
              <img src= "${countryObj.flags.png}" alt="${countryObj.flags.alt}"/>
              <h3>${countryObj.name.common}</h3>
              <p>${countryObj.population}</p>
              <p>${countryObj.region}</p>
              <p>${countryObj.capital[0]}</p>
            </div>
        `;
  return htmlContent;
}

// this function requires that you pass it a list of countries
// for each country in the list it will make a html card and append it
// to the DOM element with an id of output
function outputCountries(countries) {
  let container = document.getElementById("output");
  for (let i = 0; i < countries.length; i++) {
    let htmlContent = createCountryCard(countries[i], i);
    console.log("outputing the next country to the dom", htmlContent)
    container.insertAdjacentHTML("beforeend", htmlContent);
  }
}

function showCountryDetail(i) {
  console.log(i);
   let container = document.getElementById("output");
   container.innerHTML = "";
    let htmlContent = createCountryDetailDisplay(countries[i], i);
     container.insertAdjacentHTML("beforeend", htmlContent);
}

function backButton() {
   let container = document.getElementById("output");
   container.innerHTML = "";
   outputCountries(countries);
}

// invoke/run the fetch function when the page first loads(getCountryData)
getCountryData();
