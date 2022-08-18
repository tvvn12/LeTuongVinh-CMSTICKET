import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./component/MainLayout/MainLayout";
import Home from "./page/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout></MainLayout>}>
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
