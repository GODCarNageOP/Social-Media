import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import twitterIcon from '../../assets/twitter.png'
import GoogleIcon from '@mui/icons-material/Google';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { TextField } from '@mui/material';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { checkUser, clearUserErrors } from '../../redux/action/UserAction';
import Loader from '../../components/Loader';

const Login = () => {
    const Navigate = useNavigate();
    const alert = useAlert();
    const { isLoggedIn, error,isUser, loading,user } = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");

    const navigate = () => {

        // dispatch(checkUser(email))
        if (!email) {
            alert.error('Please enter email');
        } else if (email) {
            
            Navigate(`/auth?email=${email}`);
        } 
        
    };
    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearUserErrors())
        }

        if (isLoggedIn) {


            Navigate(`/profile/${user.userName}`);

        }
    }, [error, isLoggedIn, dispatch,isUser,alert,Navigate])

    return (
        <>
            {
                loading ? (
                    <Loader />
                ) : (


                    <div className="w-[50%] flex items-center justify-center  min-h-[100vh]  h-full login border-x ml-[24%] -mr-1">


                        <div className="w-full  max-w-[600px] border-2  p-2 pb-9 flex gap-8 items-center justify-between min-h-[600px] border-1 border-solid border-gray-300  flex-col Login">
                            <img src={twitterIcon} className='h-[50px]' alt="" />
                            <p className='text-3xl font-bold text-center'>Sign in to Twitter</p>
                            <Button value="Sign in with Google" class="" icon={<GoogleIcon />} />
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-[200px] h-[2px] bg-gray-300 "></div>
                                or
                                <div className="w-[200px] h-[2px] bg-gray-300 "></div>

                            </div>
                            {/* <div className="flex"> */}

                            <TextField placeholder='Phone,Email or Username' type='email' required className='w-full max-w-[450px]' id="outlined-basic" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" variant="outlined" />
                            {/* </div> */}
                            {/* <Input /> */}
                            <button className="w-full max-w-[456px]" onClick={() => navigate()}>

                                <Button value="Next" class="bg-black text-white" />
                            </button>
                            <Button value="Forgot Password?" class=" text-black " />

                            <p className=''>
                                <span className='text-gray-500'>
                                    Don't have an account?
                                </span>

                                <Link to='/signup' className='text-blue-500 cursor-pointer hover:underline-dark-500 ml-2'>
                                    Signup

                                </Link>
                            </p>

                        </div>
                    </div>
                )
            }
        </>

    );
};



export const Button = ({ value, icon, class: additionalClass }: { value: string; class: string; icon: JSX.Element }) => {
    return (
        <div className={`w-full max-w-[450px] h-12 pt-5 pb-5 border-2 border-solid border-gray-300 cursor-pointer rounded-full ${additionalClass}`}>
            <button className="h-full flex gap-2 justify-center items-center w-full">
                <span className="text-blue-500">{icon ? icon : ""}</span>
                <span className="font-semibold">{value}</span>
            </button>
        </div>
    );
};

// const Input = () => {

//     return (
//         <div className="Input w-full max-w-[450px] h-12 border-2  border-solid flex border-gray-300 cursor-pointer rounded-sm">

//             <input type="text" className='w-full h-full pl-5 pt-5 pb-5' placeholder='Phone,Email or Username' />
//         </div>
//     )
// }


export default Login;
