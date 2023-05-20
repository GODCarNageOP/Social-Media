import React, { useState } from 'react';
import TrendingsCard from './TrendingsCard';






const Foryou = () => {
    const [trendingItems] = useState([
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet",
            description: "Consectetur adipiscing elit",
            hashtags: ["LoremIpsum", "Trending"],
            tweets: 12345,
            retweets: 6789,
            likes: 9876,
        },
        {
            id: 2,
            title: "Vestibulum sagittis",
            description: "Praesent dapibus",
            hashtags: ["Vestibulum", "Trending"],
            tweets: 54321,
            retweets: 9876,
            likes: 5432,
        },
        // Add more trending items
    ]);

    return (
        <div className='flex flex-col gap-4'>
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
    );
};

export default Foryou;
