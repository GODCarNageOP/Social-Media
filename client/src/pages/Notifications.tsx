import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Notifications = () => {

  const NotificationTab = () => {
    const [openTab, setOpenTabs] = useState("Tweets");
    const location = useLocation();
    const pathname = location.pathname;
    const urlAfterSlash = pathname.substring(1);
  
    return (
      <div className="notifications-tab w-full">
        <div className="flex h-14 cursor-pointer">
          <Link
            to="/notifications"
            className={`flex-1 flex flex-col relative ${
              urlAfterSlash === "notifications" ? "active-link" : "inactive-link"
            }`}
          >
            <span
              className={`flex-1 font-bold flex justify-center items-center hover:bg-gray-200  ${
                urlAfterSlash === "notifications"
                  ? "activeTabs"
                  : "deactivate-tabs"
              }`}
            >
              All
            </span>
            {urlAfterSlash === "notifications" && (
              <div className="activelines"></div>
            )}
          </Link>
          <Link
            to="/notifications/verified"
            className={`flex-1 flex flex-col relative ${
              urlAfterSlash === "notifications/verified"
                ? "active-link"
                : "inactive-link"
            }`}
          >
            <span
              className={`flex-1 font-bold flex justify-center items-center hover:bg-gray-200  ${
                urlAfterSlash === "notifications/verified"
                  ? "activeTabs"
                  : "deactivate-tabs"
              }`}
            >
              Verified
            </span>
            {urlAfterSlash === "notifications/verified" && (
              <div className="activelines"></div>
            )}
          </Link>
          <Link
            to="/notifications/mentions"
            className={`flex-1  flex flex-col relative ${
              urlAfterSlash === "notifications/mentions"
                ? "active-link"
                : "inactive-link"
            }`}
          >
            <span
              className={`flex-1 font-bold flex justify-center items-center hover:bg-gray-200  ${
                urlAfterSlash === "notifications/mentions"
                  ? "activeTabs"
                  : "deactivate-tabs"
              }`}
            >
              Mentions
            </span>
            {urlAfterSlash === "notifications/mentions" && (
              <div className="activelines"></div>
            )}
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="notifications w-[50%]">
      <div className="notificationContainer flex mx-10 justify-between items-center mt-5">
        <h1 className="text-2xl font-semibold cursor-pointer">Notifications</h1>
        <Link to="/settings">
          <SettingsOutlinedIcon className="hover:bg-gray-200 cursor-pointer hover:rounded-full" />
        </Link>
      </div>
      <div className="notificationNavbar flex justify-between h-14 mt-3">
        <NotificationTab />
      </div>
    </div>
  );
};


export default Notifications;
