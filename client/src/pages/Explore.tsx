import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

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
      <SettingsOutlinedIcon className="mr-10 mt-3 hover:bg-gray-200 cursor-pointer hover:rounded-full"/>
      </div>
      <div className="exploreNavbar flex justify-between h-14 mt-2">
        <span className="flex-1 flex justify-center items-center hover:bg-gray-200 font-medium">
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
        </span>
      </div>
      </div>
    )
  }
  
  export default Explore