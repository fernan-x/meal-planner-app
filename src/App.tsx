import { useState } from "react";
import "./assets/scss/index.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Input from "./components/core/Input";
import Container from "./components/core/Container";
import SplashScreen from "./components/SplashScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route
            path="/dashboard"
            element={
              <Container>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  onChange={() => {}}
                  disabled
                />
              </Container>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
