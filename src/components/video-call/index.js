import React, { Component } from "react";
import {
  Area,
  Video,
  Call,
  CallSub,
  Download,
  ImageOne,
  ImageTwo,
  Iphone
} from "./styled";

export default class VideoCall extends Component {
  render() {
    return (
      <Area className="position-relative">
        <div className="container">
          <Video>
            <Call>You can easily record video call</Call>
            <CallSub>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth.
            </CallSub>
            <Download>Download App Now?</Download>
            <ImageOne></ImageOne>
            <ImageTwo></ImageTwo>
          </Video>
          <Iphone src="/images/iphone.png"></Iphone>
        </div>
      </Area>
    );
  }
}
