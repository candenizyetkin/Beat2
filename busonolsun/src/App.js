/*

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./css/styles.css";
import MoviesGrid from "./components/MoviesGrid";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("movies.json").then((data) => {
      setMovies(data);
    });
  }, []);
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="content">
          <Router>
            <Routes>
              <Route path="/" element={<MoviesGrid movies={movies} />}>
                {" "}
              </Route>
            </Routes>
          </Router>
          <MoviesGrid>movies={movies}</MoviesGrid>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
*/

// App.js
import "./App.css";
import "./css/styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/movies.json")
      .then((res) => res.json()) // JSON parse
      .then((data) => setMovies(data)) // data bir dizi olmalı
      .catch((err) => console.error("Fetch hata:", err));
  }, []);

  return (
    <Router>
      <div className="wrapper">
        <Header />

        <main className="content">
          <Routes>
            <Route path="/" element={<MoviesGrid movies={movies} />} />
            <Route
              path="/genre/:genre"
              element={<MoviesGrid movies={movies} />}
            />
            <Route path="*" element={<MoviesGrid movies={movies} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
