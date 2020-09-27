import React from "react";
import "./SearchPage.css";
import TuneIcon from "@material-ui/icons/Tune";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

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

      <hr />

      <VideoRow
        channel="Uxs"
        views="1.4M"
        subs="1000M"
        description="Super awesome"
        timestamp="49 seconds ago"
        title="Everything"
        image="https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg"
      />

      <VideoRow
        channel="Uxs"
        views="1.4M"
        subs="1000M"
        description="Super awesome"
        timestamp="49 seconds ago"
        title="Everything"
        image="https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg"
      />

      <VideoRow
        channel="Uxs"
        views="1.4M"
        subs="1000M"
        description="Super awesome"
        timestamp="49 seconds ago"
        title="Everything"
        image="https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg"
      />

      <VideoRow
        channel="Uxs"
        views="1.4M"
        subs="1000M"
        description="Super awesome"
        timestamp="49 seconds ago"
        title="Everything"
        image="https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg"
      />

      <VideoRow
        channel="Uxs"
        views="1.4M"
        subs="1000M"
        description="Super awesome"
        timestamp="49 seconds ago"
        title="Everything"
        image="https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg"
      />

      <VideoRow
        channel="Uxs"
        views="1.4M"
        subs="1000M"
        description="Super awesome"
        timestamp="49 seconds ago"
        title="Everything"
        image="https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg"
      />

      <VideoRow
        channel="Uxs"
        views="1.4M"
        subs="1000M"
        description="Super awesome"
        timestamp="49 seconds ago"
        title="Everything"
        image="https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg"
      />

      <VideoRow
        channel="Uxs"
        views="1.4M"
        subs="1000M"
        description="Super awesome"
        timestamp="49 seconds ago"
        title="Everything"
        image="https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg"
      />

      <VideoRow
        channel="Uxs"
        views="1.4M"
        subs="1000M"
        description="Super awesome"
        timestamp="49 seconds ago"
        title="Everything"
        image="https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg"
      />

      <VideoRow
        channel="Uxs"
        views="1.4M"
        subs="1000M"
        description="Super awesome"
        timestamp="49 seconds ago"
        title="Everything"
        image="https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg"
      />
    </div>
  );
};

export default SearchPage;
