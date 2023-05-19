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
import { useState } from "react";
import './navbar.css'

const Navbar = () => {
  const [openOverlay, setOpenOverlay] = useState(true);

  const handleOverlay = () => {
    setOpenOverlay(!openOverlay)
  }
  console.log('over', openOverlay)
  return (
    <>

      <div className=" w-[20%] border-x flex flex-col h-full mobile-center navbar">
        <Link to="/">
          <div className="logo h-[5%] flex gap-2 pl-4 pt-2 pb-5">
            <img
              src={twitter}
              alt=""
              className="h-9 w-10 hover:bg-gray-200 hover:rounded-full"
            />
            {/*<span>Twitter</span>*/}
          </div>
        </Link>

        <div className="pages flex flex-col h-[80%] gap- items-start cursor-pointer justify-center ">
          <Link to="/">
            <div className="icon h-12 text-xl hover:bg-gray-200 hover:rounded-3xl p-5 pt-7 pb-7 flex justify-center items-center gap-2">
              <HomeOutlinedIcon />
              <span className="mobile-none">Home</span>
            </div>
          </Link>
          <Link to="/explore">
            <div className="icon h-12 text-xl hover:bg-gray-200 hover:rounded-3xl p-5 pt-7 pb-7 flex justify-center items-center gap-2">
              <TagOutlinedIcon />
              <span className="mobile-none">Explore</span>
            </div>
          </Link>
          <Link to="/notifications">
            <div className="icon h-12 text-xl hover:bg-gray-200 hover:rounded-3xl p-5 pt-7 pb-7 flex justify-center items-center gap-2">
              <NotificationsOutlinedIcon />
              <span className="mobile-none">Notifications</span>
            </div>
          </Link>
          <Link to="/messages">
            <div className="icon h-12 text-xl hover:bg-gray-200 hover:rounded-3xl p-5 pt-7 pb-7 flex justify-center items-center gap-2">
              <MailOutlineOutlinedIcon />
              <span className="mobile-none">Messages</span>
            </div>
          </Link>
          <Link to="/lists">
            <div className="icon h-12 text-xl hover:bg-gray-200 hover:rounded-3xl p-5 pt-7 pb-7 flex justify-center items-center gap-2">

              <ListAltOutlinedIcon className='font-bold' />
              <span className="mobile-none">Lists</span>
            </div>
          </Link>
          <Link to="/bookmarks">
            <div className="icon h-12 text-xl hover:bg-gray-200 hover:rounded-3xl p-5 pt-7 pb-7 flex justify-center items-center gap-2">
              <BookmarkBorderOutlinedIcon />
              <span className="mobile-none">Bookmarks</span>
            </div>
          </Link>
          <Link to="/twitterblue">
            <div className="icon h-12 text-xl hover:bg-gray-200 hover:rounded-3xl p-5 pt-7 pb-7 flex justify-center items-center gap-2">
              <VerifiedOutlinedIcon />
              <span className="mobile-none">Twitter Blue</span>
            </div>
          </Link>
          <Link to="/profile">
            <div className="icon h-12 text-xl hover:bg-gray-200 hover:rounded-3xl p-5 pt-7 pb-7 flex justify-center items-center gap-2">
              <PersonOutlineOutlinedIcon />
              <span className="mobile-none">Profile</span>
            </div>
          </Link>
          <Link to="/more">
            <div className="icon h-12 text-xl hover:bg-gray-200 hover:rounded-3xl p-5 pt-7 pb-7 flex justify-center items-center gap-2">
              <PendingOutlinedIcon />
              <span className="mobile-none">More</span>
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-center max-w-100">
          <span className="h-12 w-64 text-xl bg-blue-500 rounded-3xl hover:bg-blue-600 text-white flex items-center justify-center mt-2">
            Tweet
          </span>
        </div>
        <div className="profile flex justify-between h-[10%] mx-2 items-center hover:bg-gray-200 hover:rounded-full p-3 cursor-pointer mt-5">

          <div className="overlay-relative">
            <div className={`${openOverlay ? "overlay-show" : "overlay-hide"}`}>

              <HandleBurger />
            </div>

          </div>

          <div className="profileContainer gap-3 flex">
            <img src={yash} alt="" className="h-12 w-12 rounded-full mx-2" />
            <div className="flex flex-col mobile-none">
              <h1 className="text-1xl md:text-3xl lg:text-lg mobile-none">Yash Harale</h1>
              <p className="text-sm mobile-none">@ig_carnageyt</p>
            </div>
          </div>
          <div className="mobile-none" onClick={(e) => handleOverlay()}>

            <MoreHorizOutlinedIcon className="mobile-none" />
          </div>
        </div>
      </div>
    </>

  );
};


const HandleBurger = () => {


  return (
    <div className="overlay-Nav flex flex-col">

      <Link to='/add-an-existing-account'>

        <p>
          Add an existing account
        </p>
      </Link>
      <Link to='/logout'>
        <p>
          Log out @Yash Harale
        </p>
      </Link>
    </div>
  )
}
export default Navbar;
