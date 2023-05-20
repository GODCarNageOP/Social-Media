import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./profile.css";
import profilePic from "../../assets/pofilePic.jpeg";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';

import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";


const profile = {
  name: "Aakash Kumar",
  userName: "Akashkumar58906666",
  profession: "FULL STACK DEVELOPER",
  profilepic: profilePic,
  address: {
    country: "India, Bihar",
    website: "github.com/Akash-Kashyap24.git.com",
    dob: "December 5, 2001",
    joined: "August 5, 2001",
  },
  followers: [
    {
      id: "follower1",
      profilePic: "follower1.jpg",
      name: "John Doe",
      userName: "johndoe123",
    },
    {
      id: "follower2",
      profilePic: "follower2.jpg",
      name: "Jane Smith",
      userName: "janesmith456",
    },
  ],
  following: [
    {
      id: "following1",
      profilePic: "following1.jpg",
      name: "Emma Johnson",
      userName: "emmajohnson789",
    },
    {
      id: "following2",
      profilePic: "following2.jpg",
      name: "Michael Brown",
      userName: "michaelbrown321",
    },
  ],
  likes: [
    {
      id: "like1",
      profilePic: "like1.jpg",
      name: "Sarah Johnson",
      userName: "sarahjohnson567",
      postId: "123",
      content: "Great post!",
    },
    {
      id: "like2",
      profilePic: "like2.jpg",
      name: "David Smith",
      userName: "davidsmith890",
      postId: "456",
      content: "I totally agree!",
    },
  ],
  replies: [
    {
      id: "reply1",
      profilePic: "reply1.jpg",
      name: "Robert Johnson",
      userName: "robertjohnson111",
      commentId: "789",
      content: "Nice work!",
    },
    {
      id: "reply2",
      profilePic: "reply2.jpg",
      name: "Emily Davis",
      userName: "emilydavis222",
      commentId: "101112",
      content: "Keep it up!",
    },
  ],
  numberOfFollowers: 2,
  numberOfFollowing: 2,
  numberOfLikes: 2,
  numberOfTweets: 19,
  tweets: [
    {
      id: "tweet1",
      content: "This is my first tweet!",
      timestamp: "May 1, 2023",
      likes: 10,
      retweets: 5,
      replies: 2,
    },
    {
      id: "tweet2",
      content: "Excited to be here on Twitter!",
      timestamp: "May 3, 2023",
      likes: 20,
      retweets: 8,
      replies: 3,
    },
    {
      id: "tweet3",
      content: "Working on a new project. Stay tuned!",
      timestamp: "May 5, 2023",
      likes: 15,
      retweets: 3,
      replies: 1,
    },
    {
      id: "tweet4",
      content: "Happy weekend, everyone!",
      timestamp: "May 7, 2023",
      likes: 12,
      retweets: 6,
      replies: 4,
    },
    {
      id: "tweet5",
      content: "Enjoying the picnic",
      timestamp: "May 7, 2023",
      likes: 12,
      retweets: 6,
      replies: 4,
    },
  ],
};

