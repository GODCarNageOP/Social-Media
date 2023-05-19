import SearchIcon from "@mui/icons-material/Search";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import pic from "../assets/nba.jpg";
import yash from "../assets/yashXD.jpg";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <div className="footer w-[30%] flex flex-col h-full mr-10">
      <div className="search h-[3%] w-84 rounded-full bg-gray-100 flex mt-3 items-center justify-start p-3 gap-2 mx-10">
        <SearchIcon className="icon text-gray-500" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="bg-transparent border-none outline-none"
        />
      </div>
      <div className="updates mx-10 bg-gray-100 rounded-lg h-[50%] mt-3 flex flex-col">
        <h1 className="p-3 text-xl font-semibold ml-2">What's happening</h1>
        <div className="flex p-3 justify-between hover:bg-gray-200 cursor-pointer">
          <div className="message flex flex-col items-start text-gray-500 gap-1 ml-2">
            <span className="text-xs">NBA This morning</span>
            <h1 className="font-semibold text-black text-sm">
              Lakers at Nuggets
            </h1>
          </div>
          <img src={pic} alt="" className="h-14 w-14 rounded-lg mr-2" />
        </div>
        <div className="flex p-3 justify-between hover:bg-gray-200 cursor-pointer">
          <div className="message flex flex-col items-start text-gray-500 gap-1 ml-2">
            <span className="text-xs">Gaming Trending</span>
            <h1 className="font-semibold text-black text-sm">#BGMI</h1>
            <p className="text-xs">8.036 Tweets</p>
          </div>
          <MoreHorizOutlinedIcon className="icon mr-2 text-gray-600 hover:bg-blue-200 hover:rounded-full hover:text-blue-400" />
        </div>
        <div className="flex p-3 justify-between hover:bg-gray-200 cursor-pointer">
          <div className="message flex flex-col items-start text-gray-500 gap-1 ml-2">
            <span className="text-xs">Trending in India</span>
            <h1 className="font-semibold text-black text-sm">The King</h1>
            <p className="text-xs">771K Tweets</p>
          </div>
          <MoreHorizOutlinedIcon className="icon mr-2 text-gray-600  hover:bg-blue-200 hover:rounded-full hover:text-blue-400" />
        </div>
        <div className="flex p-3 justify-between hover:bg-gray-200 cursor-pointer">
          <div className="message flex flex-col items-start text-gray-500 gap-1 ml-2">
            <span className="text-xs">Entertainment Trending</span>
            <h1 className="font-semibold text-black text-sm">#JanhviKapoor</h1>
            <p className="text-xs">57.4K Tweets</p>
          </div>
          <MoreHorizOutlinedIcon className="icon mr-2 text-gray-600 hover:bg-blue-200 hover:rounded-full hover:text-blue-400" />
        </div>
        <div className="flex p-3 justify-between hover:bg-gray-200 cursor-pointer">
          <div className="message flex flex-col items-start text-gray-500 gap-1 ml-2">
            <span className="text-xs">Trending in India</span>
            <h1 className="font-semibold text-black text-sm">#ViratKohli</h1>
            <p className="text-xs">49.3k Tweets</p>
          </div>
          <MoreHorizOutlinedIcon className="icon mr-2 text-gray-600 hover:bg-blue-200 hover:rounded-full hover:text-blue-400" />
        </div>

        <span className="p-3 text-blue-400 ml-2 cursor-pointer">Show More</span>
      </div>
      <div className="follow mt-3 mx-10 bg-gray-100 rounded-lg h-[30%] flex flex-col ">
        <h1 className="text-xl font-semibold p-3 mx-2">Who to follow</h1>
        <div className="profile flex justify-between items-center p-3 h-16  hover:bg-gray-200 cursor-pointer">
          <div className="flex gap-2 ml-2">
            <img src={yash} alt="" className="h-12 w-12 rounded-full" />
            <div className="name flex flex-col">
              <h1 className="text-base font-semibold">Yash Harale</h1>
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
              <h1 className="text-base font-semibold">Yash Harale</h1>
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
              <h1 className="text-base font-semibold">Yash Harale</h1>
              <p className="text-sm text-gray-500">@imCarnage</p>
            </div>
          </div>
          <button className="bg-black text-white rounded-full w-20 h-8 font-semibold mr-2 hover:bg-gray-800 cursor-pointer">
            Follow
          </button>
        </div>
        <span className="p-3 text-blue-400 ml-2 cursor-pointer">Show More</span>
      </div>
      <div className="foot mt-3 p-3 flex flex-col text-gray-500 text-xs">
        <div className="top flex justify-between mx-14 items-center">
          <span className="hover:underline">Terms of Service</span>
          <span className="hover:underline">Privacy Policy</span>
          <span className="hover:underline">Cookie Policy</span>
        </div>
        <div className="bottom flex justify-between mx-14 items-center">
          <span className="hover:underline">Accessibilty</span>
          <span className="hover:underline">Ads info</span>
          <span className="hover:underline flex items-center">
            More
            <MoreHorizOutlinedIcon className="icon" />
          </span>
          <span className="hover:underline flex items-center">
            <CopyrightIcon className="icon" />
            2023 X Corp.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
