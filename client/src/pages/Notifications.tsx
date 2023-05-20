import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Link } from 'react-router-dom';

const Notifications = () => {
  return (
    <div className="notifications w-[50%]">
      <div className="notificationContainer flex mx-10 justify-between items-center mt-5">
        <h1 className='text-2xl font-semibold cursor-pointer'>Notifications</h1>
        <Link to="/settings">
        <SettingsOutlinedIcon className="hover:bg-gray-200 cursor-pointer hover:rounded-full" />
        </Link>
      </div>
      <div className="notificationNavbar flex justify-between h-14 mt-3">
        <span className="flex-1 flex justify-center items-center hover:bg-gray-200 font-medium">
          All
        </span>
        <span className="flex-1 flex justify-center items-center hover:bg-gray-200 font-medium">
          Verified
        </span>
        <span className="flex-1 flex justify-center items-center hover:bg-gray-200 font-medium">
          Mentions
        </span>
      </div>
    </div>
  )
}

export default Notifications