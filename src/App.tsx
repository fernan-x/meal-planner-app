import { useState } from "react";
import LoginScreen from "./components/LoginScreen";
import "./assets/scss/index.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Input from "./components/core/Input";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route
            path="/dashboard"
            element={
              <>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  onChange={() => {}}
                  disabled
                />
              </>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
