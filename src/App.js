import "./App.css";
import Layout from "./components/Layout";
import Employee from "./components/Employee";
import { Route, Routes } from "react-router-dom";
import Tasks from "./components/Tasks";
import Top5 from "./components/Top5";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Employee />} />
        <Route path="tasks">
          <Route index element={<Tasks />} />
        </Route>
        <Route path="top5">
          <Route index element={<Top5 />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
