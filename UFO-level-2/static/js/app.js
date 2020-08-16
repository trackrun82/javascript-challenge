// from data.js
var tableData = data;

// form array of unique dates
var dates = tableData.map(dates => dates.datetime)
var uniqueDates = dates.filter((x, ind, arr) => arr.indexOf(x) === ind)
// Append dates to dropdown
uniqueDates.forEach(function(date) {
  var dateDropdown = d3.select("#datetime").append("option");
  dateDropdown.text(date);
});

// form array of unique city names
var cities = tableData.map(cityName => cityName.city)
var uniqueCities = cities.filter((x, ind, arr) => arr.indexOf(x) === ind)
// Append cities to dropdown
uniqueCities.forEach(function(city) {
  var cityDropdown = d3.select("#city").append("option");
  cityDropdown.text(city);
});

// form array of unique state names
var states = tableData.map(stateName => stateName.state)
var uniqueStates = states.filter((x, ind, arr) => arr.indexOf(x) === ind)
// Append states to dropdown
uniqueStates.forEach(function(state) {
  var stateDropdown = d3.select("#state").append("option");
  stateDropdown.text(state);
});

// form array of unique country names
var countries = tableData.map(countryName => countryName.country)
var uniqueCountries = countries.filter((x, ind, arr) => arr.indexOf(x) === ind)
// Append countries to dropdown
uniqueCountries.forEach(function(country) {
  var countryDropdown = d3.select("#country").append("option");
  countryDropdown.text(country);
});

// form array of unique shape names
var shapes = tableData.map(shapeName => shapeName.shape)
var uniqueShapes = shapes.filter((x, ind, arr) => arr.indexOf(x) === ind)
// Append shapes to dropdown
uniqueShapes.forEach(function(shape) {
  var shapeDropdown = d3.select("#shape").append("option");
  shapeDropdown.text(shape);
});

// Get a reference to the table body
var tbody = d3.select("tbody");

// Append data to table
tableData.map(sighting => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});

// Select the button
var button = d3.select("#filter-btn");

