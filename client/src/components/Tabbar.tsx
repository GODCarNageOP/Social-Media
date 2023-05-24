import React from "react";
import { Link, useLocation } from "react-router-dom";

interface Tab {
    label: string;
    path: string;
}

interface TabBarProps {
    tabs: Tab[];

}

const TabBar: React.FC<TabBarProps> = ({ tabs }) => {
    const location = useLocation();
    const pathname = location.pathname;
    const urlAfterSlash = pathname.substring(1);



    return (
        <div className="tab-bar w-full">
            <div className="flex h-14 cursor-pointer">
                {tabs.map((tab) => (

                    <Link
                        key={tab.path}
                        to={tab.path}
                        className={`flex-1 flex flex-col relative ${urlAfterSlash === tab.path ? "active-link" : "inactive-link"
                            }`}
                    >
                        <span
                            className={`flex-1 font-bold flex justify-center items-center hover:bg-gray-200 ${urlAfterSlash === tab.path ? "activeTabs" : "deactivate-tabs"
                                }`}
                        >
                            {tab.label}
                        </span>

                        {/* <div className="activelines"></div> */}
                        {urlAfterSlash === tab.path.substring(1) ? (
                            <div className="activelines"></div>
                        ) : (
                            <div className="deactivatelines"></div>
                        )}




                    </Link>
                ))}
            </div>
        </div>
    );
};

export default TabBar;
