import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../src/Common/Components/Home/Home.tsx"
import Profile from "../src/Common/Components/Profile/Profile.tsx"

function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    </Router>
  );
}

export default App;
