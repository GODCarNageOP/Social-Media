import React from "react";
import "./TweetCard.css";
import profilePic from "../../assets/pofilePic.jpeg";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import UploadIcon from "@mui/icons-material/Upload";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AiOutlineRetweet, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdOutlineGraphicEq } from "react-icons/md";
import { GoComment } from "react-icons/go";
import { BsUpload, BsThreeDots } from "react-icons/bs";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

interface Tweet {
  name: string;
  userName: string;
  profession: string;
  profilepic: string;
  joined: string;
  id: string;
  content: string;
  timestamp: string;
  likes: number;
  retweets: number;
  replies: number;

  // Rest of the profile object properties
}

interface TweetCardProps {
  tweet: Tweet;
}

const TweetCard: React.FC<TweetCardProps> = ({ tweet }) => {
  return (
    <div className="Tweets-card flex w-full jusitfy-between hover:bg-gray-200">
      <div className="left mr-3">
        <img src={profilePic} alt="" className="w-11 h-11 rounded-full ml-5 mt-2" />
      </div>
      <div className="center flex flex-col flex-2 mt-2">
        <div className="top ">
        <div className="profile-details-tweets flex gap-2 w-full  items-center">
          <span className="font-bold hover:underline cursor-pointer">{tweet?.name}</span>
          <span className="text-gray-600 text-sm"> @{tweet?.userName}</span>
          <span className="text-gray-600">•</span>
          <span className="text-gray-600 text-sm">{tweet?.joined}</span>
          <MoreHorizOutlinedIcon className="icon ml-24 text-gray-600 hover:rounded-full hover:text-blue-500 cursor-pointer" />
        </div>
        </div>
        <div className="middle flex">
        <span>{tweet?.content}</span>
        </div>
        <div className="bottom mt-2">
        <div className="flex justify-between p-2 w-[85%]">
                        <span className="cursor-pointer tweet-icon hover:text-blue-500 text-gray-700">

                            <GoComment />
                        </span>
                        <span className="cursor-pointer tweet-icon hover:text-blue-500 text-gray-700 ">

                            <AiOutlineRetweet />
                        </span>
                        <span className="cursor-pointer tweet-icon hover:text-blue-500 text-gray-700 ">

                            <AiOutlineHeart />
                        </span>
                        <span className="cursor-pointer tweet-icon hover:text-blue-500 text-gray-700 ">
                            <MdOutlineGraphicEq />
                        </span>
                        <span className="cursor-pointer tweet-icon hover:text-blue-500 text-gray-700 ">

                            <BsUpload />
                        </span>
                    </div>
        </div>
      </div>
      <div className="right flex flex-6 ml-10 items-s">
       
      </div>
    </div>
  );
};

export default TweetCard;
