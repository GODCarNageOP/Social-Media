import twitter from "../assets/twitter.png";
import yash from "../assets/yashXD.jpg";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar w-[20%] border-x flex flex-col h-full">
      <Link to="/">
        <div className="logo h-[5%] flex gap-2 p-5">
          <img
            src={twitter}
            alt=""
            className="h-9 w-10 hover:bg-gray-200 hover:rounded-full"
          />
          {/*<span>Twitter</span>*/}
        </div>
      </Link>

      <div className="pages flex flex-col h-[80%] gap-2 items-start cursor-pointer">
        <Link to="/">
          <div className="icon h-12 text-xl hover:bg-gray-200 hover:rounded-3xl p-5 flex justify-center items-center gap-2">
            <HomeOutlinedIcon />
            <span className="">Home</span>
          </div>
        </Link>
        <Link to="/explore">
          <div className="icon h-12 text-xl hover:bg-gray-200 hover:rounded-3xl p-5 flex justify-center items-center gap-2">
            <TagOutlinedIcon />
            <span className="">Explore</span>
          </div>
        </Link>
        <Link to="/notifications">
          <div className="icon h-12 text-xl hover:bg-gray-200 hover:rounded-3xl p-5 flex justify-center items-center gap-2">
            <NotificationsOutlinedIcon />
            <span className="">Notifications</span>
          </div>
        </Link>
        <Link to="/messages">
          <div className="icon h-12 text-xl hover:bg-gray-200 hover:rounded-3xl p-5 flex justify-center items-center gap-2">
            <MailOutlineOutlinedIcon />
            <span className="">Messages</span>
          </div>
        </Link>
        <Link to="/lists">
          <div className="icon h-12 text-xl hover:bg-gray-200 hover:rounded-3xl p-5 flex justify-center items-center gap-2">
            <ListAltOutlinedIcon />
            <span className="">Lists</span>
          </div>
        </Link>
        <Link to="/bookmarks">
          <div className="icon h-12 text-xl hover:bg-gray-200 hover:rounded-3xl p-5 flex justify-center items-center gap-2">
            <BookmarkBorderOutlinedIcon />
            <span className="">Bookmarks</span>
          </div>
        </Link>
        <Link to="/twitterblue">
          <div className="icon h-12 text-xl hover:bg-gray-200 hover:rounded-3xl p-5 flex justify-center items-center gap-2">
            <VerifiedOutlinedIcon />
            <span className="">Twitter Blue</span>
          </div>
        </Link>
        <Link to="/profile">
          <div className="icon h-12 text-xl hover:bg-gray-200 hover:rounded-3xl p-5 flex justify-center items-center gap-2">
            <PersonOutlineOutlinedIcon />
            <span className="">Profile</span>
          </div>
        </Link>
        <Link to="/more">
          <div className="icon h-12 text-xl hover:bg-gray-200 hover:rounded-3xl p-5 flex justify-center items-center gap-2">
            <PendingOutlinedIcon />
            <span className="">More</span>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <span className="h-12 w-64 text-xl bg-blue-500 rounded-3xl hover:bg-blue-600 text-white flex items-center justify-center mt-5">
          Tweet
        </span>
        </div>
      <div className="profile flex justify-between h-[10%] mx-2 items-center hover:bg-gray-200 hover:rounded-full p-3 cursor-pointer mt-10">
        <div className="profileContainer gap-3 flex">
          <img src={yash} alt="" className="h-12 w-12 rounded-full mx-2" />
          <div className="flex flex-col">
            <h1 className="text-lg">Yash Harale</h1>
            <p className="text-sm">@ig_carnageyt</p>
          </div>
        </div>
        <MoreHorizOutlinedIcon className="" />
      </div>
    </div>
  );
};

export default Navbar;
