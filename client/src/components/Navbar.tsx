import twitter from "../assets/twitter.png";
import yash from "../assets/yashXD.jpg";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
//import TwitterIcon from "@mui/icons-material/Twitter";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import NightModeSwitch from "../NightMode";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("isDarkMode", String(isDarkMode));
  }, [isDarkMode]);

  const toggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="navbar w-[20%] flex flex-col h-full ml-10">

      <Link to="/">
        <div className="logo h-[5%] flex gap-2 p-3">
          {/*<TwitterIcon className="h-12 w-12 bg-white rounded-3xl hover:bg-gray-200 text-blue-500"/>*/}
          <img
            src={twitter}
            alt=""
            className="h-9 w-10 hover:bg-gray-200 hover:rounded-full"
          />
          {/*<span>Twitter</span>*/}
        </div>
      </Link>

      <div className="pages flex flex-col h-[80%] gap-2 items-start cursor-pointer p-3">
        <Link to="/">
          <div className="icon h-12 text-xl hover:bg-gray-200 hover:rounded-3xl p-5 flex justify-center items-center gap-2">
            <HomeOutlinedIcon className="icon" />
            <span className="">Home</span>
          </div>
        </Link>
        <Link to="/explore">
          <div className="icon h-12 text-xl hover:bg-gray-200 hover:rounded-3xl p-5 flex justify-center items-center gap-2">
            <TagOutlinedIcon className="icon" />
            <span className="">Explore</span>
          </div>
        </Link>
        <Link to="/notifications">
          <div className="icon h-12 text-xl hover:bg-gray-200 hover:rounded-3xl p-5 flex justify-center items-center gap-2">
            <NotificationsOutlinedIcon className="icon" />
            <span className="">Notifications</span>
          </div>
        </Link>
        <Link to="/messages">
          <div className="icon h-12 text-xl hover:bg-gray-200 hover:rounded-3xl p-5 flex justify-center items-center gap-2">
            <MailOutlineOutlinedIcon className="icon" />
            <span className="">Messages</span>
          </div>
        </Link>
        <Link to="/lists">
          <div className="icon h-12 text-xl hover:bg-gray-200 hover:rounded-3xl p-5 flex justify-center items-center gap-2">
            <AddCircleOutlineIcon className="icon" />
            <span className="">Create</span>
          </div>
        </Link>
        <Link to="/bookmarks">
          <div className="icon h-12 text-xl hover:bg-gray-200 hover:rounded-3xl p-5 flex justify-center items-center gap-2">
            <BookmarkBorderOutlinedIcon className="icon" />
            <span className="">Bookmarks</span>
          </div>
        </Link>
        <Link to="/twitterblue">
          <div className="icon h-12 text-xl hover:bg-gray-200 hover:rounded-3xl p-5 flex justify-center items-center gap-2">
            <ContactPageOutlinedIcon className="icon" />
            <span className="">Contact</span>
          </div>
        </Link>
        <Link to="/profile">
          <div className="icon h-12 text-xl hover:bg-gray-200 hover:rounded-3xl p-5 flex justify-center items-center gap-2">
            <PersonOutlineOutlinedIcon className="icon" />
            <span className="">Profile</span>
          </div>
        </Link>
        <div
          className="icon h-12 text-xl relative hover:bg-gray-200 hover:rounded-3xl p-5 flex justify-center items-center gap-2"
          onClick={() => toggle()}
        >
          <div className="flex absolute opacity- w-full">


          </div>
          {!isDarkMode ? (
            <DarkModeOutlinedIcon />
          ) : (
            <WbSunnyOutlinedIcon className="icon" />
          )}
          {isDarkMode ? (
            <span className="">Dark mode</span>
          ) : (
            <span>Light mode</span>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <span className="h-12 w-64 text-xl bg-blue-500 rounded-3xl hover:bg-blue-600 text-white flex items-center justify-center mt-2 p-3 mr-10 ml-3">
          Tweet
        </span>
      </div>
      <div className="profile flex justify-between h-[10%] mx-2 items-center hover:bg-gray-200 hover:rounded-full p-3 cursor-pointer mt-10">
        <div className="profileContainer gap-3 flex">
          <img src={yash} alt="" className="h-12 w-12 rounded-full" />
          <div className="flex flex-col">
            <h1 className="text-lg">Yash Harale</h1>
            <p className="text-sm text-gray-500">@ig_carnageyt</p>
          </div>
        </div>
        <MoreHorizOutlinedIcon className="icon" />
      </div>
    </div>
  );
};




export default Navbar;
