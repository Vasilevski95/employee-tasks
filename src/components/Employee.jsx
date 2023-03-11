import HeaderEmployee from "./Dashboard employees/HeaderEmployee";
import TableEmployee from "./Dashboard employees/TableEmployee";
import EditEmployee from "./Dashboard employees/EditEmployee";
import AddEmployee from "./Dashboard employees/AddEmployee";
import ReadEmployee from "./Dashboard employees/ReadEmployee";

const Employee = ({
  isReadingEmployee,
  setIsReadingEmployee,
  handleReadEmployee,
  handleEditEmployee,
  handleDeleteEmployee,
  selectedEmployee,
  isAddingEmployee,
  setIsAddingEmployee,
  isEditingEmployee,
  setIsEditingEmployee,
  employees,
  setEmployees,
}) => {
  return (
    <div className="employee">
      <div className="container">
        {!isReadingEmployee && !isAddingEmployee && !isEditingEmployee && (
          <>
            <HeaderEmployee setIsAddingEmployee={setIsAddingEmployee} />
            <TableEmployee
              employees={employees}
              handleReadEmployee={handleReadEmployee}
              handleEditEmployee={handleEditEmployee}
              handleDeleteEmployee={handleDeleteEmployee}
            />
          </>
        )}
        {isReadingEmployee && (
          <ReadEmployee
            selectedEmployee={selectedEmployee}
            setIsReadingEmployee={setIsReadingEmployee}
          />
        )}
        {isAddingEmployee && (
          <AddEmployee
            employees={employees}
            setEmployees={setEmployees}
            setIsAddingEmployee={setIsAddingEmployee}
          />
        )}
        {isEditingEmployee && (
          <EditEmployee
            employees={employees}
            selectedEmployee={selectedEmployee}
            setEmployees={setEmployees}
            setIsEditingEmployee={setIsEditingEmployee}
          />
        )}
      </div>
    </div>
  );
};

export default Employee;
