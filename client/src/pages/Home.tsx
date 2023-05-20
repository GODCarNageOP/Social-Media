import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const HomeTab = () => {
    const [openTab, setOpenTabs] = useState("Tweets");
    const location = useLocation();
    const pathname = location.pathname;
    const urlAfterSlash = pathname.substring(1);

    return (
      <div className="explore-tab w-full">
        <div className="flex h-14 cursor-pointer">
          <Link
            to="/home"
            className={`flex-1 flex flex-col relative ${
              urlAfterSlash === "home" ? "active-link" : "inactive-link"
            }`}
          >
            <span
              className={`flex-1 font-bold flex justify-center items-center hover:bg-gray-200  ${
                urlAfterSlash === "home" ? "activeTabs" : "deactivate-tabs"
              }`}
            >
              For you
            </span>
            {urlAfterSlash === "home" && <div className="activelines"></div>}
          </Link>
          <Link
            to="/home/following"
            className={`flex-1 flex flex-col relative ${
              urlAfterSlash === "home/following"
                ? "active-link"
                : "inactive-link"
            }`}
          >
            <span
              className={`flex-1 font-bold flex justify-center items-center hover:bg-gray-200  ${
                urlAfterSlash === "home/following"
                  ? "activeTabs"
                  : "deactivate-tabs"
              }`}
            >
              Following
            </span>
            {urlAfterSlash === "home/following" && (
              <div className="activelines"></div>
            )}
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="home w-[50%]">
      <h1 className="text-2xl font-semibold my-1 p-4 cursor-pointer mx-10">
        Home
      </h1>
      <div className="homeNavbar flex justify-between h-16">
        <HomeTab />
      </div>
    </div>
  );
};

export default Home;
