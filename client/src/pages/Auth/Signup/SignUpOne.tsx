import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import twitterIcon from '../../../assets//twitter.png'
import GoogleIcon from '@mui/icons-material/Google';
import { TextField } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAlert } from 'react-alert';
import { clearUserErrors } from '../../../redux/action/UserAction';
import Loader from '../../../components/Loader';
import { useDispatch, useSelector } from 'react-redux';

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

const gender = [
    {
        value: 'Male',
        label: 'Male',
    },
    {
        value: 'Female',
        label: 'Female',
    }
]


const CreateYouAccount = () => {

    const alert = useAlert();
    const Navigate = useNavigate();
    const { isLoggedIn, error,loading } = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const existingData = JSON.parse(sessionStorage.getItem('UserData') || '{}');



    const [name, setName] = useState(existingData.name || "");
    const [phone, setPhone] = useState(existingData.phoneNumber || null);
    const [selectGender, setGender] = useState(existingData.gender || "male");


    const isButtonDisabled = !name || !phone;
    const handleButtonClick = () => {

        if (isButtonDisabled) {
            alert.error("Fill The Details")
        }
        else {

            existingData.name = name;
            existingData.phoneNumber = phone;
            existingData.gender = selectGender;

            sessionStorage.setItem("UserData", JSON.stringify(existingData));

            Navigate('/signup/second-page')
        }
    };

    useEffect(() => {
        if (error) {

            dispatch(clearUserErrors())
        }

        if (isLoggedIn) {


            Navigate('/profile');

        }
    }, [error, isLoggedIn, dispatch])


    return (
        <>
            {
                loading ? (
                    <Loader />
                ) :
                    (
                        <div className="w-full flex items-center justify-center  min-h-[100vh]  h-full signup">


                            <div className="w-full relative max-w-[600px] border-2  p-2 pb-9 flex gap-8 items-center justify-between min-h-[600px] border-1 border-solid border-gray-300  flex-col Create=account">
                                <Link to='/create/account' className="icon cursor-pointer  absolute w-100 p-5"  >
                                    <ArrowBackIcon className='absolute top-0' />
                                </Link>
                                <div className="w-full  max-w-[450px] flex flex-col gap-2 item-start">
                                    <p className='text-2xl font-bold'>Step 2 out of 5</p>
                                    <p className='text-3xl font-bold '>Enter Your Details</p>
                                </div>

                                <TextField value={name} onChange={(e) => setName(e.target.value)} className='w-full max-w-[450px] text-black' id="filled-basic" label="Name" type='text' variant="outlined" />
                                <TextField value={phone} onChange={(e) => setPhone(e.target.value)} className='w-full max-w-[450px] text-black' id="filled-basic" type='number' label="Phone" variant="outlined" />

                                <TextField
                                    id="outlined-select-currency-native"
                                    select
                                    className='w-full max-w-[450px] text-black'
                                    label="Gender"

                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    SelectProps={{
                                        native: true,
                                    }}
                                >
                                    {gender.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </TextField>

                                <div className="flex flex flex-col gap-2 w-full  max-w-[450px]">

                                    <p className='font-bold'>
                                        Don't Worry
                                    </p>
                                    <span className='text-sm text-gray-600'>
                                        This will not be shown publicly. Confirm your own Phone Number, even if this account is for a business, a pet, or something else.
                                    </span>
                                </div>


                                <button className="w-full max-w-[450px]" onClick={handleButtonClick} >

                                    <Button value="Next" class="bg-black text-white " />

                                </button>

                            </div>
                        </div>
                    )}

        </>
    );
};



const Button = ({ value, icon, class: additionalClass }: { value: string; class: string; icon: JSX.Element }) => {
    return (
        <div className={`w-full max-w-[450px] h-12 pt-5 pb-5 border-2 border-solid border-gray-300 cursor-pointer rounded-full ${additionalClass}`}>
            <button className="h-full flex gap-2 justify-center items-center w-full">
                <span className="text-blue-500">{icon ? icon : ""}</span>
                <span className="font-semibold">{value}</span>
            </button>
        </div>
    );
};






export default CreateYouAccount;
