import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import profilePic from "../../assets/pofilePic.jpeg";
import { TextField } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { clearUserErrors, updateProfile } from '../../redux/action/UserAction';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { writeTweet, fetchPersonalTweets } from '../../redux/action/TweetAction';

const EditProfile = ({ openTweet, setOpenTweet }) => {
    const { user, loading,error } = useSelector((state) => state.user);
    const { personalTweets } = useSelector((state) => state.tweets);

    const dispatch = useDispatch();
    const [Tweet, setTweet] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);

    const saveData = () => {
        const userData = {
            content:Tweet,
        }
        dispatch(writeTweet(userData));
        setOpenTweet(!openTweet);
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    }
    const removeImage = () => {
        setSelectedImage(null);
    }
    const openCloseEdit = () => {
        setOpenTweet(!openTweet)
    }
    const onSave = () => {
        const tweetData = {
            content:Tweet,
        }

        dispatch(writeTweet(tweetData));
        dispatch(fetchPersonalTweets())
    }
    useEffect(() => {
    if (error) {
        dispatch(clearUserErrors())
    }

    }, [dispatch,personalTweets])

    return (
        <>
            <div className={`w-full m-auto p-5 pb-1 ${openTweet ? "Write-Tweet" : "none"} lg:mt-4 rounded-none lg:rounded-lg pb-4 mobile:min-h-screen sm:min-h-[100vh] md:min-h-0  lg:h-fit`}>
                <div className="flex flex-col relative mt- p-2 pt-0">
                    <div className="flex justify-between w-full h-19 bg-white  sticky top-[-00px] h-18 stayTop">
                        <div className="flex gap-4 items-center">
                            <span className="flex font-bold cursor-pointer" onClick={openCloseEdit}>
                                <CloseIcon />
                            </span>
                        </div>
                        <div className=" md:hidden lg:hidden mobile:flex sm:flex gap-3">
                            <label htmlFor="imageUpload" className="text-blue-500 cursor-pointer flex items-center">
                                <InsertPhotoOutlinedIcon />
                                <input
                                    id="imageUpload"
                                    type="file"
                                    accept="image/*"
                                    style={{ display: "none" }}
                                    onChange={handleImageChange}
                                />
                            </label>
                            <span className='bg-blue-500 p-2 text-white pl-8 pr-8 rounded-full cursor-pointer '>
                                Tweet
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-5 mt-3">
                        <div className="overflow-hidden rounded-full profile-pic-Write-tweet">
                            <img
                                src={profilePic}
                                className="object-cover w-full h-full  cursor-pointer"
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col gap-3 w-full ">
                            <div className="flex">
                                <span className='text-blue-500   p-1 border-2 border-solid border-gray-400 rounded-full pl-2 pr-2 '>Everyone</span>
                            </div>

                            <div className="flex flex-col">

                                <input
                                    id="outlined-multiline-static"
                                    className='w-full border-0 font-medium text'
                                    value={Tweet}
                                    onChange={(e) => setTweet(e.target.value)}

                                    placeholder='What is happening ?!' />

                                <div className="flex gap-2 min-h-[100px] max-h-[400px] relative w-full">

                                    <div className={`closeIcons text-gray-500 cursor-pointer absolute left-0 ${selectedImage ? "" : "none"} `} onClick={() => removeImage()}>
                                        <CloseOutlinedIcon />
                                    </div>
                                    {selectedImage && (
                                        <img
                                            src={selectedImage}
                                            alt="Selected Image"
                                            className='object-contain h-full w-full  '
                                        // style={{ width: '100%', marginTop: '10px' }}
                                        />
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="md:flex  lg:flex justify-between item-center  w-full mobile:hidden sm:hidden ">
                    <div className="flex items-center">
                        <label htmlFor="imageUpload" className="text-blue-500 cursor-pointer flex items-center">
                            <InsertPhotoOutlinedIcon />
                            <input
                                id="imageUpload"
                                type="file"
                                accept="image/*"
                                style={{ display: "none" }}
                                onChange={handleImageChange}
                            />
                        </label>
                    </div>
                    <span onClick={saveData} className='bg-blue-500 p-2 text-white pl-8 pr-8 rounded-full cursor-pointer '>
                        Tweet
                    </span>
                </div>
            </div>
        </>
    );
};

export default EditProfile;
