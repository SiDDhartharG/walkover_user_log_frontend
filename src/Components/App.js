import { Home,Landing,Login,Signup } from "./";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route exact="true" path="/" element={<Landing/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
