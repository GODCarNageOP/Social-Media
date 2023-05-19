import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Explore from "./pages/Explore";
import Notifications from "./pages/Notifications";
import Messages from "./pages/Messages";
import Lists from "./pages/Lists";
import Bookmarks from "./pages/Bookmarks";
import TwitterBlue from "./pages/TwitterBlue";
import Profile from "./pages/Profile";
import './App.css'
import More from "./pages/More";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
function App() {
  const Layout = () => {
    return (
      <div className="flex justify-between  h-full app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/explore",
          element: <Explore />,
        },
        {
          path: "/notifications",
          element: <Notifications />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/lists",
          element: <Lists />,
        },
        {
          path: "/Bookmarks",
          element: <Bookmarks />,
        },
        {
          path: "/twitterblue",
          element: <TwitterBlue />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/more",
          element: <More />,
        },
      ],
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;