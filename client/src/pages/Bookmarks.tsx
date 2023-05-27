import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ProfileTweet from "../components/Tweets/ProfileTweets";

interface Profile {
  name: string;
  username: string;
}


const Bookmarks = () => {

  const Profile: Profile = {
    name: "Yash Harale",
    username: "ig_carnageyt",
  };

  const Navigate = useNavigate();
  const { isLoggedIn } = useSelector((state:any) => state.user)

  useEffect(() => {

    if (!isLoggedIn) {
      Navigate('/login')
    }
  }, [isLoggedIn, Navigate]);
  
    return (
      <div className="bookmarks w-[50%] border-x ml-[24%] -mr-1">
      <div className="bookmarkContainer fixed bg-transparent w-[570px] flex h-14 justify-between items-center">
     
        <div className="top flex flex-col">
        <h1 className="text-2xl ml-5 font-semibold">Bookmarks</h1>
        <p className="text-sm ml-5 text-gray-600 mb-2">{Profile?.username}</p>
        </div>
        <MoreHorizOutlinedIcon className="mr-5 hover:bg-gray-300 hover:rounded-full cursor-pointer text-gray-700"/>
      </div>
      <div className="bookmarkTweets mt-20">
        <ProfileTweet/>
      </div>
    </div>
    )
  }
  
  export default Bookmarks