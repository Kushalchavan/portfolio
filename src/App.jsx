import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./App.css";

const App = () => {
  return (
    <main>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contacts />
    </main>
  );
};

export default App;
