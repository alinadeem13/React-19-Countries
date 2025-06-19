import "../../../src/App.css";
import React from "react";

export const Loader = () => {
  return (
    <div className="justify-center items-center flex h-screen">
      <div className="loader">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
};
