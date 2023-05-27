import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import twitterIcon from '../../../assets//twitter.png'
import GoogleIcon from '@mui/icons-material/Google';
import { clearUserErrors } from '../../../redux/action/UserAction';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import Loader from '../../../components/Loader';

const Signup = () => {
  const Navigate = useNavigate();
  const alert = useAlert();
  const { isLoggedIn, error,loading,user } = useSelector((state) => state.user)
  const dispatch = useDispatch();




  useEffect(() => {
    if (error) {

      dispatch(clearUserErrors())
    }

    if (isLoggedIn) {

      Navigate(`/profile/${user.userName}`);


    }
  }, [error, isLoggedIn, dispatch])


  return (
    <>
      {
        loading ? (
          <Loader />
        ) : (
          <div className="w-[50%] flex items-center justify-center  min-h-[100vh]  h-full signup border-x ml-[24%] -mr-1">
            


            <div className="w-full max-w-[600px] border-2  p-2 pb-9 flex gap-8 items-center justify-between min-h-[600px] border-1 border-solid border-gray-300  flex-col Signup ">
              <img src={twitterIcon} className='h-[50px]' alt="" />
              <p className='text-3xl font-bold text-center'>Join Twitter Today</p>
              <Button value="Sign up with Google" class="" icon={<GoogleIcon />} />
              <div className="flex items-center justify-center gap-2">
                <div className="w-[200px] h-[2px] bg-gray-300 "></div>
                or
                <div className="w-[200px] h-[2px] bg-gray-300 "></div>

              </div>

              <div className="flex flex-col gap-2">
                <Link to='/create/account'>
                  <Button value="Create an account" class="bg-black text-white" />
                </Link>

                <p className='w-[450px] text-gray-500 text-sm '>
                  By signing up, you agree to the
                  <span className='text-blue-500 pl-1 pr-1 hover:underline cursor-pointer'>

                    Terms of Service

                  </span>
                  <span className='text-blue-500 pl-1 pr-1 hover:underline'>

                    and Privacy Policy,
                  </span>
                  including
                  <span className='text-blue-500 pl-1 pr-1 hover:underline'>

                    Cookie Use.
                  </span>
                </p>
              </div>
              {/* <Button value="Forgot Password?" class=" text-black " /> */}

              <p>
                <span className='text-gray-500'>
                  Already have an account?
                </span>

                <Link to='/login' className='text-blue-500 cursor-pointer hover:underline-dark-500 ml-2'>
                  Login

                </Link>
              </p>

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






export default Signup;
