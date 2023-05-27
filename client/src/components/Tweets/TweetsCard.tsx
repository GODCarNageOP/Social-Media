import React, { useEffect, useRef, useState } from "react";
import "./TweetCard.css";
import profilePic from "../../assets/pofilePic.jpeg";
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import PushPinIcon from '@mui/icons-material/PushPin';
import DeleteIcon from '@mui/icons-material/Delete';
import { TbMessageCircle2 } from 'react-icons/tb';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import { AiOutlineRetweet, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdOutlineGraphicEq } from "react-icons/md";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

import { BsUpload, BsThreeDots } from "react-icons/bs";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTweet } from "../../redux/action/TweetAction";
import { useLocation } from "react-router-dom";
import Loader from "../Loader";
interface Tweet {
    name: string;
    userName: string;
    profession: string;
    profilepic: string;
    joined: string;
    _id: string;
    timestamp: string;
    likes: number;
    retweets: number;
    replies: number;
    content: string;
    views: number;
    createAt: string;
    // Rest of the profile object properties
}

interface TweetCardProps {
    tweet: Tweet;
}

const label = { inputProps: { 'aria-label': 'like ' } };
const TweetCard: React.FC<TweetCardProps> = ({ tweet }) => {
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const moreRef = useRef<HTMLDivElement>(null);
    const { user, loading, error } = useSelector((state) => state.user)
    const id = tweet._id;

    const handleMore = () => {
        setIsMoreOpen(!isMoreOpen);
    };
    let joined = tweet?.createdAt;
    const dateObj = new Date(joined);
    const now = new Date();

    const diffInMinutes = Math.floor((now - dateObj) / (1000 * 60));
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    let formattedDate;

    if (diffInMinutes < 1) {
        formattedDate = `Less than a minute ago`;
    } else if (diffInHours < 1) {
        formattedDate = `${diffInMinutes} minute${diffInMinutes === 1 ? '' : 's'} ago`;
    } else if (diffInDays < 1) {
        formattedDate = `${diffInHours} hour${diffInHours === 1 ? '' : 's'} ago`;
    } else if (diffInDays < 5) {
        formattedDate = `${diffInDays} day${diffInDays === 1 ? '' : 's'} ago`;
    } else {
        const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
        const day = dateObj.getDate().toString().padStart(2, "0");
        const year = dateObj.getFullYear().toString().slice(-2);
        formattedDate = `${month}/${day}/${year}`;
    }   

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
                setIsMoreOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            {
                loading ? (
                    <Loader />
                ) : (


                    <div className="Tweets-card p- flex w-full gap-2 jusitfy-between  hover:bg-gray-200">
                        <div className="left flex items-center justify-center mt-2 tweet-profile  overflow-hidden rounded-full ">
                            <img src={profilePic} alt="" className="tweet-profile object-cover " />
                        </div>
                        <div className="center flex flex-col flex-1  mt-2">
                            <div className="flex w-full   justify-between  sm:w-full">
                                <div className="profile-details-tweets flex  items-start justify-center">
                                    <span className="font-bold text-sm hover:underline cursor-pointer">{tweet?.name}</span>
                                    <span className="text-gray-600 text-sm  sm:text-base  "> @{tweet?.userName}</span>
                                    <span>.</span>
                                    <span className="text-gray-600 text-sm sm:text-base ">{formattedDate}</span>
                                </div>

                                <span className="cursor-pointer  tweet-icon hover:text-blue-500 text-gray-500" onClick={() => handleMore()}>

                                    <BsThreeDots />
                                </span>

                                {/* <div className="relative w-full"> */}
                                {isMoreOpen && (


                                    <div ref={moreRef} className="absolute right-0" onClick={() => handleMore()}>

                                        <More id={id} tweet={tweet} user={user} />
                                    </div>
                                )

                                }
                            </div>
                            <div className="middle flex">
                                <span>{tweet?.content}</span>
                            </div>

                            <div className="bottom mt-2">
                                <div className="flex justify-between p-2 w-[85%] ">
                                    <div className="flex gap-2 item-center justify-center ">



                                        <span className="cursor-pointer flex items-center tweet-icon hover:text-blue-500 text-gray-700">

                                            <TbMessageCircle2 />
                                        </span>
                                        <span className="cursor-pointer flex items-center text-sm tweet-icon hover:text-blue-500 text-gray-700 ">

                                            {tweet?.numOfComments}
                                        </span>
                                    </div>

                                    <div className="flex gap-2 item-center justify-center">
                                        <span className="cursor-pointer flex items-center  tweet-icon hover:text-blue-500 text-gray-700 ">

                                            <AiOutlineRetweet />
                                        </span>
                                        <span className="cursor-pointer text-sm flex items-center tweet-icon hover:text-blue-500 text-gray-700 ">

                                            {tweet?.numOfRetweets}

                                        </span>
                                    </div>

                                    <div className="flex gap-2 item-center justify-center">


                                        <span className="cursor-pointer flex items-center text-sm tweet-icon hover:text-blue-500 text-gray-700 ">

                                            <Checkbox {...label} icon={<FavoriteBorder />} className="text-sm" checkedIcon={<Favorite />} />
                                            {/* <Checkbox
                                    {...label}
                                    icon={<BookmarkBorderIcon />}
                                    checkedIcon={<BookmarkIcon />}
                                /> */}
                                        </span>
                                        <span className="cursor-pointer flex text-sm items-center tweet-icon hover:text-blue-500 text-gray-700 ">

                                            {tweet?.numOfLikes}

                                        </span>
                                    </div>
                                    <div className="flex gap-2 item-center justify-center">

                                        <span className="cursor-pointer flex items-center tweet-icon hover:text-blue-500 text-gray-700 ">
                                            <MdOutlineGraphicEq />
                                        </span>
                                        <span className="cursor-pointer flex text-sm items-center font-thin tweet-icon hover:text-blue-500 text-gray-700 ">

                                            {tweet?.views}

                                        </span>
                                    </div>

                                    <span className="cursor-pointer flex items-center tweet-icon hover:text-blue-500 text-gray-700 ">

                                        <BsUpload />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="right flex flex-6  items-s">

                        </div>
                    </div>
                )
            }
        </>

    );
};





