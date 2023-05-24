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
import { useEffect, useState } from "react";
import CreateYouAccount from "./pages/Auth/Signup/CreateAccount";
import Step2 from "./pages/Auth/Signup/SignUpTwo";
import Step3 from "./pages/Auth/Signup/SignUpThree";
import SignUpOne from "./pages/Auth/Signup/SignUpOne";
import SingUpTwo from "./pages/Auth/Signup/SignUpTwo";
import SignUpThree from "./pages/Auth/Signup/SignUpThree";
import Loader from "./components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { clearUserErrors, loadUser } from "./redux/action/UserAction";
import store from "./Store";
import LoginPassword from "./pages/Auth/Loginpassword";
function App() {
  const { loading, error } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    store.dispatch(loadUser());
    if (error) {
      dispatch(clearUserErrors())
    }
  }, [])
  const Layout = () => {
    return (
      <>
        {
          loading ? (
            <Loader />
          ) :
            (
              <div className="flex gap-2 h-full app">

                <Navbar />

                <Outlet />
                <Footer />

              </div>
            )}
      </>
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
          path: "/loader",
          element: <Loader />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/auth*",
          element: <LoginPassword />,
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
          path: "/Signup/first-page",

          element: <SignUpOne />,
        },
        {
          path: "/Signup/second-page",
          element: <SingUpTwo />,
        },
        {
          path: "/Email/verify/:params",
          element: <SignUpThree />,
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
