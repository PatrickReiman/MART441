var table = document.getElementsByTagName("table")[0];
var days = ["M", "T", "W", "TH", "F", "S", "SU"];
var times = ["6-8AM", "8-10AM", "10-12PM", "12-1PM", "1-3PM", 
             "3-5PM", "5-7PM", "7-9PM", "9-11PM"];
var headerRow = document.createElement("tr");
table.appendChild(headerRow);
var emptyCell = document.createElement("th");
emptyCell.innerHTML = '';
headerRow.appendChild(emptyCell);


for (var day = 1; day <= days.length; day++) {
    var th = document.createElement("th");
    th.innerHTML = days[day - 1];
    headerRow.appendChild(th);
}

for (var time = 1; time <= times.length; time++) {
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.innerHTML = times[time - 1];
    table.appendChild(tr);
    tr.appendChild(td);
}

for (var time = 1; time <= times.length; time++) {
    var tr = document.querySelector("tr")[i];
    table.appendChild(tr);
    for (var day = 1; day <= days.length; day++) {
        var td = document.createElement("td");
        td.innerHTML = "<input type='checkbox' />"
        tr.appendChild(td);
    }
}