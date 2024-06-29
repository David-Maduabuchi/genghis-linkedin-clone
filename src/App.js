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
import SmallScreenHomeHeader from "./components/home-components/smallScreenHomeHeader/SmallScreenHomeHeader";

//Here we define the layout of our dashboard in our App

const HomeLayout = () => {
  return (
    <div className="homeContainer">
      <div className="homeContainerForLargeScreens">
        <div className="home-header-large-screens">
          <HomeHeader />
        </div>
        <div className="content-container">
          <Outlet />
        </div>
      </div>
      
      {/* this is a different container for small screens */}
      <div className="homeContainerForSmallScreens">
        <div className="home-header-small-screens">
          <SmallScreenHomeHeader />
        </div>
        <div className="small-screen-contentContainer">
          <Outlet />
        </div>
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

        {/* Here we are going to set up different routes for our small screens */}
        <Route path="/dashboard/small-connect" element={""}/>
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
