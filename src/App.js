import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
import About from "./Page/About/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/About" element={< About />} />
      </Routes>
    </div>
  );
}

export default App;
