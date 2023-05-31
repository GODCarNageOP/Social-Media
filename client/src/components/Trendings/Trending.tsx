import React, { useState } from 'react';
import TrendingsCard from './TrendingsCard';
import { useSelector } from 'react-redux';
import Loader from '../Loader';

const Trending = () => {

 
    const { trendingItems, loading } = useSelector((state) => state.trending)


    return (
        <>
            {
                loading ? (
                    <Loader />
                ) : (

                    <div className="pl-4 pt-2 pr-4 flex flex-col gap-4 pt-1">

                        <p className='font-bold text-2xl'>India Trends</p>
                        <div className="flex flex-col gap-4">

                            {trendingItems.map((item, index) => (
                                <TrendingsCard
                                    key={item.id}
                                    item={item}

                                // Pass any additional props as needed
                                />
                            ))}
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Trending;
