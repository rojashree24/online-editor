import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function (props) {
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  if (authMode === "signin") {
    return (
    <Login/>
        )
  }

  return (
    <Register/>
  );
}
