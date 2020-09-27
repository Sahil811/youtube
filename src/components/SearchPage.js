import React from "react";
import "./SearchPage.css";
import TuneIcon from "@material-ui/icons/Tune";
import ChannelRow from "./ChannelRow";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>

      <hr />

      <ChannelRow
        image={
          "https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg"
        }
        channel={"Uxs"}
        verified
        subs={"3000M"}
        noOfVideos={3700}
        description={"Awesome"}
      />
    </div>
  );
};

export default SearchPage;
