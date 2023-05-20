import { useState } from "react";
import { useLocation } from "react-router-dom";

import profilePic from "../../assets/pofilePic.jpeg";
import TweetCard from './TweetsCard';


interface Profile {
    name: string;
    userName: string;
    profession: string;
    profilepic: string;
    joined: string,

    address: {
        country: string;
        website: string;
        dob: string;
        joined: string;
    };
    followers: {
        id: string;
        profilePic: string;
        name: string;
        userName: string;
    }[];
    following: {
        id: string;
        profilePic: string;
        name: string;
        userName: string;
    }[];
    likes: {
        id: string;
        profilePic: string;
        name: string;
        userName: string;
        postId: string;
        content: string;
    }[];
    replies: {
        id: string;
        profilePic: string;
        name: string;
        userName: string;
        commentId: string;
        content: string;
    }[];
    numberOfFollowers: number;
    numberOfFollowing: number;
    numberOfLikes: number;
    numberOfTweets: number;
    tweets: {
        name: string;
        userName: string;
        profession: string;
        profilepic: string;
        joined: string,
        id: string;
        content: string;
        timestamp: string;
        likes: number;
        retweets: number;
        replies: number;
    }[];
}

const profile: Profile = {
    name: "Aakash Kumar",
    userName: "Akashkumar58906666",
    profession: "FULL STACK DEVELOPER",
    profilepic: profilePic,
    joined: "August 5, 2001",

    address: {
        country: "India, Bihar",
        website: "github.com/Akash-Kashyap24.git.com",
        dob: "December 5, 2001",
        joined: "August 5, 2001",
    },
    followers: [
        {
            id: "follower1",
            profilePic: "follower1.jpg",
            name: "John Doe",
            userName: "johndoe123",
        },
        {
            id: "follower2",
            profilePic: "follower2.jpg",
            name: "Jane Smith",
            userName: "janesmith456",
        },
    ],
    following: [
        {
            id: "following1",
            profilePic: "following1.jpg",
            name: "Emma Johnson",
            userName: "emmajohnson789",
        },
        {
            id: "following2",
            profilePic: "following2.jpg",
            name: "Michael Brown",
            userName: "michaelbrown321",
        },
    ],
    likes: [
        {
            id: "like1",
            profilePic: "like1.jpg",
            name: "Sarah Johnson",
            userName: "sarahjohnson567",
            postId: "123",
            content: "Great post!",
        },
        {
            id: "like2",
            profilePic: "like2.jpg",
            name: "David Smith",
            userName: "davidsmith890",
            postId: "456",
            content: "I totally agree!",
        },
    ],
    replies: [
        {
            id: "reply1",
            profilePic: "reply1.jpg",
            name: "Robert Johnson",
            userName: "robertjohnson111",
            commentId: "789",
            content: "Nice work!",
        },
        {
            id: "reply2",
            profilePic: "reply2.jpg",
            name: "Emily Davis",
            userName: "emilydavis222",
            commentId: "101112",
            content: "Keep it up!",
        },
    ],
    numberOfFollowers: 2,
    numberOfFollowing: 2,
    numberOfLikes: 2,
    numberOfTweets: 19,
    tweets: [
        {
            name: "Aakash Kumar",
            userName: "Akashkumar58906666",
            profession: "FULL STACK DEVELOPER",
            profilepic: profilePic,
            joined: "August 5, 2001",
            id: "tweet1",
            content: "This is my first tweet!",
            timestamp: "May 1, 2023",
            likes: 10,
            retweets: 5,
            replies: 2,
        },
        {
            name: "Aakash Kumar",
            userName: "Akashkumar58906666",
            profession: "FULL STACK DEVELOPER",
            profilepic: profilePic,
            joined: "August 5, 2001",
            id: "tweet2",
            content: "Excited to be here on Twitter!",
            timestamp: "May 3, 2023",
            likes: 20,
            retweets: 8,
            replies: 3,
        },
        {
            name: "Aakash Kumar",
            userName: "Akashkumar58906666",
            profession: "FULL STACK DEVELOPER",
            profilepic: profilePic,
            joined: "August 5, 2001",
            id: "tweet3",
            content: "Working on a new project. Stay tuned!",
            timestamp: "May 5, 2023",
            likes: 15,
            retweets: 3,
            replies: 1,
        },
        {
            name: "Aakash Kumar",
            userName: "Akashkumar58906666",
            profession: "FULL STACK DEVELOPER",
            profilepic: profilePic,
            joined: "August 5, 2001",
            id: "tweet4",
            content: "Happy weekend, everyone!",
            timestamp: "May 7, 2023",
            likes: 12,
            retweets: 6,
            replies: 4,
        },
        {
            name: "Aakash Kumar",
            userName: "Akashkumar58906666",
            profession: "FULL STACK DEVELOPER",
            profilepic: profilePic,
            joined: "August 5, 2001",
            id: "tweet5",
            content: "Enjoying the picnic",
            timestamp: "May 7, 2023",
            likes: 12,
            retweets: 6,
            replies: 4,
        },
    ],
};

const ProfileTweet = () => {
    const [openTab, setOpenTab] = useState("Tweets");
    const location = useLocation();
    const pathname = location.pathname;
    const urlAfterSlash = pathname.substring(1);

    return (
        <div className="profile-tweet mt-2 w-full">
            <div className="flex flex-col gap-4 w-full">

                {profile?.tweets?.map((item) => (
                    <TweetCard key={item.id} tweet={item} />
                ))}
            </div>
        </div>
    );
};

export default ProfileTweet;
