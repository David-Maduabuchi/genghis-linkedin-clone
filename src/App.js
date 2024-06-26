import "./App.scss";
import { 
  Route,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import HomeHeader from "./components/home-components/HomeHeader/HomeHeader";

//Here we define the layout of our dashboard in our App

const HomeLayout = () => {
  return (
    <div className="homeContainer">
      <div className="home-header">
        <HomeHeader />
      </div>
      <div className="content-container">
        <Outlet />
      </div>
    </div>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard/" element={<HomeLayout />}>
        <Route path="/dashboard/home" element={<Home />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
