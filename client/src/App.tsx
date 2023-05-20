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

function App() {
  const Layout = () => {
    return (
      <div className="app flex justify-between mx-10 h-full">
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
          element: <Settings/>,
        }
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
