import React from "react";
import "./ChannelRow.css";
import { Avatar } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

const ChannelRow = ({
  image,
  subs,
  noOfVideos,
  verified,
  description,
  channel,
}) => {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logic" alt={channel} src={image} />
      <div className="channelRow__text">
        <h4>
          {channel} {verified && <CheckCircleIcon />}
        </h4>
      </div>
    </div>
  );
};

export default ChannelRow;
