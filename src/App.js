import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <div className="home-header">
        
      </div>
      <Router>

        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
