import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      Hi I am him
      <Router>
        <Routes>
          <Route path={"/home"} element={<Home />}/>
        </Routes>
        </Router>
    </div>
  );
};

export default Home;
