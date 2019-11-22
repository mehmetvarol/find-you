import React, { Component } from "react";
import { Subs, SubsSub, Row, Button } from "./styled";
import MasterButton from "../button";
export default class Subscribe extends Component {
  render() {
    return (
      <div className="container">
        <Row>
          <div className="row">
            <div className="col-md-9">
              <Subs>Subscribe Newsletter for Keep Updated</Subs>
              <SubsSub>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I complete
                account of the system, and expound the actual teachings.
              </SubsSub>
            </div>
            <div className="col-md-3">
              <Button>
                <MasterButton
                  title="Subscribe"
                  color="#80e0dd"
                  border={false}
                />
              </Button>
            </div>
          </div>
        </Row>
      </div>
    );
  }
}
