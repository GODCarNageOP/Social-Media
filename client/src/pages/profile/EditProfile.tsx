import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import profilePic from "../../assets/pofilePic.jpeg";
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../redux/action/UserAction';



const months = [
    {
        value: 'January',
        label: 'January',
    },
    {
        value: 'February',
        label: 'February',
    },
    {
        value: 'March',
        label: 'March',
    },
    {
        value: 'April',
        label: 'April',
    },
    {
        value: 'May',
        label: 'May',
    },
    {
        value: 'June',
        label: 'June',
    },
    {
        value: 'July',
        label: 'July',
    },
    {
        value: 'August',
        label: 'August',
    },
    {
        value: 'September',
        label: 'September',
    },
    {
        value: 'October',
        label: 'October',
    },
    {
        value: 'November',
        label: 'November',
    },
    {
        value: 'December',
        label: 'December',
    },
];
interface EditProfileProps {
    openEdits: boolean;
    setOpenEdits: (open: boolean) => void;
}


const days = Array.from({ length: 31 }, (_, index) => {
    const day = index + 1;
    return {
        value: day.toString(),
        label: day.toString(),
    };
});

const years = [];
const currentYear = new Date().getFullYear();

for (let i = 1900; i <= 2023; i++) {
    years.push({
        value: i.toString(),
        label: i.toString(),
    });
}

const EditProfile = ({ openEdits, setOpenEdits }) => {
    const { user,loading } = useSelector((state) => state.user);
    const [name, setName] = useState(user?.name);
    const dispatch = useDispatch();
    const [bio, setBio] = useState(user?.bio);
    const [location, setLocation] = useState(user?.country + ',' + user?.state);
    const [website, setWebsite] = useState(user?.website);
    const dob = user?.dob;
    const dobParts = dob?.split(' ');

    const [selectedMonth, setSelectedMonth] = useState(dobParts?.[0] || 'January');
    const [selectedDay, setSelectedDay] = useState(dobParts?.[1] || '1');
    const [selectedYear, setSelectedYear] = useState(dobParts?.[2] || '2000');

    const locat = location?.split(',')
    const birth = selectedMonth + " " + selectedDay + " " + selectedYear;



    const saveData = () => {
        const userData = {
            name,
            bio,
            state: locat[1],
            country: locat[0],
            website,
            dob: birth,

        }
        dispatch(updateProfile(userData))
        setOpenEdits(!openEdits);

    }
    // Splitting dob into year, month, and day

    const openCloseEdit = () => {
        setOpenEdits(!openEdits)
    }

    return (
        <>
            <div className={`w-full m-auto p-5 editProfile pb-14 ${openEdits ? "" : "none"}`}>
                <div className="flex justify-between w-full h-19 bg-white  sticky top-[-20px] h-18 stayTop">
                    <div className="flex gap-4 items-center">
                        <span className="flex font-bold cursor-pointer" onClick={openCloseEdit}>
                            <CloseIcon />
                        </span>
                        <span className="flex font-bold text-1xl">Edit Profile</span>
                    </div>
                    <span onClick={saveData} className='bg-blue-500  w-fit  p-5 cursor-pointer text-white h-8 flex items-center  rounded-full '>Save</span>
                </div>

                <div className="flex flex-col mt-5 p-2">
                    <div className="cover-div h-52  bg-gray-300  cursor-pointer"></div>

                    <div className=" relative h-fit">
                        <div className="flex justify-between relative items-center w-full profile-absolute-div pl-4">
                            <div className="profil-image w-[24%] left-5 rounded-full border-4 overflow-hidden  ">
                                <img
                                    src={profilePic}
                                    className="object-cover h-full w-full  cursor-pointer"
                                    alt=""
                                />
                            </div>
                            <button className=" h-10 p-2 px-5  font-semibold bg-white rounded-3xl edit-btn-profile mx-5 hover:bg-gray-200 cursor-pointer">
                                Edit profile
                            </button>
                        </div>
                    </div>

                    <div className="form w-full flex flex-col gap-5">
                        <TextField
                            id="filled-multiline-flexible"
                            label="Name"
                            multiline
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='w-full'
                            maxRows={4}
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Bio"
                            className='w-full'
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            multiline
                            rows={4}
                            defaultValue="Default Value"
                        />
                        <TextField
                            id="filled-multiline-flexible"
                            label="Locatioon"
                            multiline
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className='w-full'
                            maxRows={4}
                            variant="outlined"
                        />
                        <TextField
                            id="filled-multiline-flexible"
                            label="Website"
                            multiline
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                            className='w-full'
                            maxRows={4}
                            variant="outlined"
                        />

                        <div className="flex w-full max-w-[450px] gap-3">
                            <TextField
                                id="outlined"
                                select
                                label="Month"
                                className="flex-grow"
                                value={selectedMonth}
                                onChange={(e) => setSelectedMonth(e.target.value)}
                                SelectProps={{
                                    native: true,
                                }}
                            >
                                {months.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
                            <TextField
                                id="outlined-"
                                select
                                className="flex-1"
                                label="Day"
                                defaultValue={days[0].value}
                                value={selectedDay}
                                onChange={(e) => setSelectedDay(e.target.value)}
                                SelectProps={{
                                    native: true,
                                }}
                            >
                                {days.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
                            <TextField
                                id="outlined"
                                select
                                className="flex-1"
                                label="Year"
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value)}
                                SelectProps={{
                                    native: true,
                                }}
                            >
                                {years.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditProfile;
