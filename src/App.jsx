import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import Crud from "./components/Crud";

const App = () => {
  const themeState = useSelector((store) => store.themeSlice);
  return (
    <div
      className={
        themeState.isLightTheme ? "app text-bg-light" : "app text-bg-dark"
      }
    >
      <Header />
      <Crud />
    </div>
  );
};

export default App;
