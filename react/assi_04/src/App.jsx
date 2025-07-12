import React, { useState } from "react";
import Login from "./screens/Login/Login";
import Signup from "./screens/Signup/Signup";

function App() {
  const [showLoginScreen, setShowLoginScreen] = useState(false);

  const toggleAuthScreen = () => {
    setShowLoginScreen((prev) => !prev);
  };

  return (
    <>
      {showLoginScreen ? (
        <Login onToggleAuth={toggleAuthScreen} />
      ) : (
        <Signup onToggleAuth={toggleAuthScreen} />
      )}
    </>
  );
}

export default App;
