import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { LOGIN_BACKGROUNG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img className="h-screen object-cover md:h-auto" alt="" src={LOGIN_BACKGROUNG} />
      </div>
      <div className="">
      <GptSearchBar />
      <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
