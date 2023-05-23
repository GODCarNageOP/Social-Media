import React from "react";
import ClipLoader from "react-spinners/ClipLoader";




const Loader = () => {

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    return (
        <div className="Loader w-full flex items-center justify-center">
            <ClipLoader color="#000" size={200} />
        </div>
    );
};

export default Loader;