import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import {LOGIN_BACKGROUNG} from "../utils/constants";

const GptSearch = () => {
  return <div>
    <div className="absolute -z-10">
        <img alt="" src={LOGIN_BACKGROUNG} />
      </div>
    <GptSearchBar/>
    <GptMovieSuggestions/>
  </div>;
};

export default GptSearch;
