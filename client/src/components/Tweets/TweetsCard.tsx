import React from "react";
import "./TweetCard.css";
import profilePic from "../../assets/pofilePic.jpeg";

import { AiOutlineRetweet, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdOutlineGraphicEq } from "react-icons/md";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

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
            <div className="center flex flex-col flex-2 mt-2 w-full ">
                <div className="flex gap-2 w-full   justify-between">
                    <div className="profile-details-tweets flex gap-2 w-full">
                        <span className="font-bold hover:underline cursor-pointer">{tweet?.name}</span>
                        <span className="text-gray-600"> @{tweet?.userName}</span>
                        <span>
                            .
                        </span>
                        <span className="text-gray-600">{tweet?.joined}</span>
                    </div>
                    <span className="cursor-pointer  tweet-icon hover:text-blue-500 text-gray-500">

                        <BsThreeDots />
                    </span>
                </div>
                <div className="middle flex">
                    <span>{tweet?.content}</span>
                </div>
                <div className="bottom mt-2">
                    <div className="flex justify-between p-2 w-[85%] ">
                        <div className="flex gap-2 item-center justify-center ">



                            <span className="cursor-pointer flex items-center tweet-icon hover:text-blue-500 text-gray-700">

                                <GoComment />
                            </span>
                            <span className="cursor-pointer flex items-center tweet-icon hover:text-blue-500 text-gray-700 ">

                                {tweet?.replies}
                            </span>
                        </div>

                        <div className="flex gap-2 item-center justify-center">
                            <span className="cursor-pointer flex items-center tweet-icon hover:text-blue-500 text-gray-700 ">

                                <AiOutlineRetweet />
                            </span>
                            <span className="cursor-pointer flex items-center tweet-icon hover:text-blue-500 text-gray-700 ">

                                {tweet?.retweets}
                            </span>
                        </div>

                        <div className="flex gap-2 item-center justify-center">


                            <span className="cursor-pointer flex items-center tweet-icon hover:text-blue-500 text-gray-700 ">

                                <AiOutlineHeart />
                            </span>
                            <span className="cursor-pointer flex items-center tweet-icon hover:text-blue-500 text-gray-700 ">

                                {tweet?.likes}
                            </span>
                        </div>
                        <div className="flex gap-2 item-center justify-center">

                            <span className="cursor-pointer flex items-center tweet-icon hover:text-blue-500 text-gray-700 ">
                                <MdOutlineGraphicEq />
                            </span>
                            <span className="cursor-pointer flex items-center font-thin tweet-icon hover:text-blue-500 text-gray-700 ">

                                {tweet?.likes}
                            </span>
                        </div>

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





const More = () => {


    return (
        <div className="overlay h-21 w-76 p-2 bg-white  shadow-lg border rounded-xl z-10 flex flex-col top-[465px] ml-[60px]">
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
    )
}




export default TweetCard;