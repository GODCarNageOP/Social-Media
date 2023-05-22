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
import More from "./pages/More";
import Profile from "./pages/profile/Profile";
import Settings from "./pages/Settings";
import './App.css'
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup/Signup";
import { useState } from "react";
import CreateYouAccount from "./pages/Auth/Signup/CreateAccount";
import Step2 from "./pages/Auth/Signup/Step2";
import Step3 from "./pages/Auth/Signup/Step3";
function App() {
  const Layout = () => {
    const [isloggedIn, setIsLoggedIn] = useState<boolean>(false);
    return (
      <div className="flex gap-2 h-full app">
       
              {/* <Navbar /> */}
              <Outlet />
              {/* <Footer /> */}
          
        
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
          path: "/create/account",
          element: <CreateYouAccount />,
        },
        {
          path: "/step/2",
          element: <Step2 />,
        },
        {
          path: "/step/3",
          element: <Step3 />,
        },
        {
          path: "/following",
          element: <Home />,
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
          path: "/profile",
          element: <Profile />,
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
          path: "/more",
          element: <More />,
        },

        {
          path: "/profile/with_replies",
          element: <Profile />,
        },
        {
          path: "/profile/media",
          element: <Profile />,
        },
        {
          path: "/profile/likes",
          element: <Profile />,
        },
        {

          path: "/settings",
          element: <Settings />,
        },
        {

          path: "/notification",
          element: <Notifications />,
        },
        {

          path: "/notifications/verified",
          element: <Notifications />,
        },
        {

          path: "/notifications/mentions",
          element: <Notifications />,
        },
        {
          path: "/more",
          element: <More />,
        },

        {
          path: "/explore",
          element: <Explore />,
        }, {
          path: "/explore/trendings",
          element: <Explore />,

        }, {
          path: "/explore/sports",
          element: <Explore />,

        },
        {
          path: "/explore/entertainment",
          element: <Explore />,

        },
        {
          path: "/explore/news",
          element: <Explore />,

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
