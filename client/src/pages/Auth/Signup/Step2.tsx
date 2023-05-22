import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import twitterIcon from '../../../assets//twitter.png'
import GoogleIcon from '@mui/icons-material/Google';
import { TextField } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';






const Step2 = () => {
    const [usePhone, setUsePhone] = useState(false);
    const [name, setName] = useState("Akash Kumar");
    const [email, setEmail] = useState("Aakashdev24@gmail.com");
    const [phone, setPhone] = useState(0);
    const [dob, setDob] = useState("Nov 5 2000");


    const Navigate = useNavigate();

    const navigate = () => {
        Navigate('/create/account')
    }


    const [selectedMonth, setSelectedMonth] = useState("January");
    const [selectedDay, setSelectedDay] = useState(1);
    const [selectedYear, setSelectedYear] = useState(2000);
    console.log(selectedMonth, selectedDay, selectedYear, email, name, phone)
    return (
        <div className="w-full flex items-center justify-center  min-h-[100vh]  h-full signup">


            <div className="w-full relative max-w-[600px] border-2  p-2 pb-9 flex gap-8 items-center justify-between min-h-[600px] border-1 border-solid border-gray-300  flex-col Step-2 ">
                <Link to='/create/account' className="icon cursor-pointer  absolute w-100 p-5"  >
                    <ArrowBackIcon className='absolute top-0' />
                </Link>
               
                <div className="w-full  max-w-[450px] flex flex-col gap-2 item-start">
                    <p className='text-2xl font-bold'>Step 2 out of 5</p>
                    <p className='text-3xl font-bold '>Create Your Account</p>
                </div>

                <TextField value={name} onClick={() => navigate()} className='w-full max-w-[450px] text-black' id="filled-basic" label="Name" variant="outlined" />
                <TextField value={email} onClick={() => navigate()} className='w-full max-w-[450px] text-black' id="filled-basic" label="Email" variant="outlined" />
                <TextField value={dob} onClick={() => navigate()} className='w-full max-w-[450px] text-black' id="filled-basic" label="Date of birth" variant="outlined" />


                <div className="flex flex flex-col gap-2 w-full  max-w-[450px]">

                    <p className='font-bold'>
                        Date of birth
                    </p>
                    <span className='text-sm text-gray-600'>
                        By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use. Twitter may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy, like keeping your account secure and personalizing our services, including ads. Learn more. Others will be able to find you by email or phone number, when provided, unless you choose otherwise here.
                    </span>
                </div>



                <Link to='/step/3' className='w-full max-w-[450px]'>
                    <Button value="Signup" class="bg-blue-500 text-white " />

                </Link>

            </div>
        </div>
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






export default Step2;
