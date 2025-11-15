import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import SignUp from "./signup.jsx";
import Login from "./Login.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Default route → redirect to signup */}  
        <Route path="/" element={<Navigate to="/signup" />} />

        {/* Pages */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;


