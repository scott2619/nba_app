import React, { Component } from "react";
import style from "./videolist.css";
import { URL } from "../../../config";
import Button from "../Buttons/buttons";
import axios from "axios";

class VideoList extends Component {
  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  };

  renderTitle = () => {
    return this.props.title ? (
      <h3>
        <strong>NBA</strong> Videos
      </h3>
    ) : null;
  };

  render() {
    return <div>{this.renderTitle()}</div>;
  }
}

export default VideoList;
