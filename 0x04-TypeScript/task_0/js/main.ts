// Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// student objects
const student1: Student = {
  firstName: "Alice",
  lastName: "Kamau",
  age: 20,
  location: "Nairobi"
};

const student2: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 22,
  location: "Lusaka"
};

// Storing them in an array
const studentsList: Student[] = [student1, student2];

//table element
const table = document.createElement("table");

// table headers
const headerRow = document.createElement("tr");
const nameHeader = document.createElement("th");
nameHeader.textContent = "First Name";
const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// Appending rows for each student
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Appending the table to the document body
document.body.appendChild(table);
