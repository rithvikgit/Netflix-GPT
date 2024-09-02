import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6  text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black py-1 md:py-3 px-6 md:px-10 text-xl font-bold mr-2 mt-2 md:mt-0 rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="hidden md:inline-block bg-gray-600 text-white py-3 px-10 text-xl font-bold rounded-lg hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
