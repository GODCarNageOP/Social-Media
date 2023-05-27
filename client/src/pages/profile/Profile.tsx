import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./profile.css";
import { useNavigate } from "react-router-dom";

import profilePic from "../../assets/pofilePic.jpeg";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProfileTweet from "../../components/Tweets/ProfileTweets";
import TabBar from "../../components/Tabbar";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { useAlert } from "react-alert";
import Slider from "../slider/Slider";
import EditProfile from "./EditProfile";

const Profile = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  //const [openTab, setOpenTabs] = useState("Tweets");
  const location = useLocation();
  const pathname = location.pathname;
  const urlAfterSlash = pathname.substring(1);
  const Navigate = useNavigate();
  const { isLoggedIn, loading, error, user } = useSelector(
    (state: any) => state.user
  );
  const { personalTweets } = useSelector((state: any) => state.tweets);

  const profile = user;

  const tabs = [
    { label: "Tweets", path: `/profile/${user?.userName}` },
    { label: "Replies", path: "/profile/with_replies" },
    { label: "Media", path: "/profile/media" },
    { label: "Likes", path: "/profile/likes" },
  ];

  const address = user?.country + "," + user?.state;
  const joined = user?.joined;
  const joinedDate = new Date(joined || "");
  const joinedFormatted = joinedDate.toLocaleDateString("en-US", {
    month: "numeric",
    day: "2-digit",
    year: "2-digit",
  });
  const [openEdit, setOpenEdit] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      Navigate("/login");
    }
    if (error) {
      alert.error(error);
      dispatch(clearTweetsError());
    }
  
  }, [isLoggedIn, user, openEdit, loading, error]);

  const openEditClose = () => {
    setOpenEdit(!openEdit);
  };


  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <EditProfile openEdits={openEdit} setOpenEdits={setOpenEdit} />

          {user?.country === "" ||
          user?.state === "" ||
          !user?.language ||
          user?.language.length === 0 ? (
            <Slider />
          ) : null}
          {profile != null && (
            <div className="Profile  mobile:w-[100%]  w-[80%]  lg:w-[60%] xl:w-[50%] pt-1 border-x ml-[24%] -mr-1">
              <div className="homeContainer fixed bg-transparent w-[570px]">
                <div className="back-div flex gap-8 align-center pl-4 items-center">
                  <ArrowBackIcon className=" hover:bg-gray-200 cursor-pointer hover:rounded-full" />

                  <div className="flex flex-col  cursor-pointer">
                    <span className="font-bold topName text-xl">
                      {profile?.name}
                    </span>
                    <div className="flex gap-1 text-gray-500 items-center">
                      <span className="text-sm font-thin">
                        {profile?.numberOfTweets}
                      </span>
                      <span className="text-sm font-thin">Tweets</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cover-div h-[20%]  bg-gray-300  cursor-pointer mt-14"></div>

              <div className="profile-sec relative">
                <div className="flex justify-between relative items-center w-full profile-absolute-div pl-4">
                    <div className="profil-image mobile:w-[50px] mobile:h-[50px] sm:h-[75px] sm:w-[75px] md:w-[100px] md:h-[100pxpx]   lg:w-[120px] lg:h-[120px] left-5 rounded-full border-4 overflow-hidden  ">
                    <img
                      src={user?.avatar.url||profilePic}
                      className="object-cover h-full w-full  cursor-pointer"
                      alt=""
                    />
                  </div>
                  <button
                    onClick={openEditClose}
                    className=" h-10 p-2 px-5 mt-10 font-semibold bg-white rounded-3xl edit-btn-profile mx-5 hover:bg-gray-200 cursor-pointer"
                  >
                    Edit profile
                  </button>
                </div>
              </div>

              <div className="profile-details pl-5 relative -mb-5">
                <div className="flex flex-col pb-5 gap-1">
                  <span className="font-black text-xl">{profile?.name}</span>
                  <span className="text-sm text-gray-500">
                    @{profile?.userName}
                  </span>
                </div>
                <div className="profileContainer flex flex-col items-start text-gray-600">
                  <span className="text-gray-500 p-2 text-1xl">
                    {profile.bio}
                  </span>
                  <div className="top flex flex-wrap gap-3">
                    <div className="flex gap-1 items-center">
                      <LocationOnOutlinedIcon />
                      <span className="text-gray-500 text-sm">{address}</span>
                    </div>
                    <div className="flex gap-1 items-center">
                      <InsertLinkIcon />
                      <a className="text-blue-500 truncate text-sm cursor-pointer hover:underline" href={profile?.website}>
                        {profile?.website}
                      </a>
                    </div>
                  </div>
                  <div className="center flex flex-wrap items-center text-sm gap-2 mt-2">
                    <div className="flex gap-1 items-center">
                      <CakeOutlinedIcon />
                      <span className="text-gray-500">Born {profile?.dob}</span>
                    </div>
                    <div className="flex gap-1 flex-wrap items-center">
                      <CalendarMonthOutlinedIcon />
                      <span className="text-gray-500">
                        Joined {joinedFormatted}
                      </span>
                    </div>
                  </div>
                  <div className="bottom flex items-center flex-wrap mt-3 ml-2 gap-2 text-sm">
                    <div className="flex gap-1">
                      <span className="text-1xl font-bold text-black">
                        {profile?.numberOfFollowing}
                      </span>

                      <span className="text-gray-600 hover:underline cursor-pointer">
                        Following
                      </span>
                    </div>
                    <div className="flex gap-1">
                      <span className="text-1xl font-bold text-black">
                        {profile?.numberOfFollowers}
                      </span>
                      <span className="text-gray-600 hover:underline cursor-pointer">
                        Followers
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <TabBar tabs={tabs} />
              {urlAfterSlash === `profile/${user?.userName}` && (
                // Render your desired component here
                <ProfileTweet tweets={personalTweets} />
              )}

              {urlAfterSlash === "profile/likes" && (
                <ProfileTweet tweets={personalTweets} />
              )}

              {urlAfterSlash === "profile/with_replies" && (
                <ProfileTweet tweets={personalTweets} />
              )}

              {urlAfterSlash === "profile/media" && (
                <ProfileTweet tweets={personalTweets} />
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Profile;
