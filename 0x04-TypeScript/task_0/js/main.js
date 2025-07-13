// student objects
var student1 = {
    firstName: "Alice",
    lastName: "Kamau",
    age: 20,
    location: "Nairobi"
};
var student2 = {
    firstName: "John",
    lastName: "Doe",
    age: 22,
    location: "Lusaka"
};
// Storing them in an array
var studentsList = [student1, student2];
//table element
var table = document.createElement("table");
// table headers
var headerRow = document.createElement("tr");
var nameHeader = document.createElement("th");
nameHeader.textContent = "First Name";
var locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);
// Appending rows for each student
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var nameCell = document.createElement("td");
    nameCell.textContent = student.firstName;
    var locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});
// Appending the table to the document body
document.body.appendChild(table);
