import React, { useEffect, useRef, useState } from "react";
import "./TweetCard.css";
import profilePic from "../../assets/pofilePic.jpeg";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PushPinIcon from "@mui/icons-material/PushPin";
import DeleteIcon from "@mui/icons-material/Delete";
import { TbMessageCircle2 } from "react-icons/tb";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import { AiOutlineRetweet, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdOutlineGraphicEq } from "react-icons/md";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { BsUpload, BsThreeDots } from "react-icons/bs";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useSelector, useDispatch } from "react-redux";
import { deleteTweet, updateTweet } from "../../redux/action/TweetAction";
import { useLocation } from "react-router-dom";
import Loader from "../Loader";

import { addLike, checkUserLikedTweet, deleteLike } from "../../redux/action/LikeAction";
import { checkFollow, clearFollowError, followUser, } from '../../redux/action/FollowAction';

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

const label = { inputProps: { "aria-label": "like " } };
const TweetCard: React.FC<TweetCardProps> = ({ tweet }) => {
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const moreRef = useRef<HTMLDivElement>(null);
    const { liked } = useSelector((state) => state?.likes);
    // const { isFollowing,following,followers } = useSelector((state) => state.follow)
    const { following, error } = useSelector((state) => state.follow);
    const { user, loading, } = useSelector((state) => state.user);
    const id = tweet?._id;
    console.log("folose", following)
    const followId = tweet?.user;
    const dispatch = useDispatch();

    const handleMore = () => {
        setIsMoreOpen(!isMoreOpen);
    };
    let joined = tweet?.createdAt;
    const dateObj = new Date(joined);
    const now = new Date();




    useEffect(() => {
        // Check if the logged-in user is following the user who posted the tweet
        const loggedInUserId = user?._id;
        // add null check for following

        if (error) {
            dispatch(clearFollowError())
        }

    }, [following, user]);
    const diffInMinutes = Math.floor((now - dateObj) / (1000 * 60));
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    // console.log("isfffsfd",isFollowing,tweet?.user===following?.following[0])
    let formattedDate;

    if (diffInMinutes < 1) {
        formattedDate = `Less than a minute ago`;
    } else if (diffInHours < 1) {
        formattedDate = `${diffInMinutes} minute${diffInMinutes === 1 ? "" : "s"
            } ago`;
    } else if (diffInDays < 1) {
        formattedDate = `${diffInHours} hour${diffInHours === 1 ? "" : "s"} ago`;
    } else if (diffInDays < 5) {
        formattedDate = `${diffInDays} day${diffInDays === 1 ? "" : "s"} ago`;
    } else {
        const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
        const day = dateObj.getDate().toString().padStart(2, "0");
        const year = dateObj.getFullYear().toString().slice(-2);
        formattedDate = `${month}/${day}/${year}`;
    }
    const [isLiked, setIsLiked] = useState(liked || false);
    const [numOfLikes, setNumOfLikes] = useState(tweet?.numOfLikes || 0);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                moreRef.current &&
                !moreRef.current.contains(event.target as Node)
            ) {
                setIsMoreOpen(false);
            }
        };

        dispatch(checkUserLikedTweet(id));
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dispatch, tweet]);


    const addLikeFun = () => {
        if (!isLiked) {
            setNumOfLikes((prevLikes) => prevLikes + 1);
            setIsLiked(true);
            dispatch(addLike(id));
        }
    };

    const removeLikeFun = () => {
        if (isLiked) {
            setNumOfLikes((prevLikes) => prevLikes - 1);
            setIsLiked(false);
            dispatch(deleteLike(id));
        }
    };


    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className="Tweets-card flex w-[565px] gap-2 jusitfy-between  hover:bg-gray-100 -mt-1">
                    <div className="left flex items-center justify-center mt-2 tweet-profile  overflow-hidden rounded-full ml-2">
                        <img src={tweet?.avatar} alt="" className="tweet-profile object-cover" />
                    </div>
                    <div className="center flex flex-col flex-1  mt-2">
                        <div className="flex w-full   justify-between  sm:w-full">
                            <div className="profile-details-tweets flex  items-center justify-center">
                                <span className="font-bold text-sm hover:underline cursor-pointer">{tweet?.name}</span>
                                <span className="text-gray-600 text-sm  sm:text-base ml-2"> @{tweet?.userName}</span>
                                <span className="ml-3 text-gray-600">•</span>
                                <span className="text-gray-600 text-sm sm:text-base ml-2">{formattedDate}</span>
                            </div>

                            <span className="cursor-pointer  tweet-icon hover:text-blue-500 text-gray-500 mr-2" onClick={() => handleMore()}>
                                <BsThreeDots />
                            </span>

                            {isMoreOpen && (
                                <div ref={moreRef} className="absolute right-0" onClick={() => handleMore()}>
                                    <More id={id} tweet={tweet} following={following} user={user} />
                                </div>
                            )}
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
                                    <span
                                        className="cursor-pointer flex items-center text-sm tweet-icon hover:text-blue-500 text-gray-700"
                                        onClick={isLiked ? removeLikeFun : addLikeFun}
                                    >
                                        {isLiked ? <Favorite /> : <FavoriteBorder />}
                                    </span>
                                    <span className="cursor-pointer flex text-sm items-center tweet-icon hover:text-blue-500 text-gray-700">
                                        {numOfLikes}
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
                    <div className="right flex flex-6  items-s"></div>
                </div>
            )}
        </>
    );
};





