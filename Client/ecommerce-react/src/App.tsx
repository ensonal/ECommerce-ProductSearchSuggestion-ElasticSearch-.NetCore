import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes/Routes";
import "./App.css";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
