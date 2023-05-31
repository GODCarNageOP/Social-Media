import React, { useEffect, useState } from 'react';
import TrendingsCard from './TrendingsCard';
import { useDispatch, useSelector } from 'react-redux';
import { getTrending, getTrendingByChoices } from '../../redux/action/TrendingAction';
import Loader from '../Loader';
const Foryou = () => {
    const dispatch = useDispatch();
    const { trendingItems, loading } = useSelector((state) => state.trending)

    useEffect(() => {

        dispatch(getTrending())

    }, [dispatch])


    return (

        <>
            {
                loading ? (
                    <Loader />
                ) : (
                    <div className='pl-4 pt-2 pr-4  flex flex-col gap-4'>
                        {trendingItems.map((item) => (
                            <TrendingsCard
                                key={item.id}
                                item={item}
                            // description={item.description}
                            // hashtags={item.hashtags}
                            // tweets={item.tweets}
                            // retweets={item.retweets}
                            // likes={item.likes}
                            />
                        ))}
                    </div>
                )}
        </>
    );
};

export default Foryou;