const More = ({ id, tweet, user }) => {

    const dispatch = useDispatch();
    const location = useLocation();
    const pathname = location.pathname;
    const urlAfterSlash = pathname.substring(1);

    let isAdmin = false;

    if (tweet?.user === user?._id || urlAfterSlash === '/' || urlAfterSlash == '' || urlAfterSlash === 'following') {
        isAdmin = true;
    }

    // const id=
    // const deleteId = {
    //     id
    // }
    const deleteTw = (id) => {

        dispatch(deleteTweet(id))
    }

    return (
        <div className="overlay h-33 w-80 p-3  bg-white  shadow-lg border rounded-xl z-20 flex flex-col top-[465px] ml-[60px]">
            <div className="overlayContainer gap-8">
                {
                    isAdmin && (

                        <div onClick={() => deleteTw(id)} className="top hover:bg-gray-100 font-medium text-base h-10 p-3 cursor-pointer flex gap-2">
                            < DeleteIcon />
                            <h1>Delete</h1>
                        </div>
                    )
                }
                {
                    !isAdmin && (

                        <div className="top hover:bg-gray-100 font-medium text-base h-10 p-3 cursor-pointer flex gap-2">
                            <BlockOutlinedIcon />
                            <h1>Follow to {tweet?.userName} </h1>
                        </div>
                    )
                }
                {
                    isAdmin && (

                        <div className="bottom hover:bg-gray-100 font-medium text-base h-10 p-3 cursor-pointer flex gap-2">
                            <PushPinIcon />
                            <h1>Pin to Your Profile</h1>
                        </div>
                    )
                }

                {
                    isAdmin && (

                        <div className="top hover:bg-gray-100 font-medium text-base h-10 p-3 cursor-pointer flex gap-2">

                            <ChatBubbleOutlineIcon />


                            <h1>Changes who can reply</h1>
                        </div>
                    )
                }



                {
                    isAdmin && (
                        <div className="bottom hover:bg-gray-100 font-medium text-base h-10 p-3 cursor-pointer flex gap-2">
                            <GraphicEqIcon />
                            <h1>View Tweet Analsytic</h1>
                        </div>

                    )}


                {
                    !isAdmin && (

                        <div className="top hover:bg-gray-100 font-medium text-base h-10 p-3 cursor-pointer flex gap-2">
                            <SentimentVeryDissatisfiedIcon />
                            <h1>Not interested in this</h1>
                        </div>
                    )
                }
                {
                    !isAdmin && (

                        <div className="top hover:bg-gray-100 font-medium text-base h-10 p-3 cursor-pointer flex gap-2">
                            <BlockOutlinedIcon />
                            <h1>Block to {tweet?.userName} </h1>
                        </div>
                    )
                }
            </div>
        </div>
    )
}




export default TweetCard;