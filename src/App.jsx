// Main Page
import { useState } from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "../routes";

function App() {
  // route
  const router = useRoutes(routes);

  return (
    <>
      <div className="app">{router}</div>
    </>
  );
}

export default App;
