import "./App.css";
import Layout from "./components/Layout";
import Employee from "./components/Employee";
import { Route, Routes } from "react-router-dom";
import Tasks from "./components/Tasks";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Employee />} />
        <Route path="tasks">
          <Route index element={<Tasks />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
