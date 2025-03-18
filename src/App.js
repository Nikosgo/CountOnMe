import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../src/Common/Components/Home/Home.tsx"
import Profile from "../src/Common/Components/Profile/Profile.tsx"
import Login from "../src/Common/Components/Login/Login.tsx"

function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;
