import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Lists = () => {
  const Navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.user)

  useEffect(() => {

    if (!isLoggedIn) {
      Navigate('/login')
    }
  }, [isLoggedIn, Navigate])

  return (
    <div className="lists w-[50%] border-x ml-[24%] -mr-1"></div>
    
  )
}
export default Lists;