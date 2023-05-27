import SearchIcon from "@mui/icons-material/Search";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import pic from "../assets/nba.jpg";
import yash from "../assets/yashXD.jpg";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { useState } from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Link } from "react-router-dom";

const Footer = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  return (
    <div className="footer ml-10 w-[30%] flex flex-col h-full pl-2 pr-2">
      <div className="search h-[3%] w-full rounded-full bg-gray-100 flex mt-3 items-center justify-start p-3 gap-2 ">
        <SearchIcon className="icon text-gray-500" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="bg-transparent border-none outline-none w-full"
        />
      </div>
      {open1 && (
        <div className="overlay h-20 w-76 bg-white absolute shadow-lg border rounded-xl z-10 flex flex-col top-[210px] ml-[60px]">
          <div className="overlayContainer gap-5">
            <div className="top hover:bg-gray-100 font-medium text-base h-10 p-3 cursor-pointer flex gap-2">
              <SentimentVeryDissatisfiedIcon />
              <h1>Not interested in this</h1>
            </div>
            <div className="bottom hover:bg-gray-100 font-medium text-base h-10 p-3 cursor-pointer flex gap-2">
              <SentimentVeryDissatisfiedIcon />
              <h1>This trend is harmful or spammy</h1>
            </div>
          </div>
        </div>
      )}
      {open2 && (
        <div className="overlay h-20 w-76 bg-white absolute shadow-lg border rounded-xl z-10 flex flex-col top-[295px] ml-[60px]">
          <div className="overlayContainer gap-5">
            <div className="top hover:bg-gray-100 font-medium text-base h-10 p-3 cursor-pointer flex gap-2">
              <SentimentVeryDissatisfiedIcon />
              <h1>Not interested in this</h1>
            </div>
            <div className="bottom hover:bg-gray-100 font-medium text-base h-10 p-3 cursor-pointer flex gap-2">
              <SentimentVeryDissatisfiedIcon />
              <h1>This trend is harmful or spammy</h1>
            </div>
          </div>
        </div>
      )}
      {open3 && (
        <div className="overlay h-20 w-76 bg-white absolute shadow-lg border rounded-xl z-10 flex flex-col top-[380px] ml-[60px]">
          <div className="overlayContainer gap-5">
            <div className="top hover:bg-gray-100 font-medium text-base h-10 p-3 cursor-pointer flex gap-2">
              <SentimentVeryDissatisfiedIcon />
              <h1>Not interested in this</h1>
            </div>
            <div className="bottom hover:bg-gray-100 font-medium text-base h-10 p-3 cursor-pointer flex gap-2">
              <SentimentVeryDissatisfiedIcon />
              <h1>This trend is harmful or spammy</h1>
            </div>
          </div>
        </div>
      )}
      {open4 && (
        <div className="overlay h-20 w-76 bg-white absolute shadow-lg border rounded-xl z-10 flex flex-col top-[465px] ml-[60px]">
          <div className="overlayContainer gap-5">
            <div className="top hover:bg-gray-100 font-medium text-base h-10 p-3 cursor-pointer flex gap-2">
              <SentimentVeryDissatisfiedIcon />
              <h1>Not interested in this</h1>
            </div>
            <div className="bottom hover:bg-gray-100 font-medium text-base h-10 p-3 cursor-pointer flex gap-2">
              <SentimentVeryDissatisfiedIcon />
              <h1>This trend is harmful or spammy</h1>
            </div>
          </div>
        </div>
      )}
      <div className="updates  bg-gray-100 rounded-lg h-[50%] mt-3 flex flex-col">
        <h1 className="p-3 text-xl font-semibold ml-2">What's happening</h1>
        <div className="flex p-3 justify-between hover:bg-gray-200 cursor-pointer">
          <div className="message flex flex-col items-start text-gray-500 gap-1 ml-2">
            <span className="text-xs">NBA • This morning</span>
            <h1 className="font-semibold text-black text-sm">
              Lakers at Nuggets
            </h1>
          </div>
          <img src={pic} alt="" className="h-14 w-14 rounded-lg mr-2" />
        </div>
        <div className="flex p-3 justify-between hover:bg-gray-200 cursor-pointer">
          <div className="message flex flex-col items-start text-gray-500 gap-1 ml-2">
            <span className="text-xs">Gaming • Trending</span>
            <h1 className="font-semibold text-black text-sm">#BGMI</h1>
            <p className="text-xs">8.036 Tweets</p>
          </div>
          <div
            onClick={() => {
              setOpen1(!open1);
            }}
          >
            <MoreHorizOutlinedIcon className="icon mr-2 text-gray-600 hover:bg-blue-200 hover:rounded-full hover:text-blue-400" />
          </div>
        </div>
        <div className="flex p-3 justify-between hover:bg-gray-200 cursor-pointer">
          <div className="message flex flex-col items-start text-gray-500 gap-1 ml-2">
            <span className="text-xs">Trending in India</span>
            <h1 className="font-semibold text-black text-sm">The King</h1>
            <p className="text-xs">771K Tweets</p>
          </div>
          <div
            onClick={() => {
              setOpen2(!open2);
            }}
          >
            <MoreHorizOutlinedIcon className="icon mr-2 text-gray-600 hover:bg-blue-200 hover:rounded-full hover:text-blue-400" />
          </div>
        </div>
        <div className="flex p-3 justify-between hover:bg-gray-200 cursor-pointer">
          <div className="message flex flex-col items-start text-gray-500 gap-1 ml-2">
            <span className="text-xs">Entertainment • Trending</span>
            <h1 className="font-semibold text-black text-sm">#JanhviKapoor</h1>
            <p className="text-xs">57.4K Tweets</p>
          </div>
          <div
            onClick={() => {
              setOpen3(!open3);
            }}
          >
            <MoreHorizOutlinedIcon className="icon mr-2 text-gray-600 hover:bg-blue-200 hover:rounded-full hover:text-blue-400" />
          </div>
        </div>
        <div className="flex p-3 justify-between hover:bg-gray-200 cursor-pointer">
          <div className="message flex flex-col items-start text-gray-500 gap-1 ml-2">
            <span className="text-xs">Trending in India</span>
            <h1 className="font-semibold text-black text-sm">#ViratKohli</h1>
            <p className="text-xs">49.3k Tweets</p>
          </div>
          <div
            onClick={() => {
              setOpen4(!open4);
            }}
          >
            <MoreHorizOutlinedIcon className="icon mr-2 text-gray-600 hover:bg-blue-200 hover:rounded-full hover:text-blue-400" />
          </div>
        </div>
        <Link to="/explore">
          <div className="mb-3">
            <span className="p-3 text-blue-400 ml-2 cursor-pointer">
              Show More
            </span>
          </div>
        </Link>
      </div>

      <WhoToFollow />
      <TermsOfService />
    </div>
  );
};

