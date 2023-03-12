import React from "react";

const TableEmployee = ({
  employees,
  handleReadEmployee,
  handleEditEmployee,
  handleDeleteEmployee,
  searchQuery,
  setSearchQuery,
}) => {
  employees.forEach((employee, i) => {
    employee.id = i + 1;
  });

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.salary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.date.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="contain-table">
      <input
        type="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search employees..."
      />
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Date of birth</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            filteredEmployees.map((employee, i) => (
              <tr key={employee.id}>
                <td>{i + 1}.</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.salary} din</td>
                <td>{employee.date} </td>
                <td className="text-right">
                  <button
                    style={{ backgroundColor: "lightblue" }}
                    onClick={() => handleReadEmployee(employee.id)}
                    className="button"
                  >
                    Read
                  </button>
                  <button
                    style={{ backgroundColor: "lightgreen" }}
                    onClick={() => handleEditEmployee(employee.id)}
                    className="button"
                  >
                    Edit
                  </button>
                  <button
                    style={{ backgroundColor: "#ff8164" }}
                    onClick={() => handleDeleteEmployee(employee.id)}
                    className="button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Employees</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableEmployee;
