import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearTweetsError, fetchPersonalTweets } from '../../redux/action/TweetAction';
import { useAlert } from 'react-alert';
import Loader from "../Loader";
import TweetCard from './TweetsCard';

const ProfileTweet = ({ tweets }) => {
    const alert = useAlert();
    const { personalTweets, loading, error } = useSelector((state) => state.tweets);
    const dispatch = useDispatch();
    const location = useLocation();
    const pathname = location.pathname;
    const urlAfterSlash = pathname.substring(1);


    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearTweetsError());
        }

        // Fetch personal tweets when the component mounts
        // dispatch(fetchPersonalTweets());

    }, [dispatch, alert]);

    return (
        <>
            {
                loading ? (
                    <Loader />
                ) : (


                    <div className="profile-tweet mt-2 w-full">
                        <div className="flex flex-col gap-4 w-full">
                            {tweets?.map((item) => (
                                <TweetCard key={item.id} tweet={item} />
                            ))}
                        </div>
                    </div>
                )

            }
        </>
    );
};

export default ProfileTweet;
