import React, { Component } from "react";
import { HeaderWrap, Logo, NavMenu } from "./styled";
import MasterButton from '../button'

export default class Header extends Component {
  render() {
    return (
      <div className="container">
        <HeaderWrap>
          <Logo href="/"> <img src="/"/> </Logo>

          <NavMenu>
              <a href="/">Feature</a>
              <a href="/">How it Work</a>
              <a href="/">Pricing</a>
              <MasterButton title="Get Start" color="#ef7f65" ></MasterButton>
          </NavMenu>
        </HeaderWrap>
      </div>
    );
  }
}
