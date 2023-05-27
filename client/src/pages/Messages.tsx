import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { clearUserErrors } from '../redux/action/UserAction';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';

const Messages = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { userCreated, isLoggedIn, error, loading } = useSelector((state) => state.user)
  const Navigate = useNavigate();


  useEffect(() => {

    if (error) {
      alert.error(error)
      dispatch(clearUserErrors())
    }
 

    if (!isLoggedIn) {
      Navigate('/login')
    }

  }, [isLoggedIn, userCreated, error, dispatch, Navigate])



  return (
    <>
      {
        loading ? (
          <Loader />
        ) :
          (

            <div className="Message mobile:w-[100%]  w-[80%]  lg:w-[60%] xl:w-[50%] border-x ml-[24%] -mr-1">Messages</div>
          )
      }
    </>
  )
}

export default Messages