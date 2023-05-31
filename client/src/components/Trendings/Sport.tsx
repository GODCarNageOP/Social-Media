import React, { useEffect, useState } from 'react';
import TrendingsCard from './TrendingsCard';
import { useDispatch, useSelector } from 'react-redux';
import { getTrendingByChoices } from '../../redux/action/TrendingAction';
import Loader from '../Loader';
const Sports = () => {

    const dispatch = useDispatch();
    const { trendingItems, loading } = useSelector((state) => state.trending)

    useEffect(() => {

        const choices = ["Sports"]
        dispatch(getTrendingByChoices(choices))

    }, [dispatch])




    return (
        <>
            {
                loading ? (
                    <Loader />
                ) : (
                    <div className="pl-4 pt-2 pr-4  flex flex-col gap-4">
                        {trendingItems.map((item, index) => (
                            <TrendingsCard
                                key={item.id}
                                item={item}

                            // Pass any additional props as needed
                            />
                        ))}
                    </div>
                )}
        </>
    );
};

export default Sports;
