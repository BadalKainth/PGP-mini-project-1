import React from "react";
import { Route, Routes } from "react-router-dom";
import Screen1 from "./Screens/Screen1";
import Screen2 from "./Screens/Screen2";

function App() {
  return (
    <>
      <div>
        <Routes
          style={{
            margin: "100px",
          }}
        >
          <Route path="/" element={<Screen1 />} />
          <Route path="/screen2" element={<Screen2 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
