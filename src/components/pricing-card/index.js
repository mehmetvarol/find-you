import React, { Component } from "react";
import { Card, Image, Money, DataInfo, Try } from "./styled";
import MasterButton from "../button";

export default class PricingCard extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Card>
              <Image src="/images/moto-personel.png" />
              <Money>
                <span className="dolar">$</span>
                <span className="money">18.35</span>
                <span className="month">/month</span>
              </Money>
              <hr />
              <DataInfo>30gb data storage</DataInfo>
              <DataInfo>More than 500+ friend include</DataInfo>
              <DataInfo>group chat avaiable</DataInfo>
              <DataInfo>categories based friend list</DataInfo>
              <MasterButton title="Sign Up!" color="#80e0dd" border={false} />
              <Try color="#80e0dd">Try 30 Days Free</Try>
            </Card>
          </div>
          <div className="col-md-6">
            <Card>
              <Image src="/images/moto-business.png" />
              <Money>
                <span className="dolar">$</span>
                <span className="money">72.90</span>
                <span className="month">/month</span>
              </Money>
              <hr />
              <DataInfo>80gb data storage</DataInfo>
              <DataInfo>More than 500+ friend include</DataInfo>
              <DataInfo>group chat avaiable</DataInfo>
              <DataInfo>categories based friend list</DataInfo>
              <MasterButton title="Sign Up!" color="#ef7f65" border={false} />
              <Try color="#ef7f65">Try 30 Days Free</Try>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
