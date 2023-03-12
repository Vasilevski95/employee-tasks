import React, { useState } from "react";
import Swal from "sweetalert2";

const AddEmployee = ({ employees, setEmployees, setIsAddingEmployee }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");

  const handleAdd = (e) => {
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

    const id = employees.length + 1;
    const newEmployee = {
      id,
      fullName,
      email,
      phone,
      salary,
      date,
    };

    employees.push(newEmployee);
    localStorage.setItem("employees_data", JSON.stringify(employees));
    setEmployees(employees);
    setIsAddingEmployee(false);

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${fullName}  data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Employee</h1>
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
          type="date"
          required
          name="date"
          min="1900-01-01"
          max="2006-01-01"
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
            Add
          </button>
          <button
            style={{ marginLeft: "12px", backgroundColor: "#ff8164" }}
            className="button"
            type="button"
            value="Cancel"
            onClick={() => setIsAddingEmployee(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
