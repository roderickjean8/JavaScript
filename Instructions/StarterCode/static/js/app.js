// from data.js
var tableData = data;

// YOUR CODE HERE!
var dateInput = d3.select("#datetime");
var outputufotable = d3.select("#ufo-table");
var filterBtn = d3.select("#filter-btn");

function resetTable() {
  var reset = d3.select("#reset-btn");
  
  reset.on("click", function() {
    document.getElementById("table-body").innerHTML = "";
    console.log("Reseting table!")
  });
  };
outputufotable.select("tbody")
.selectAll("tr")
.data(tableData)
.enter()
.append("tr")
.html(function(d)
    {
    return `<td>${d.datetime}</td>
            <td>${d.city}</td>
            <td>${d.state}</td>
            <td>${d.country}</td>
            <td>${d.shape}</td>
            <td>${d.durationMinutes}</td>
            <td>${d.comments}</td>`;    
    });

filterBtn.on("click", filterDate);