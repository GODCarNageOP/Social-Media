import React, { useState, useEffect } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';

const NightModeSwitch: React.FC = () => {
    const [nightMode, setNightMode] = useState(
        localStorage.getItem("nightMode") === "true"
    );

    useEffect(() => {
        if (nightMode) {
            document.documentElement.classList.add("night-mode");
            localStorage.setItem("nightMode", "true");
        } else {
            document.documentElement.classList.remove("night-mode");
            localStorage.setItem("nightMode", "false");
        }
    }, [nightMode]);

    const handleToggle = () => {
        setNightMode(!nightMode);
    };

    return (
        <div className={`nightMode ${nightMode ? "dark" : ""}`}>
            <label htmlFor="nightModeSwitch"><DarkModeIcon /></label>
            <input
                id="nightModeSwitch"
                type="checkbox"
                checked={nightMode}
                onChange={handleToggle}
            />
        </div>
    );
};

export default NightModeSwitch;
