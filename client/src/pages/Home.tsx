import { useLocation, useNavigate } from "react-router-dom";
import TabBar from '../components/Tabbar';
import { useSelector } from "react-redux";
//import { fetchAllTweets } from '../redux/action/TweetAction';
import ProfileTweet from "../components/Tweets/ProfileTweets";
import Loader from "../components/Loader";
import {useEffect} from 'react';


const Home = () => {
  const tabs = [
    { label: "For You", path: "/" },
    { label: "following", path: "/following" },
    // { label: "Tab 3", path: "/tab3" },
  ];
  const Navigate = useNavigate();
  const { isLoggedIn,loading } = useSelector((state:any) => state.user)

  useEffect(() => {
    if (!isLoggedIn) {
      Navigate('/login')
    }
  
  }, [isLoggedIn,Navigate])
  const { allTweets  } = useSelector((state:any) => state.tweets)
  const location = useLocation();
  const pathname = location.pathname;
  const urlAfterSlash = pathname.substring(1);
 // const dispatch = useDispatch();

  return (
    <>
      {
        loading ? (
          <Loader />
        ) : (
          <div className="home mobile:w-[100%]  w-[80%]  lg:w-[60%] xl:w-[50%] border-x ml-[24%] -mr-1">
             <div className="homeContainer fixed bg-transparent w-[565px]">
            <h1 className="text-2xl font-semibold my-1 p-4 cursor-pointer mx-10">Home</h1>
            <div className="homeNavbar flex justify-between h-16 flex-col">
              {/* <HomeTabs/> */}
              <TabBar tabs={tabs} />
              {
                urlAfterSlash === `home` && (
                  // Render your desired component here
                  <ProfileTweet tweets={allTweets} />
                )
              }

              {

                urlAfterSlash === "following" && (
                  <ProfileTweet tweets={allTweets} />

                )
              }




            </div>
            </div>
          </div>
        )
      }
    </>

  );
};




// const HomeTabs = () => {
//   const location = useLocation();
//   const pathname = location.pathname;
//   const urlAfterSlash = pathname.substring(1);

//   return (
//     <div className="explore-tab w-full">
//       <div className="flex h-14 cursor-pointer">
//         <Link
//           to="/"
//           className={`flex-1 flex flex-col relative ${urlAfterSlash === "" ? "active-link" : "inactive-link"
//             }`}
//         >
//           <span className={`flex-1 font-bold flex justify-center items-center hover:bg-gray-200  ${urlAfterSlash === "" ? "activeTabs" : "deactivate-tabs"
//             }`}>
//             For you
//           </span>
//           {urlAfterSlash === "" ? (

//             <div className="activelines"></div>
//           ) : (
//             <div className="deactivatelines"></div>
//           )
//           }
//         </Link>
//         <Link
//           to="/following"
//           className={`flex-1 flex flex-col relative ${urlAfterSlash === "following" ? "active-link" : "inactive-link"
//             }`}
//         >
//           <span className={`flex-1 font-bold flex justify-center items-center hover:bg-gray-200  ${urlAfterSlash === "following" ? "activeTabs" : "deactivate-tabs"
//             }`}>
//             Trending
//           </span>
//           {urlAfterSlash === "following" ? (

//             <div className="activelines"></div>
//           ) : (
//             <div className="deactivatelines"></div>
//           )
//           }
//         </Link>


//       </div>


//     </div>
//   );
// };


export default Home;
