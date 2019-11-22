import React, { Component } from "react";
import {FooterWrapper, Image, FooterMenu, Social } from "./styled";

export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Image src="/images/logo.png"></Image>
            </div>
            <div className="col-md-3">
              <FooterMenu>
                <li>Quick Link</li>
                <li>
                  <a href="/">Lorem</a>
                </li>
                <li>
                  <a href="/">Lorem</a>
                </li>
                <li>
                  <a href="/">Lorem</a>
                </li>
                <li>
                  <a href="/">Lorem</a>
                </li>
              </FooterMenu>
            </div>
            <div className="col-md-3">
              <FooterMenu>
                <li>How it Work?</li>
                <li>
                  <a href="/">Lorem</a>
                </li>
                <li>
                  <a href="/">Lorem</a>
                </li>
                <li>
                  <a href="/">Lorem</a>
                </li>
                <li>
                  <a href="/">Lorem</a>
                </li>
              </FooterMenu>
            </div>
            <div className="col-md-3">
              <Social>
                <li><a href="/"><img src="/images/face.png" alt=""/></a></li>
                <li><a href="/"><img src="/images/twitter.png" alt=""/></a></li>
                <li><a href="/"><img src="/images/insta.png" alt=""/></a></li>
                <li><a href="/"><img src="/images/linkedin.png" alt=""/></a></li>
              </Social>
            </div>
          </div>
        </div>
      </FooterWrapper>
    );
  }
}
