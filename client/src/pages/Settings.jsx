import React, {useEffect, useSelector} from "react"
import {useNavigate} from 'react-dom';


const Settings = () => {
  const Navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.user)

  useEffect(() => {
    if (!isLoggedIn) {
      Navigate('/login')
    }
  
  }, [Navigate,isLoggedIn])
  return (
    <div className="Settings mobile:w-[100%]  w-[80%]  lg:w-[60%] xl:w-[50%]">Settings</div>
  )
}

export default Settings;