import React, { useState } from "react";
import Swal from "sweetalert2";

const EditEmployee = ({
  employees,
  selectedEmployee,
  setEmployees,
  setIsEditingEmployee,
}) => {
  const id = selectedEmployee.id;

  const [fullName, setFullName] = useState(selectedEmployee.fullName);
  const [email, setEmail] = useState(selectedEmployee.email);
  const [phone, setPhone] = useState(selectedEmployee.phone);
  const [salary, setSalary] = useState(selectedEmployee.salary);
  const [date, setDate] = useState(selectedEmployee.date);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!fullName || !email || !phone || !salary || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    if (
      !/^(?:\+?\d{1,3}[-. (]?\d{3}[-. )]?\d{3}[-. ]?\d{4}|\d{3}-\d{7})$/.test(
        phone
      )
    ) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Phone number must be in the valid format or XXX-XXXXXXX",
        showConfirmButton: true,
      });
    }

    const employee = {
      id,
      fullName,

      email,
      phone,
      salary,
      date,
    };

    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        employees.splice(i, 1, employee);
        break;
      }
    }

    localStorage.setItem("employees_data", JSON.stringify(employees));
    setEmployees(employees);
    setIsEditingEmployee(false);

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${employee.fullName}  data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Employee</h1>
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          type="text"
          name="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label htmlFor="salary">Salary (din/month)</label>
        <input
          id="salary"
          type="number"
          name="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <label htmlFor="date">Date of birth</label>
        <input
          id="date"
          name="begin"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <div style={{ marginTop: "30px" }}>
          <button
            style={{ backgroundColor: "lightgreen" }}
            type="submit"
            className="button"
            value="Update"
          >
            Update
          </button>
          <button
            style={{ marginLeft: "12px", backgroundColor: "#ff8164" }}
            className="button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditingEmployee(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
