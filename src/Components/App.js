import { Home, Landing, Login, Signup, TableView, CreateTable } from "./";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route exact="true" path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/table/:tablename" element={<TableView />} />
        <Route path="/create-table" element={<CreateTable />} />
      </Routes>
    </>
  );
}

export default App;
