import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes/Routes";
import "./App.css";
import { NavBar } from "./components/navbar/NavBar";
import ApolloAppProvider from "./api/ApolloProvider";

function App() {
  return (
    <div className="App">
      <ApolloAppProvider>
        <Router>
          <NavBar />
          <Routes />
        </Router>
      </ApolloAppProvider>
    </div>
  );
}

export default App;
