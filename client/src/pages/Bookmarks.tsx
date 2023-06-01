import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ProfileTweet from "../components/Tweets/ProfileTweets";
import Loader from "../components/Loader";
import { clearErrorBookmarks, getBookmarks } from "../redux/action/Bookmarkaction";
import { clearTweetsError, getTweetsById } from "../redux/action/TweetAction";
import TweetCard from "../components/Tweets/TweetsCard";

interface Profile {
  name: string;
  username: string;
}

const Bookmarks = () => {
  const dispatch = useDispatch();
  const { bookmarks, loading, error } = useSelector((state) => state.bookmark)

  const Profile: Profile = {
    name: "Yash Harale",
    username: "ig_carnageyt",
  };

  const Navigate = useNavigate();
  const { isLoggedIn } = useSelector((state: any) => state.user)

  useEffect(() => {
    if (error) {
      dispatch(clearErrorBookmarks())
    }
    if (!isLoggedIn) {
      Navigate('/login')
    }

    dispatch(getBookmarks());
  }, [isLoggedIn, Navigate]);

  return (
    <div className="bookmarks w-[50%] border-x ml-[24%] -mr-1 flex flex-col gap-8">
      <div className="bookmarkContainer fixed bg-transparent w-[570px] flex h-14 justify-between items-center">
        <div className="top flex flex-col">
          <h1 className="text-2xl ml-5 font-semibold">Bookmarks</h1>
          <p className="text-sm ml-5 text-gray-600 mb-2">{Profile?.username}</p>
        </div>
        <MoreHorizOutlinedIcon className="mr-5 hover:bg-gray-300 hover:rounded-full cursor-pointer text-gray-700" />
      </div>

      <div className="mt-[80px] flex flex-col">
        {bookmarks.map((item) => {
          return (

            <TweetCard key={item._id} tweet={item} />

          )
        })}
      </div>
    </div>
  )
}







export default Bookmarks;
