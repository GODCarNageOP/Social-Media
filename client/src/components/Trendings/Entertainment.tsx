import React, { useEffect, useState } from 'react';
import TrendingsCard from './TrendingsCard';
import { useDispatch, useSelector } from 'react-redux';
import { getTrendingByChoices } from '../../redux/action/TrendingAction';
import Loader from '../Loader';

const Entertainment = () => {



    const dispatch = useDispatch();
    const { trendingItems, loading } = useSelector((state) => state.trending)

    useEffect(() => {

        const choices = ["news"]
        dispatch(getTrendingByChoices(choices))

    }, [dispatch])

    
    return (
        <div className="py-4 pt-2   flex flex-col gap-4">
            {trendingItems.map((item, index) => (
                <TrendingsCard
                    key={item.id}
                    item={item}

                // Pass any additional props as needed
                />
            ))}
        </div>
    );
};

export default Entertainment;
