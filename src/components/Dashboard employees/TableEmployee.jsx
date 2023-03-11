import React from "react";

const TableEmployee = ({
  employees,
  handleReadEmployee,
  handleEditEmployee,
  handleDeleteEmployee,
}) => {
  employees.forEach((employee, i) => {
    employee.id = i + 1;
  });

  return (
    <div className="contain-table">
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
            employees.map((employee, i) => (
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
                    style={{ backgroundColor: "	#4caf50" }}
                    onClick={() => handleEditEmployee(employee.id)}
                    className="button"
                  >
                    Edit
                  </button>
                  <button
                    style={{ backgroundColor: "#f44336" }}
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
