import React, { useState } from 'react';
import TrendingsCard from './TrendingsCard';

const Entertainment = () => {
    const [trendingItems] = useState([
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet",
            description: "Consectetur adipiscing elit",
            hashtags: ["#LoremIpsum", "#Entertainment"],
            tweets: 12345,
            retweets: 6789,
            likes: 9876,
        },
        {
            id: 2,
            title: "Vestibulum sagittis",
            description: "Praesent dapibus",
            hashtags: ["#Vestibulum", "#Entertainment"],
            tweets: 54321,
            retweets: 9876,
            likes: 5432,
        },
        // Add more trending items
        {
            id: 3,
            title: "Aliquam ac turpis",
            description: "Sed at tellus",
            hashtags: ["#Aliquam", "#Entertainment"],
            tweets: 8765,
            retweets: 2345,
            likes: 5678,
        },
        // Add more trending items
        // ... Repeat the structure for the remaining 22 items
    ]);

    return (
        <div className="pl-4 pt-2 pr-4  flex flex-col gap-4">
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
