// from data.js
var tableData = data;

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
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

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
        return sighting.datetime == dateValue
            || sighting.city == cityValue
            || sighting.state == stateValue
            || sighting.country == countryValue
            || sighting.shape == shapeValue
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

    dateElement.property("value", "");
    cityElement.property("value", "");
    stateElement.property("value", "");
    countryElement.property("value", "");
    shapeElement.property("value", "");

  console.log(filteredData);
};
