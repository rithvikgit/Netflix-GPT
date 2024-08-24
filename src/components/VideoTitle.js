import React from "react";

const VideoTitle = ({title,overview}) => {
  return(
    <div className="w-screen aspect-video pt-[20%] px-20 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6  text-lg w-1/4">{overview}</p>
        <div className="">
            <button className="bg-white text-black p-3 px-10 text-xl font-bold mr-2 rounded-lg hover:bg-opacity-80">Play</button>
            <button className="bg-gray-600 text-white p-3 px-10 text-xl font-bold rounded-lg hover:bg-opacity-80">More Info</button>
        </div>

    </div>
  )
};

export default VideoTitle;