const More = ({ id, tweet, user }) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const pathname = location.pathname;
    const urlAfterSlash = pathname.substring(1);

    let isAdmin = false;
    
    if (tweet?.user === user?._id) {
        isAdmin = true;
    }
    
    const { isFollowed }=useSelector((state)=>state?.follow);
    
    const [isFollowing, setIsFollowing] = useState(isFollowed);
    useEffect(() => {
       
        dispatch(checkFollow(tweet?.user))
    }, [isFollowed,isFollowing,dispatch]);

    // Function to check if the user who tweeted is being followed

    console.log("isFollowser",isFollowing,isFollowed)
 
    const deleteTw = (id) => {
        dispatch(deleteTweet(id));
    };

    const follow = () => {
        dispatch(followUser(tweet?.user));
        setIsFollowing(!isFollowing)

    };

    return (
        <div className="overlay h-33 w-80 p-3  bg-white  shadow-lg border rounded-xl z-20 flex flex-col top-[465px] ml-[60px]">
            <div className="overlayContainer gap-8">
                {isAdmin && (
                    <div
                        onClick={() => deleteTw(id)}
                        className="top hover:bg-gray-100 font-medium text-base h-10 p-3 cursor-pointer flex gap-2"
                    >
                        <DeleteIcon />
                        <h1>Delete</h1>
                    </div>
                )}

                {!isAdmin && !isFollowing && (
                    <div
                        onClick={() => follow()}
                        className="top hover:bg-gray-100 font-medium text-base h-10 p-3 cursor-pointer flex gap-2"
                    >
                        <PersonAddAltOutlinedIcon />
                        <h1>Follow {tweet?.userName}</h1>
                    </div>
                )}
                {!isAdmin && isFollowing && (
                    <div
                        onClick={() => follow()}
                        className="top hover:bg-gray-100 font-medium text-base h-10 p-3 cursor-pointer flex gap-2"
                    >
                        <PersonAddAltOutlinedIcon />
                        <h1>UnFollow {tweet?.userName}</h1>
                    </div>
                )}

                {isAdmin && (
                    <div className="bottom hover:bg-gray-100 font-medium text-base h-10 p-3 cursor-pointer flex gap-2">
                        <PushPinIcon />
                        <h1>Pin to Your Profile</h1>
                    </div>
                )}

                {isAdmin && (
                    <div className="top hover:bg-gray-100 font-medium text-base h-10 p-3 cursor-pointer flex gap-2">
                        <ChatBubbleOutlineIcon />
                        <h1>Change who can reply</h1>
                    </div>
                )}

                {isAdmin && (
                    <div className="bottom hover:bg-gray-100 font-medium text-base h-10 p-3 cursor-pointer flex gap-2">
                        <GraphicEqIcon />
                        <h1>View Tweet Analytics</h1>
                    </div>
                )}

                {!isAdmin && (
                    <div className="top hover:bg-gray-100 font-medium text-base h-10 p-3 cursor-pointer flex gap-2">
                        <SentimentVeryDissatisfiedIcon />
                        <h1>Not interested in this</h1>
                    </div>
                )}

                {!isAdmin && (
                    <div className="top hover:bg-gray-100 font-medium text-base h-10 p-3 cursor-pointer flex gap-2">
                        <BlockOutlinedIcon />
                        <h1>Block {tweet?.userName}</h1>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TweetCard;