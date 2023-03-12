const ReadEmployee = ({ selectedEmployee, setIsReadingEmployee }) => {
  const { fullName, email, phone, salary, date } = selectedEmployee;

  return (
    <div className="read-employee">
      <h1>Full name: {fullName}</h1>
      <h1>Email: {email}</h1>
      <h1>Phone: {phone}</h1>
      <h1>Salary: {salary} din</h1>
      <h1>Date of birth: {date}</h1>
      <button
        style={{ backgroundColor: "lightblue" }}
        className="button"
        onClick={() => setIsReadingEmployee(false)}
      >
        Back to Employees
      </button>
    </div>
  );
};

export default ReadEmployee;
