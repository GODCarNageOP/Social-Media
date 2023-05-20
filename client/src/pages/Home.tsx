const Home = () => {
  return (
    <div className="home w-[50%]">
      <h1 className="text-2xl font-semibold my-1 p-4 cursor-pointer">Home</h1>
      <div className="homeNavbar flex justify-between h-16">
        <span className="flex-1 flex justify-center items-center hover:bg-gray-200 font-medium">
          For you
        </span>
        <span className="flex-1 flex justify-center items-center hover:bg-gray-200 font-medium">
          Following
        </span>
      </div>
    </div>
  );
};

export default Home;
