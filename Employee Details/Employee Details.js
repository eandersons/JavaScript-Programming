const employees = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    department: "IT",
    salary: 50000,
    specialization: "Python",
  },
  {
    id: 2,
    name: "Alice Smith",
    age: 28,
    department: "HR",
    salary: 45000,
    specialization: "Humans",
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 35,
    department: "Finance",
    salary: 60000,
    specialization: "Money",
  },
];

function calculateTotalSalaries() {
  const totalSalaries = employees.reduce(
    (total, employee) => total + employee.salary,
    0,
  );
  alert(`Total Salaries: €${totalSalaries}`);
}

function displayEmployees(employeesToDisplay = employees) {
  employeesDetails().innerHTML = employeesToDisplay
    .map((employee) => employeeEntry(employee))
    .join("\n");
}

function displayEmployeesBySpecialization(specialization) {
  displayEmployees(
    employees.filter((employee) => employee.specialization === specialization),
  );
}

function employeesDetails() {
  return document.getElementById("employeesDetails");
}

function employeeEntry(employee) {
  return (
    `<p>${employee.id}: ${employee.name} - ${employee.department} ` +
    `- ${employee.specialization} - €${employee.salary}</p>`
  );
}

function findEmployeeById(employeeId) {
  const foundEmployee = employees.find(
    (employee) => employee.id === employeeId,
  );

  if (foundEmployee) {
    employeesDetails().innerHTML = employeeEntry(foundEmployee);
  } else {
    employeesDetails().innerHTML = `Employee with the Id ${employeeId} was not found`;
  }
}

function displayHrEmployees() {
  displayEmployees(
    employees.filter((employee) => employee.department === "HR"),
  );
}
