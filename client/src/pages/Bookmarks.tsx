import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Bookmarks = () => {
  const Navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.user)

  useEffect(() => {

    if (!isLoggedIn) {
      Navigate('/login')
    }
  }, [isLoggedIn, Navigate]);
  
    return (
      <div className="BookMarks mobile:w-[100%]  w-[80%]  lg:w-[60%] xl:w-[50%]">Bookmarks</div>
    )
  }
  
  export default Bookmarks