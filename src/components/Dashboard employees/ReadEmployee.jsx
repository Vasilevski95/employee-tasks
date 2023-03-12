const ReadEmployee = ({ selectedEmployee, setIsReadingEmployee }) => {
  const { firstName, lastName, email, salary, date } = selectedEmployee;

  return (
    <div className="read-employee">
      <h1>Firstname: {firstName}</h1>
      <h1>Lastname: {lastName}</h1>
      <h1>Email: {email}</h1>
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