const Profile = () => {
  return (
    <div className="Profile w-[50%] pt-1">
      <div className="back-div flex gap-8 align-center pl-4 items-center">
               <ArrowBackIcon />

        <div className="flex flex-col  cursor-pointer">
          <span className="font-bold topName text-xl">{profile?.name}</span>
          <div className="flex gap-1 text-gray-500 items-center">
            <span className="text-sm font-thin">{profile?.numberOfTweets}</span>
            <span className="text-sm font-thin">Tweets</span>
          </div>
        </div>
      </div>

      <div className="cover-div h-[20%]  bg-gray-300  cursor-pointer"></div>

      <div className="profile-sec relative">
        <div className="flex justify-between relative items-center w-full profile-absolute-div pl-4">
          <div className="profil-image w-[24%] left-5 rounded-full border-4 overflow-hidden  ">
            <img
              src={profilePic}
              className="object-cover h-full w-full  cursor-pointer"
              alt=""
            />
          </div>
          <button className=" h-10 p-2 px-5 mt-10 font-semibold bg-white rounded-3xl edit-btn-profile mx-5 hover:bg-gray-200 cursor-pointer">
            Edit profile
          </button>
        </div>
      </div>

      <div className="profile-details pl-5 relative -mb-5">
        <div className="flex flex-col pb-5 gap-1">
          <span className="font-black text-xl">{profile?.name}</span>
          <span className="text-sm text-gray-500">@{profile?.userName}</span>
        </div>
        <div className="profileContainer flex flex-col items-start text-gray-600">
          <span className="text-gray-500 p-2 text-sm">
            {profile.profession}
          </span>
          <div className="top flex gap-3">
            <div className="flex gap-1 items-center">
              <LocationOnOutlinedIcon />
              <span className="text-gray-500 text-sm">
                {profile?.address?.country}
              </span>
            </div>
            <div className="flex gap-1 items-center">
              <InsertLinkIcon />
              <span className="text-blue-500 truncate text-sm cursor-pointer hover:underline">
                {profile?.address?.website}
              </span>
            </div>
          </div>
          <div className="center flex items-center text-sm gap-2 mt-2">
            <div className="flex gap-1 items-center">
              <CakeOutlinedIcon />
              <span className="text-gray-500">
                Born {profile?.address?.dob}
              </span>
            </div>
            <div className="flex gap-1 items-center">
              <CalendarMonthOutlinedIcon />
              <span className="text-gray-500">
                Joined {profile?.address?.joined}
              </span>
            </div>
          </div>
          <div className="bottom flex items-center mt-3 ml-2 gap-2 text-sm">
            <div className="flex gap-1">
              <span className="text-1xl font-bold text-black">
                {profile?.numberOfFollowing}
              </span>

              <span className="text-gray-600 hover:underline cursor-pointer">Following</span>
            </div>
            <div className="flex gap-1">
              <span className="text-1xl font-bold text-black">
                {profile?.numberOfFollowers}
              </span>
              <span className="text-gray-600 hover:underline cursor-pointer">Followers</span>
            </div>
          </div>
        </div>
      </div>
      <ProfileTweet />
    </div>
  );
};


const ProfileTweet = () => {
  const [openTab, setOpenTabs] = useState("Tweets");
  const location = useLocation();
  const pathname = location.pathname;
  const urlAfterSlash = pathname.substring(1);

  return (
    <div className="profile-tweet">
      <div className="flex h-14 cursor-pointer">
        <Link
          to="/profile"
          className={`flex-1 flex flex-col relative ${urlAfterSlash === "profile" ? "active-link" : "inactive-link"
            }`}
        >
          <span className={`flex-1 flex justify-center items-center hover:bg-gray-200 font-medium ${urlAfterSlash === "profile" ? "activeTabs" : "deactivate-tabs"
            }`}>
            Tweets
          </span>
          {urlAfterSlash === "profile" && <div className="activelines"></div>}
        </Link>
        <Link
          to="/profile/with_replies"
          className={`flex-1 flex flex-col relative ${urlAfterSlash === "profile/with_replies" ? "active-link" : "inactive-link"
            }`}
        >
          <span className={`flex-1 flex justify-center items-center hover:bg-gray-200 font-medium ${urlAfterSlash === "profile/with_replies" ? "activeTabs" : "deactivate-tabs"
            }`}>
            Replies
          </span>
          {urlAfterSlash === "profile/with_replies" && (
            <div className="activelines"></div>
          )}
        </Link>
        <Link
          to="/profile/media"
          className={`flex-1 flex flex-col relative ${urlAfterSlash === "profile/media" ? "active-link" : "inactive-link"
            }`}
        >
          <span className={`flex-1 flex justify-center items-center hover:bg-gray-200 font-medium ${urlAfterSlash === "profile/media" ? "activeTabs" : "deactivate-tabs"
            }`}>
            Media
          </span>
          {urlAfterSlash === "profile/media" && (
            <div className="activelines"></div>
          )}
        </Link>
        <Link
          to="/profile/likes"
          className={`flex-1 flex flex-col relative ${urlAfterSlash === "profile/likes" ? "active-link" : "inactive-link"
            }`}
        >
          <span className={`flex-1 flex justify-center items-center hover:bg-gray-200 font-medium ${urlAfterSlash === "profile/likes" ? "activeTabs" : "deactivate-tabs"
            }`}>
            Likes
          </span>
          {urlAfterSlash === "profile/likes" && (
            <div className="activelines"></div>
          )}
        </Link>
      </div>
    </div>
  );
};



const TweetCard = () => {
  <div></div>;
};

export default Profile;
