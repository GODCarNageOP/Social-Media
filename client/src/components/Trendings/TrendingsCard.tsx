import React, { useEffect, useRef, useState } from 'react'
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

interface Trendings {
    id: number,
    title: string,
    numOfTweets: number,
    

    // Rest of the profile object properties
}

interface TrendingsFun {
    item: Trendings;
}


const TrendingsCard: React.FC<TrendingsFun> = ({ item }) => {
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const moreRef = useRef<HTMLDivElement>(null);

    const handleMore = () => {
        setIsMoreOpen(!isMoreOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
                setIsMoreOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div className=' flex flex-col TrendindsCard'>
            <div className="flex relative justify-between">
                <span className='font-thin text-gray-500   cursor-pointer'>
                    Trending
                </span>
                <span className='text-gray-500 hover:text-blue-500 cursor-pointer' onClick={(e) => handleMore()}>
                    <MoreHorizOutlinedIcon />
                </span>

                {/* <div className="relative w-full"> */}
                    {isMoreOpen && (


                        <div ref={moreRef} className="absolute right-0" onClick={(e) => handleMore()}>

                            <More />
                        </div>
                    )

                    }
                {/* </div> */}
            </div>
            <span className='font-bold text-1xl'>
                #{
                    item?.title
                }
            </span>
            <span className='font-thins text-gray-500'>
                {item?.numOfTweets} Tweets
            </span>
        </div>
    )
}


const More = () => {


    return (
        <div className="overlay h-21 w-76 p-2 bg-white  shadow-lg border rounded-xl z-10 flex flex-col top-[465px] ml-[60px]">
            <div className="overlayContainer gap-5">
                <div className="top hover:bg-gray-100 font-medium text-base h-10 p-3 cursor-pointer flex gap-2">
                    <SentimentVeryDissatisfiedIcon />
                    <h1>Not interested in this</h1>
                </div>
                <div className="bottom hover:bg-gray-100 font-medium text-base h-10 p-3 cursor-pointer flex gap-2">
                    <SentimentVeryDissatisfiedIcon />
                    <h1>This trend is harmful or spammy</h1>
                </div>
            </div>
        </div>
    )
}

export default TrendingsCard