// Select the form
// var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
// form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the date element and get the raw HTML node
    var dateElement = d3.select("#datetime");
    // Get the value property of the date element
    var dateValue = dateElement.property("value");

    // Select the city element and get the raw HTML node
    var cityElement = d3.select("#city");
    // Get the value property of the city element
    var cityValue = cityElement.property("value");

    // Select the state element and get the raw HTML node
    var stateElement = d3.select("#state");
    // Get the value property of the state element
    var stateValue = stateElement.property("value");

    // Select the country element and get the raw HTML node
    var countryElement = d3.select("#country");
    // Get the value property of the country element
    var countryValue = countryElement.property("value");

    // Select the shape element and get the raw HTML node
    var shapeElement = d3.select("#shape");
    // Get the value property of the country element
    var shapeValue = shapeElement.property("value");
    
    var filteredData = tableData.filter(function(sighting){
      if (dateValue!==""){
        if (cityValue!=="" && stateValue!=="" && countryValue!=="" && shapeValue!==""){
          return sighting.datetime === dateValue
          && sighting.city === cityValue
          && sighting.state === stateValue
          && sighting.country === countryValue
          && sighting.shape === shapeValue
        }
        else if (cityValue!=="" && stateValue!=="" && countryValue!==""){
          return sighting.datetime === dateValue
          && sighting.city === cityValue
          && sighting.state === stateValue
          && sighting.country === countryValue
        }
        else if (cityValue!=="" && stateValue!=="" && shapeValue!==""){
          return sighting.datetime === dateValue
          && sighting.city === cityValue
          && sighting.state === stateValue
          && sighting.shape === shapeValue
        }
        else if (cityValue!=="" && countryValue!=="" && shapeValue!==""){
          return sighting.datetime === dateValue
          && sighting.city === cityValue
          && sighting.country === countryValue
          && sighting.shape === shapeValue
        }
        else if (stateValue!=="" && countryValue!=="" && shapeValue!==""){
          return sighting.datetime === dateValue
          && sighting.state === stateValue
          && sighting.country === countryValue
          && sighting.shape === shapeValue
        }
        else if (cityValue!=="" && stateValue!==""){
          return sighting.datetime === dateValue
          && sighting.city === cityValue
          && sighting.state === stateValue
        }
        else if (cityValue!=="" && countryValue!==""){
          return sighting.datetime === dateValue
          && sighting.city === cityValue
          && sighting.country === countryValue
        }
        else if (cityValue!=="" && shapeValue!==""){
          return sighting.datetime === dateValue
          && sighting.city === cityValue
          && sighting.shape === shapeValue
        }
        else if (shapeValue!=="" && stateValue!==""){
          return sighting.datetime === dateValue
          && sighting.shape === shapeValue
          && sighting.state === stateValue
        }
        else if (countryValue!=="" && stateValue!==""){
          return sighting.datetime === dateValue
          && sighting.country === countryValue
          && sighting.state === stateValue
        }
        else if (countryValue!=="" && shapeValue!==""){
          return sighting.datetime === dateValue
          && sighting.country === countryValue
          && sighting.shape === shapeValue
        }
        else if (cityValue!==""){
          return sighting.datetime === dateValue
          && sighting.city === cityValue
        }
        else if (stateValue!==""){
          return sighting.datetime === dateValue
          && sighting.state === stateValue
        }
        else if (countryValue!==""){
          return sighting.datetime === dateValue
          && sighting.country === countryValue
        }
        else if (shapeValue!==""){
          return sighting.datetime === dateValue
          && sighting.shape === shapeValue
        }
        else{
          return sighting.datetime === dateValue;
        }
      };
      
      if (cityValue!==""){
        if (stateValue!=="" && countryValue!=="" && shapeValue!==""){
          return sighting.city === cityValue
          && sighting.state === stateValue
          && sighting.country === countryValue
          && sighting.shape === shapeValue
        }
        else if (stateValue!=="" && countryValue!==""){
          return sighting.city === cityValue
          && sighting.state === stateValue
          && sighting.country === countryValue
        }
        else if (stateValue!=="" && shapeValue!==""){
          return sighting.city === cityValue
          && sighting.state === stateValue
          && sighting.shape === shapeValue
        }
        else if (shapeValue!=="" && countryValue!==""){
          return sighting.city === cityValue
          && sighting.shape === shapeValue
          && sighting.country === countryValue
        }
        else if (stateValue!==""){
          return sighting.city === cityValue
          && sighting.state === stateValue
        }
        else if (countryValue!==""){
          return sighting.city === cityValue
          && sighting.country === countryValue
        }
        else if (shapeValue!==""){
          return sighting.city === cityValue
          && sighting.shape === shapeValue
        }
        else{
          return sighting.city === cityValue;
        }
      };

      if (stateValue!==""){
        if (countryValue!=="" && shapeValue!==""){
          return sighting.state === stateValue
          && sighting.country === countryValue
          && sighting.shape === shapeValue
        }
        else if (countryValue!==""){
          return sighting.state === stateValue
          && sighting.country === countryValue
        }
        else if (shapeValue!==""){
          return sighting.state === stateValue
          && sighting.shape === shapeValue
        }
        else{
          return sighting.state === stateValue;
        }
      };

      if (countryValue!==""){
        if (shapeValue!==""){
          return sighting.country === countryValue
          && sighting.shape === shapeValue
        }
        else{
          return sighting.country === countryValue;
        }
      };

      if (shapeValue!==""){
        return sighting.shape === shapeValue
      }

    });

    // remove any children from the table
    tbody.html("");

    filteredData.map(sighting => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

    // dateElement.property("value", "Select a date");
    // cityElement.property("value", "");
    // stateElement.property("value", "");
    // countryElement.property("value", "");
    // shapeElement.property("value", "");

  // console.log(filteredData);
};
