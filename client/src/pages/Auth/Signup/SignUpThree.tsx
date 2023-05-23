import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import twitterIcon from '../../../assets//twitter.png'
import GoogleIcon from '@mui/icons-material/Google';
import { TextField } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { clearUserErrors, sendCode, verify } from '../../../redux/action/UserAction';
import Loader from '../../../components/Loader';
import { USER_SUCCESS_RESET } from '../../../redux/constants/UserConstants';
import { useParams } from 'react-router-dom';






const SignUpThree = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const Navigate = useNavigate();
    const { email } = params;
    const alert = useAlert();

    const { isLoggedIn, loading, error } = useSelector((state) => state.user);

    const [code, setCode] = useState();
    const existingData = JSON.parse(sessionStorage.getItem('UserData') || '{}');
   





    const emailSecond = existingData.email;
    const phone = existingData.phone;




    const verifyOtp = () => {
        if (code) {

            const userData = {
                otp:code,
                email:emailSecond
            }

            dispatch(verify(userData));
        } else {
            alert.error("Enter Otp")
        }
    }

    const resendCode = () => {
        dispatch(sendCode(email))
    }

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearUserErrors())
        }

        if (isLoggedIn) {
            alert.success("email Verified");

            Navigate('/profile');

        }
    }, [error, isLoggedIn])


    return (
        <>
            {
                loading ? <Loader /> : (

                    <div className="w-full flex items-center justify-center  min-h-[100vh]  h-full signup">


                        <div className="w-full relative max-w-[600px] border-2  p-2 pb-9 flex gap-8 items-center justify-between min-h-[600px] border-1 border-solid border-gray-300  flex-col step-3">
                            <Link to='/signup/second-page' className="icon cursor-pointer  absolute w-100 p-5"  >
                                <ArrowBackIcon className='absolute' />
                            </Link>
                            <div className="flex flex-col w-full pt-5 gap-10 items-center">


                                <div className="w-full  max-w-[450px] flex flex-col gap-2 item-start">
                                    <p className='text-2xl font-bold'>Step 3 out of 5</p>
                                    <p className='text-3xl font-bold '>We sent you a code</p>
                                    <p className='text-sm font-b text-gray-500'>Enter it below to verify {email}</p>

                                </div>
                                <div className="flex flex-col w-full  max-w-[450px] items-start">
                                    <TextField value={code} onChange={(e) => setCode(e.target.value)} className='w-full max-w-[450px] text-black' type='number' id="filled-basic" label="Code" variant="outlined" />
                                    <div className="flex justify-between w-full max-w-[450px]">
                                        <span className='text-blue-500 pt-3 hover:underline cursor-pointer' onClick={() => setUsePhone(!usePhone)}>Didn't recieve email?</span>
                                        <span className='text-blue-500 pt-3 hover:underline cursor-pointer' onClick={() => resendCode()}>resend code.</span>

                                    </div>
                                </div>

                            </div>




                            <button onClick={() => verifyOtp()} className='w-full max-w-[450px]'>
                                <Button value="Signup" class="bg-blue-500 text-white " />

                            </button>

                        </div>
                    </div>

                )
            }
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






export default SignUpThree;
