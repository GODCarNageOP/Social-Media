import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Explore = () => {
  return (
    <div className="explore w-[50%]">
      <div className="exploreContainer flex justify-between items-center">
        <div className="search h-[5%] flex-1 rounded-full bg-gray-100 flex mt-3 items-center p-3 gap-2 mx-10 justify-start">
          <SearchIcon className="icon text-gray-500" />
          <input
            type="text"
            placeholder="Search Twitter"
            className="bg-transparent border-none outline-none"
          />

        </div>
        <SettingsOutlinedIcon className="mr-10 mt-3 hover:bg-gray-200 cursor-pointer hover:rounded-full" />
      </div>
      <div className="exploreNavbar flex justify-between h-14 mt-2">
        <ExploreTab/>
        {/* <span className="flex-1 flex justify-center items-center hover:bg-gray-200 font-medium">
          For you
        </span>
        <span className="flex-1 flex justify-center items-center hover:bg-gray-200 font-medium">
          Trending
        </span>
        <span className="flex-1 flex justify-center items-center hover:bg-gray-200 font-medium">
          News
        </span>
        <span className="flex-1 flex justify-center items-center hover:bg-gray-200 font-medium">
          Sports
        </span>
        <span className="flex-1 flex justify-center items-center hover:bg-gray-200 font-medium">
          Entertainment
        </span> */}
      </div>
    </div>
  )
}


const ExploreTab = () => {
  const [openTab, setOpenTabs] = useState("Tweets");
  const location = useLocation();
  const pathname = location.pathname;
  const urlAfterSlash = pathname.substring(1);

  return (
    <div className="explore-tab w-full">
      <div className="flex h-14 cursor-pointer">
        <Link
          to="/explore"
          className={`flex-1 flex flex-col relative ${urlAfterSlash === "explore" ? "active-link" : "inactive-link"
            }`}
        >
          <span className={`flex-1 font-bold flex justify-center items-center hover:bg-gray-200  ${urlAfterSlash === "explore" ? "activeTabs" : "deactivate-tabs"
            }`}>
            For you
          </span>
          {urlAfterSlash === "explore" && <div className="activelines"></div>}
        </Link>
        <Link
          to="/explore/trendings"
          className={`flex-1 flex flex-col relative ${urlAfterSlash === "explore/trendings" ? "active-link" : "inactive-link"
            }`}
        >
          <span className={`flex-1 font-bold flex justify-center items-center hover:bg-gray-200  ${urlAfterSlash === "explore/trendings" ? "activeTabs" : "deactivate-tabs"
            }`}>
            Trending
          </span>
          {urlAfterSlash === "explore/trendings" && (
            <div className="activelines"></div>
          )}
        </Link>
        <Link
          to="/explore/news"
          className={`flex-1  flex flex-col relative ${urlAfterSlash === "explore/news" ? "active-link" : "inactive-link"
            }`}
        >
          <span className={`flex-1 font-bold flex justify-center items-center hover:bg-gray-200  ${urlAfterSlash === "explore/news" ? "activeTabs" : "deactivate-tabs"
            }`}>
            News
          </span>
          {urlAfterSlash === "explore/news" && (
            <div className="activelines"></div>
          )}
        </Link>
        <Link
          to="/explore/sports"
          className={`flex-1 flex flex-col relative ${urlAfterSlash === "explore/sports" ? "active-link" : "inactive-link"
            }`}
        >
          <span className={`flex-1 font-bold flex justify-center items-center hover:bg-gray-200  ${urlAfterSlash === "explore/sports" ? "activeTabs" : "deactivate-tabs"
            }`}>
            Sports
          </span>
          {urlAfterSlash === "explore/sports" && (
            <div className="activelines"></div>
          )}
        </Link>
        <Link
          to="/explore/entertainment"
          className={`flex-1 flex flex-col relative ${urlAfterSlash === "explore/entertainment" ? "active-link" : "inactive-link"
            }`}
        >
          <span className={`flex-1 font-bold flex justify-center items-center hover:bg-gray-200  ${urlAfterSlash === "explore/entertainment" ? "activeTabs" : "deactivate-tabs"
            }`}>
            Entertainment
          </span>
          {urlAfterSlash === "explore/entertainment" && (
            <div className="activelines"></div>
          )}
        </Link>
      </div>
  

    </div>
  );
};



export default Explore