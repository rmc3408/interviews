import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CandidateRegistration from "./components/CandidateRegistration";
import CandidateList from "./components/CandidateList";

function App() {
  return (
    // Hint: Implement routing and modify this file to render correct components as per requirements.
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/candidates/registration" element={<CandidateRegistration />} />
          <Route path="/candidates/list" element={<CandidateList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
