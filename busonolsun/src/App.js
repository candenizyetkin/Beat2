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
      console.log(data); // yanıtın nasıl göründüğünü kontrol et
      setMovies(data.results); // eğer dizi results içindeyse
    });
  }, []);
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<MoviesGrid movies={movies} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
