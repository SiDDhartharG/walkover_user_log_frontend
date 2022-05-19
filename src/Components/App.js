import { Home, Landing, Login, Signup, TableView, CreateTable } from "./";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
function App() {
  const navigate = useNavigate();
  
  // useEffect(() => {
  //   if (localStorage.getItem("token") && localStorage.getItem("token") !== "") {
  //     navigate("/home");
  //   } else {
  //     navigate("/");
  //   }
  // }, []);
  const [userDetails,setUserDetails]=useState({
    email:"",
    username:"",
    tables:[]
  })
  useEffect(()=>{
     
     if(localStorage.getItem("token"))
     {
       const token=localStorage.getItem("token");
       const user=jwtDecode(token);
       console.log(user);
       setUserDetails({
         username:user.userName,
         email:user.email
       })
     }
  },[])
  return (
    <>
      <Routes>
        <Route exact="true" path="/" element={<Landing />} />
        <Route path="/home" element={<Home userDetails={userDetails}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/table/:tablename" element={<TableView />} />
        <Route path="/createtable" element={<CreateTable />}/>
      </Routes>
    </>
  );
}

export default App;
