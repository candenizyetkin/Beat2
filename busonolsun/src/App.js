import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./css/styles.css";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="content"></main>
        <Footer />
      </div>
    </>
  );
}

export default App;
