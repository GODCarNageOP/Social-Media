import SearchIcon from "@mui/icons-material/Search";
import profilePic from '../assets/pofilePic.jpeg'

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
//import TrendingsCard from "../components/Trendings/TrendingsCard";
import Foryou from "../components/Trendings/Foryou";
import Trending from "../components/Trendings/Trending";
import News from "../components/Trendings/News";
import Sports from "../components/Trendings/Sport";
import Entertainment from "../components/Trendings/Entertainment";
import TabBar from '../components/Tabbar';
import { useSelector } from "react-redux";


const tabs = [
  { label: "For You", path: "/explore" },
  { label: "Trendings", path: "/explore/trendings" },
  { label: "News", path: "/explore/news" },
  { label: "Sports", path: "/explore/sports" },
  { label: "Entertainment", path: "/explore/entertainment" },

];
const Explore = () => {
  const Navigate = useNavigate();
  const { isLoggedIn } = useSelector((state:any) => state.user)

  useEffect(() => {
    if (!isLoggedIn) {
      Navigate('/login')
    }

  }, [Navigate, isLoggedIn])

  return (
    <div className="explore mobile:w-[100%]  w-[80%]  lg:w-[60%] xl:w-[50%] border-x ml-[24%] -mr-1">
      <div className="homeContainer fixed bg-transparent w-[570px]">
      <div className="relative">
        <ExploreTab />
      </div>
      </div>
    </div>
  );
};



const ExploreTab = () => {


  return (
    <div className="w-full relative">
    

        <div className="exploreContainer flex justify-between items-center">
          <div className="search h-[5%] flex-1 rounded-full bg-gray-100 flex mt-3 items-center p-3 gap-2 mx-10 justify-start">
            <div className=" sm:hidden profile-circle rounded-full overflow-hidden">
              <img src={profilePic} className="w-full h-full object-cover" alt="" />
              </div>
            <SearchIcon className="icon text-gray-500" />
            <input
              type="text"
              placeholder="Search Twitter"
              className="bg-transparent border-none outline-none"
            />
          </div>
          <Link to="/settings">
            <SettingsOutlinedIcon className="mr-10 mt-3 hover:bg-gray-200 cursor-pointer hover:rounded-full" />
          </Link>
        </div>
        <TabBar tabs={tabs} />
    

      <div className="">
        <ShowTabs />
      </div>
    </div>
  )
}

const ShowTabs = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const urlAfterSlash = pathname.substring(1);
  return (
    <div className="exploreNavbar  justify-between h-14 mt-2">
      {

        urlAfterSlash === "explore" && (
          <Foryou />
        )
      }
      {
        urlAfterSlash === 'explore/trendings' && (
          <Trending />
        )
      }
      {
        urlAfterSlash === 'explore/news' && (
          <News />
        )
      }
      {
        urlAfterSlash === 'explore/sports' && (
          <Sports />
        )

      }
      {
        urlAfterSlash === 'explore/entertainment' && (
          <Entertainment />
        )
      }

    </div>
  )
}

// const ExploreTab = () => {

//   const location = useLocation();
//   const pathname = location.pathname;
//   const urlAfterSlash = pathname.substring(1);

//   return (
//     <div className="explore-tab w-full">
//       <div className="flex h-14 cursor-pointer">
//         <Link
//           to="/explore"
//           className={`flex-1 flex flex-col relative ${urlAfterSlash === "explore" ? "active-link" : "inactive-link"
//             }`}
//         >
//           <span className={`flex-1 font-bold flex justify-center items-center hover:bg-gray-200  ${urlAfterSlash === "explore" ? "activeTabs" : "deactivate-tabs"
//             }`}>
//             For you
//           </span>
//           {urlAfterSlash === "explore" ? (

//             <div className="activelines"></div>
//           ) : (
//             <div className="deactivatelines"></div>
//           )
//           }
//         </Link>
//         <Link
//           to="/explore/trendings"
//           className={`flex-1 flex flex-col relative ${urlAfterSlash === "explore/trendings" ? "active-link" : "inactive-link"
//             }`}
//         >
//           <span className={`flex-1 font-bold flex justify-center items-center hover:bg-gray-200  ${urlAfterSlash === "explore/trendings" ? "activeTabs" : "deactivate-tabs"
//             }`}>
//             Trending
//           </span>
//           {urlAfterSlash === "explore/trendings" ? (

//             <div className="activelines"></div>
//           ) : (
//             <div className="deactivatelines"></div>
//           )
//           }
//         </Link>
//         <Link
//           to="/explore/news"
//           className={`flex-1  flex flex-col relative ${urlAfterSlash === "explore/news" ? "active-link" : "inactive-link"
//             }`}
//         >
//           <span className={`flex-1 font-bold flex justify-center items-center hover:bg-gray-200  ${urlAfterSlash === "explore/news" ? "activeTabs" : "deactivate-tabs"
//             }`}>
//             News
//           </span>
//           {urlAfterSlash === "explore/news" ? (

//             <div className="activelines"></div>
//           ) : (
//             <div className="deactivatelines"></div>
//           )
//           }
//         </Link>
//         <Link
//           to="/explore/sports"
//           className={`flex-1 flex flex-col relative ${urlAfterSlash === "explore/sports" ? "active-link" : "inactive-link"
//             }`}
//         >
//           <span className={`flex-1 font-bold flex justify-center items-center hover:bg-gray-200  ${urlAfterSlash === "explore/sports" ? "activeTabs" : "deactivate-tabs"
//             }`}>
//             Sports
//           </span>
//           {urlAfterSlash === "explore/sports" ? (

//             <div className="activelines"></div>
//           ) : (
//             <div className="deactivatelines"></div>
//           )
//           }

//         </Link>
//         <Link
//           to="/explore/entertainment"
//           className={`flex-1 flex flex-col relative ${urlAfterSlash === "explore/entertainment" ? "active-link" : "inactive-link"
//             }`}
//         >
//           <span className={`flex-1 font-bold flex justify-center items-center hover:bg-gray-200  ${urlAfterSlash === "explore/entertainment" ? "activeTabs" : "deactivate-tabs"
//             }`}>
//             Entertainment
//           </span>
//           {urlAfterSlash === "explore/entertainment" ? (

//             <div className="activelines"></div>
//           ) : (
//             <div className="deactivatelines"></div>
//           )
//           }

//         </Link>
//       </div>

//       {

//         urlAfterSlash === "explore" && (
//           <Foryou />
//         )
//       }
//       {
//         urlAfterSlash === 'explore/trendings' && (
//           <Trending />
//         )
//       }
//       {
//         urlAfterSlash === 'explore/news' && (
//           <News />
//         )
//       }
//       {
//         urlAfterSlash === 'explore/sports' && (
//           <Sports />
//         )

//       }
//       {
//         urlAfterSlash === 'explore/entertainment' && (
//           <Entertainment />
//         )
//       }

//     </div>
//   );
// };



export default Explore;

