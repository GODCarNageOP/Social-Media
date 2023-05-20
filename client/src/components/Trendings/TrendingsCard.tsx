import React, { useState } from 'react'
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

interface Trendings {
    id: number,
    title: string,
    description: string,
    hashtags: string[],
    tweets: number,
    retweets: number,
    likes: number,

    // Rest of the profile object properties
}

interface TrendingsFun {
    item: Trendings;
}


const TrendingsCard: React.FC<TrendingsFun> = ({item}) => {

    return (
        <div className='pl-4 pt-2 pr-4 flex flex-col'>
            <div className="flex justify-between">
                <span className='font-thin text-gray-500   cursor-pointer'>
                    {item?.hashtags[1]}
                </span>
                <span className='text-gray-500 hover:text-blue-500 cursor-pointer'>
                    <MoreHorizOutlinedIcon />
                </span>
            </div>
            <span className='font-bold text-1xl'>
                {
                    item?.hashtags[0]
                }
            </span>
            <span className='font-thin text-gray-500'>
                {item?.tweets} Tweets
            </span>
        </div>
    )
}

export default TrendingsCard
