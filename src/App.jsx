import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Styles from "./App.module.css";

import Nav from "./Components/Main/Nav/Nav";
import Landing from "./Pages/Landing/Landing";

function App() {
  return (
    <div className={Styles.App}>
      <BrowserRouter>
        <Nav />
        
        <Routes>
          <Route path={"/"} element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
