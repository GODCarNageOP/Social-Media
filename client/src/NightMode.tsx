import React, { useState, useEffect } from "react";

const DarkModeSwitcher: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem("isDarkMode") === "true"
    );

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
        localStorage.setItem("isDarkMode", String(isDarkMode));
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div>
            <label htmlFor="darkModeSwitch">Dark Mode</label>
            <input
                id="darkModeSwitch"
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleDarkMode}
            />
        </div>
    );
};

export default DarkModeSwitcher;
