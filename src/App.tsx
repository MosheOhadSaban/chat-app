import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import ChatPage from "./components/Pages/ChatPage/ChatPage";
import Login from "./components/Pages/HomePage/home-page.components/Login/Login";
import Register from "./components/Pages/HomePage/home-page.components/Register/Register";
import HomePage from "./components/Pages/HomePage/HomePage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
        </Route>
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
