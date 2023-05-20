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

const Navbar = () => {

const [open, setOpen] = useState(false)

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
      <Link to="/home">
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
        <Link to="/home">
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
          <div className="flex absolute opacity- w-full"></div>
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
        <span className="h-12 w-64 text-xl bg-blue-500 rounded-3xl hover:bg-blue-600 text-white flex items-center justify-center mt-2 p-3 mr-10 ml-3 cursor-pointer">
          Tweet
        </span>
      </div>
      {open && 
        <div className="overlay h-28 w-80 bg-white absolute shadow-lg border rounded-xl z-10 flex flex-col top-[550px]">
          <div className="overlayContainer my-5 gap-5">
          <div className="top hover:bg-gray-100 font-medium text-base h-10 p-3 cursor-pointer">Add an Existing account</div>
          <div className="bottom hover:bg-gray-100 font-medium text-base h-10 p-3 cursor-pointer">Log out @ig_carnageyt</div>
          </div>
        </div>
        }
      <div className="profile flex justify-between h-[10%] mx-2 items-center hover:bg-gray-200 hover:rounded-full p-3 cursor-pointer mt-10">
        <div className="profileContainer gap-3 flex">
          <img src={yash} alt="" className="h-12 w-12 rounded-full" />
          <div className="flex flex-col">
            <h1 className="text-lg">Yash Harale</h1>
            <p className="text-sm text-gray-500">@ig_carnageyt</p>
          </div>
        </div>
        <div onClick={()=> setOpen(!open)} className="relative">
        <MoreHorizOutlinedIcon className="icon"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
