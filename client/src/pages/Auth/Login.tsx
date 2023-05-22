import React from 'react';
import { Link } from 'react-router-dom';
import twitterIcon from '../../assets/twitter.png'
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
    return (
        <div className="w-full flex items-center justify-center  min-h-[100vh]  h-full login">


            <div className="w-full max-w-[600px] flex gap-8 items-center max-h-[500px] border-1 border-solid border-gray-500  flex-col ">
                <img src={twitterIcon} className='h-[50px]' alt="" />
                <p className='text-3xl font-bold text-center'>Sign in to Twitter</p>
                <Button value="Sign in with Google" class="" icon={<GoogleIcon />} />
                <div className="flex items-center justify-center gap-2">
                    <div className="w-[200px] h-[2px] bg-gray-300 "></div>
                    or
                    <div className="w-[200px] h-[2px] bg-gray-300 "></div>

                </div>
                <Input />
                <Button value="Next" class="bg-black text-white" />
                <Button value="Forgot Password?" class=" text-black " />

                <p>
                    <span className='text-gray-500'>
                        Don't have an account?
                    </span>

                    <Link to='/signup' className='text-blue-500 cursor-pointer hover:underline-dark-500'>
                        Signup

                    </Link>
                </p>

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

const Input = () => {

    return (
        <div className="Input w-full max-w-[450px] h-12 border-2  border-solid flex border-gray-300 cursor-pointer rounded-sm">

            <input type="text" className='w-full h-full pl-5 pt-5 pb-5' placeholder='Phone,Email or Username' />
        </div>
    )
}


export default Login;
