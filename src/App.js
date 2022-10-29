import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Section from "./components/section/Section";
import Article from "./components/article/Article";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Section />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