// who To Follow here

const WhoToFollow = () => {
  return (
    <div className="follow mt-3  bg-gray-100 rounded-lg h-[30%] flex flex-col ">
      <h1 className="text-xl font-semibold p-3 mx-2">Who to follow</h1>
      <div className="profile flex justify-between items-center p-3 h-16  hover:bg-gray-200 cursor-pointer">
        <div className="flex gap-2 ml-2">
          <img src={yash} alt="" className="h-12 w-12 rounded-full" />
          <div className="name flex flex-col w-full overflow-hidden whitespace-nowrap text-ellipsis  ">
            <h1 className="text-base font-semibold hover:underline">
              Yash Harale
            </h1>
            <p className="text-sm text-gray-500">@imCarnage</p>
          </div>
        </div>
        <button className="bg-black text-white rounded-full w-20 h-8 font-semibold mr-2 hover:bg-gray-800">
          Follow
        </button>
      </div>
      <div className="profile flex justify-between items-center p-3 h-16 hover:bg-gray-200 cursor-pointer">
        <div className="flex gap-2 ml-2">
          <img src={yash} alt="" className="h-12 w-12 rounded-full" />
          <div className="name flex flex-col">
            <h1 className="text-base font-semibold hover:underline">
              Yash Harale
            </h1>
            <p className="text-sm text-gray-500">@imCarnage</p>
          </div>
        </div>
        <button className="bg-black text-white rounded-full w-20 h-8 font-semibold mr-2 hover:bg-gray-800">
          Follow
        </button>
      </div>
      <div className="profile flex justify-between items-center p-3 h-16 hover:bg-gray-200 mt-2 cursor-pointer">
        <div className="flex gap-2 ml-2">
          <img src={yash} alt="" className="h-12 w-12 rounded-full" />
          <div className="name flex flex-col">
            <h1 className="text-base font-semibold hover:underline">
              Yash Harale
            </h1>
            <p className="text-sm text-gray-500">@imCarnage</p>
          </div>
        </div>
        <button className="bg-black text-white rounded-full w-20 h-8 font-semibold mr-2 hover:bg-gray-800 cursor-pointer">
          Follow
        </button>
      </div>
      <span className="p-3 text-blue-400 ml-2 cursor-pointer">Show More</span>
    </div>
  );
};

// I seperated Term Of service
const TermsOfService = () => {
  return (
    <div className="relative">
      <div className="foot w-full mt-3 p-3 flex gap-2 flex-col text-gray-500 text-xs fixed">
        <div className="top flex justify-between  items-center">
          <span className="hover:underline cursor-pointer">
            Terms of Service
          </span>
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
          <span className="hover:underline cursor-pointer">Cookie Policy</span>
        </div>
        <div className="bottom flex justify-between items-center">
          <span className="hover:underline cursor-pointer">Accessibilty</span>
          <span className="hover:underline cursor-pointer">Ads info</span>
          <span className="hover:underline flex items-center cursor-pointer">
            More
            <MoreHorizOutlinedIcon className="icon" />
          </span>
          <span className="hover:underline flex items-center cursor-pointer">
            <CopyrightIcon className="icon" />
            2023 X Corp.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
