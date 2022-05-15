import { Home, Landing, Login, Signup, TableView, CreateTable } from "./";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (localStorage.getItem("token") && localStorage.getItem("token") !== "") {
  //     navigate("/home");
  //   } else {
  //     navigate("/");
  //   }
  // }, []);
  return (
    <>
      <Routes>
        <Route exact="true" path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/table/:tablename" element={<TableView />} />
        <Route path="/createtable" element={<CreateTable />}/>
      </Routes>
    </>
  );
}

export default App;
