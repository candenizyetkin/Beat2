import React from "react";
import "../css/styles.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">
        © {currentYear} Beatmovies, Tüm hakları saklıdır.
      </p>
    </footer>
  );
}
