import React from "react";
import "../css/styles.css";

export default function Header() {
  return (
    <div className="header">
      <img
        className="logo"
        src={require("../Vıdeo.svg").default}
        alt="beatmovies"
      />
    </div>
  );
}
