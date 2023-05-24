import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { clearUserErrors } from '../redux/action/UserAction';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';

const Messages = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { userCreated, isLoggedIn, error, loading } = useSelector((state) => state.user)


  useEffect(() => {

    if (error) {
      alert.error(error)
      dispatch(clearUserErrors())
    }
    if (isLoggedIn) {
      Navigate('/profile')

    }
  }, [isLoggedIn, userCreated, error, dispatch])



  return (
    <>
      {
        loading ? (
          <Loader />
        ) :
          (

            <div className="Message mobile:w-[100%]  w-[80%]  lg:w-[60%] xl:w-[50%]">Messages</div>
          )
      }
    </>
  )
}

export default Messages