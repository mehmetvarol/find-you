import React, { Component } from "react";
import { BannerText, BannerSub, BannerImage, BannerBody } from "./styled";
import MasterButton from "../button";
export default class Banner extends Component {
  render() {
    return (
      <React.Fragment>
        <BannerImage>
          <div className="container">
            <div className="d-flex flex-column align-items-center justify-content-center ">
              <BannerText>Be together, whenever.</BannerText>
              <BannerSub>
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a
                complete account.
              </BannerSub>
              <MasterButton
                title="Try 30 Days Free"
                textColor="#000"
                border={true}
              ></MasterButton>
            </div>
          </div>
        </BannerImage>
        <div className="container">
          <BannerBody></BannerBody>
        </div>
      </React.Fragment>
    );
  }
}
