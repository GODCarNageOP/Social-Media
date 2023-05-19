import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './profile.css'
import profilePic from '../../assets/pofilePic.jpeg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import CakeIcon from '@mui/icons-material/Cake';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const profile = {
  name: "Aakash Kumar",
  userName: "Akashkumar58906666",
  profession: "FULL STACK DEVELOPER",
  profilepic: profilePic,
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
      id: "tweet1",
      content: "This is my first tweet!",
      timestamp: "May 1, 2023",
      likes: 10,
      retweets: 5,
      replies: 2,
    },
    {
      id: "tweet2",
      content: "Excited to be here on Twitter!",
      timestamp: "May 3, 2023",
      likes: 20,
      retweets: 8,
      replies: 3,
    },
    {
      id: "tweet3",
      content: "Working on a new project. Stay tuned!",
      timestamp: "May 5, 2023",
      likes: 15,
      retweets: 3,
      replies: 1,
    },
    {
      id: "tweet4",
      content: "Happy weekend, everyone!",
      timestamp: "May 7, 2023",
      likes: 12,
      retweets: 6,
      replies: 4,
    },
    {
      id: "tweet5",
      content: "Enjoying the picnic",
      timestamp: "May 7, 2023",
      likes: 12,
      retweets: 6,
      replies: 4,
    }
  ],
}


const Profile = () => {

  return (

    <div className='Profile w-[50%] pt-1 '>
      <div className="back-div flex gap-8 align-center pl-4 ">
        <ArrowBackIcon />

        <div className="flex flex-col ">
          <span className='font-bold topName '>
            {profile?.name}
          </span>
          <div className='flex gap-2 text-gray-500'>
            <span className='text-1xl font-thin'>
              {profile?.numberOfTweets}

            </span>
            <span className='text-1xl font-thin'>
              Tweets
            </span>

          </div>
        </div>
      </div>

      <div className="cover-div h-[20%]  bg-gray-300">

      </div>

      <div className="profile-sec relative">
        <div className="flex justify-between relative items-center w-full profile-absolute-div pl-4">

          <div className="profil-image w-[24%] left-5 rounded-full border-4 overflow-hidden  ">
            <img
              src={profilePic}
              className="object-cover h-full w-full"
              alt=""
            />
          </div>
          <button className=' h-12 p-2 pl-5 pr-5 mt-8 font-semibold bg-white rounded-3xl  edit-btn-profile   '>
            Edit Profile
          </button>
        </div>


      </div>

      <div className="profile-details pl-5 relative">
        <div className="flex flex-col  pb-5">
          <span className="font-black text-2xl">
            {
              profile?.name
            }
          </span>
          <span className='text-1xl text-gray-500'>
            @{
              profile?.userName
            }</span>
        </div>

        <span className=''>
          {
            profile.profession
          }
        </span>

        <div className="flex address text-gray-500 flex-wrap gap-2 mt-3">
          <div className="flex gap-1">
            <LocationOnIcon />
            <span className='tex-gray-500'>
              {
                profile?.address?.country
              }
            </span>
          </div>

          <div className="flex gap-1 items-center w-30">
            <InsertLinkIcon />
            <span className="text-blue-500 truncate">
              {profile?.address?.website}
            </span>
          </div>

          <div className="flex gap-1 items-center">
            <CakeIcon />
            <span className='tex-gray-500'>
              Born   {
                profile?.address?.dob
              }
            </span>
          </div>
          <div className="flex gap-1 items-center align-center">
            <CalendarTodayIcon />
            <span className='tex-gray-500'>
              Joined {
                profile?.address?.joined
              }
            </span>
          </div>
        </div>
        <div className="flex mt-3 gap-5">
          <div className="flex gap-1">

            <span className='text-1xl font-bold text-black'>
              {
                profile?.numberOfFollowing
              }
            </span>

            <span className='text-gray-600'>
              Following

            </span>
          </div>
          <div className="flex gap-1">
            <span className='text-1xl font-bold text-black'>

              {
                profile?.numberOfFollowers
              }

            </span>
            <span className='text-gray-600'>
              Followers
            </span>
          </div>
        </div>
      </div>

      <ProfileTweet />
    </div>
  )
}




const ProfileTweet = () => {


  return (
    <div className='profile-tweet'>

      <div className="flex ">
        <button className="grid-1 w-full p-3">
          <span className="font-bold">Tweets</span>
        </button>
        <button className="grid-1 w-full p-3">
          <span className="font-bold">Replies</span>
        </button>
        <button className="grid-1 w-full p-3">
          <span className="font-bold">Media</span>
        </button>
        <button className="grid-1 w-full p-3">
          <span className="font-bold">Likes</span>
        </button>
      </div>

    </div>

  );
}


const TweetCard = () => {

  <div>

  </div>

}

export default Profile