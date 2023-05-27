import twitter from "../assets/twitter.png";
import yash from "../assets/yashXD.jpg";
import "./navbar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
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
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/action/UserAction";
import WriteTweet from "./Tweets/WriteTweet";

const Navbar = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { isLoggedIn, user } = useSelector((state: any) => state.user);

  const profile = user;

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true"
  );
  const [openTweet, setOpenTweet] = useState(false);

  const openTweetClose = () => {
    setOpenTweet(!openTweet);
  };
  const logoutFun = () => {
    dispatch(logout());
  };
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("isDarkMode", String(isDarkMode));
  }, [isDarkMode, user, isLoggedIn]);

  const toggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <WriteTweet openTweet={openTweet} setOpenTweet={setOpenTweet} />
      <div className="relative">
      <div className="navbar w-[13%] sm:flex sm:w-[10%] md:w-[10%] xl:w-[20%] flex flex-col h-full fixed">
        <Link to="/">
          <div className="logo items-center justify-center xl:items-start xl:justify-start h-[5%] flex gap-2 p-3">
            {/*<TwitterIcon className="h-12 w-12 bg-white rounded-3xl hover:bg-gray-200 text-blue-500"/>*/}
            <img
              src={twitter}
              alt=""
              className="h-9 w-10 hover:bg-gray-200 hover:rounded-full"
            />
            {/*<span>Twitter</span>*/}
          </div>
        </Link>

        <div className="flex flex-col h-[80%] gap-2 items-start cursor-pointer p-3 pages">
          <Link to="/">
            <div className="icon h-12 text-xl hover:bg-gray-200 hover:rounded-3xl p-5 flex justify-center items-center gap-2">
              <HomeOutlinedIcon className="icon" />
              <span className="small-sc-tweet">Home</span>
            </div>
          </Link>
          <Link to="/explore">
            <div className="icon h-12 text-xl hover:bg-gray-200 hover:rounded-3xl p-5 flex justify-center items-center gap-2">
              <TagOutlinedIcon className="icon" />
              <span className="small-sc-tweet">Explore</span>
            </div>
          </Link>
          <Link to="/notifications">
            <div className="icon h-12 text-xl hover:bg-gray-200 hover:rounded-3xl p-5 flex justify-center items-center gap-2">
              <NotificationsOutlinedIcon className="icon" />
              <span className="small-sc-tweet">Notifications</span>
            </div>
          </Link>
          <Link to="/messages">
            <div className="icon h-12 text-xl hover:bg-gray-200 hover:rounded-3xl p-5 flex justify-center items-center gap-2">
              <MailOutlineOutlinedIcon className="icon" />
              <span className="small-sc-tweet">Messages</span>
            </div>
          </Link>
          <Link to="/bookmarks">
            <div className="icon h-12 text-xl hover:bg-gray-200 hover:rounded-3xl p-5 flex justify-center items-center gap-2">
              <BookmarkBorderOutlinedIcon className="icon" />
              <span className="small-sc-tweet">Bookmarks</span>
            </div>
          </Link>
          <Link to="/twitterblue">
            <div className="icon h-12 text-xl hover:bg-gray-200 hover:rounded-3xl p-5 flex justify-center items-center gap-2">
              <ContactPageOutlinedIcon className="icon" />
              <span className="small-sc-tweet">Contact</span>
            </div>
          </Link>
          <Link to={`/profile/${user?.userName}`}>
            <div className="icon h-12 text-xl hover:bg-gray-200 hover:rounded-3xl p-5 flex justify-center items-center gap-2">
              <PersonOutlineOutlinedIcon className="icon" />
              <span className="small-sc-tweet">Profile</span>
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
              <span className="">Light mode</span>
            ) : (
              <span className="small-sc-tweet">Dark mode</span>
            )}
          </div>
          <Link to="/lists">
            <div className="icon h-12 text-xl hover:bg-gray-200 hover:rounded-3xl p-5 flex justify-center items-center gap-2">
              <AddCircleOutlineIcon className="icon" />
              <span className="small-sc-tweet">About</span>
            </div>
          </Link>
        </div>
        <div
          className="flex items-center justify-center"
          onClick={openTweetClose}
        >
          <span className=" h-12 w-64 text-xl bg-blue-500 rounded-3xl hover:bg-blue-600 text-white flex items-center justify-center mt-2 p-3 mr-10 ml-3 cursor-pointer large-device-tweet">
            Tweet
          </span>
          <div className="cursor-pointer h-12 w-12  flex items-center text-2xl justify-center text-white bg-blue-500 small-device-tweet">
            <TwitterIcon />
          </div>
        </div>
        {open && (
          <div className="overlay h-28 w-80 bg-white absolute shadow-lg border rounded-xl z-10 flex flex-col top-[550px]">
            <div className="overlayContainer my-5 gap-5">
              <div className="top hover:bg-gray-100 font-medium text-base h-10 p-3 cursor-pointer">
                Add an Existing account
              </div>
              <div
                onClick={() => logoutFun()}
                className="bottom hover:bg-gray-100 font-medium text-base h-10 p-3 cursor-pointer"
              >
                Log out {profile?.userName}
              </div>
            </div>
          </div>
        )}
        <div className="profile flex justify-center xl:justify-between  h-[10%] mx-2 items-center hover:bg-gray-200 hover:rounded-full p-3 cursor-pointer mt-10">
          <div className="profileContainer gap-3 flex items-center justify-center">
            <div
              className="w-14 h-14 flex item-center justify-center  rounded-full overflow-hidden"
              onClick={()=> setOpen(!open)}
            >
              <img src={yash} alt="" className="h-full w-full object-cover" />
            </div>

            <div className="flex flex-col xl:flex">
              <h1 className="text-lg">{profile?.name}</h1>
              <p className="text-sm text-gray-500">{profile?.userName}</p>
            </div>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="relative hidden xl:flex"
          >
            <MoreHorizOutlinedIcon className="icon" />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;
