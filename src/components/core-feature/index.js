import React, { Component } from "react";
import { CoreArea, Card, CardItem } from "./styled";

export default class CoreFeature extends Component {
  render() {
    return (
      <CoreArea>
        <div className="container d-flex justify-content-around mobile">
          <div className="col-md-4">
            <Card>
              <CardItem BgColor="#ef7f65"></CardItem>
              <span>Message System</span>
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born a complete
                account.
              </p>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <CardItem BgColor="#b1ea8c"></CardItem>
              <span>Voice Call</span>
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born a complete
                account.
              </p>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <CardItem BgColor="#ffe35a"></CardItem>
              <span>File Share</span>
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born a complete
                account.
              </p>
            </Card>
          </div>
        </div>
      </CoreArea>
    );
  }
}
