import React, { useState, useEffect } from "react";

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
        <div>
            <label htmlFor="nightModeSwitch">Night Mode</label>
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
