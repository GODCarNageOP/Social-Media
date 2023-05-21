import React from 'react'
import twitter from '../../assets/twitter.png'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className=' w-full h-full '>

            <form className="login-form">
                <Link to="/">
                    <div className="logo h-[5%] flex gap-2 pl-4 pt-2 pb-5">
                        <img
                            src={twitter}
                            alt=""
                            className="h-9 w-10 hover:bg-gray-200 hover:rounded-full"
                        />
                        {/*<span>Twitter</span>*/}
                    </div>
                </Link>
            </form>

        </div>
    )
}


const GoogleButton = () => {


    return (
        <div className="googlebutton">

        </div>
    )
}

export default Login
