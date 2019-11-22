import React, { Component } from "react";
import {
  CreateAccountArea,
  CrAccText,
  CrAccSubText,
  Input,
  Button,
  Images,
  Flex
} from "./styled";

export default class CreateAccount extends Component {
  render() {
    const {
      register,
      imagePath,
      text,
      buttonColor,
      order,
      order2
    } = this.props;
    return (
      <CreateAccountArea>
        <div className="container">
          <div className="row">
            <div className={`col-md-6 mt-5 ${order2}`}>
              <CrAccText>{text}</CrAccText>
              <CrAccSubText>
                We all need to start well must explain to you how all this
                mistaken idea of denouncing pleasure and praising pain was born
                and I will give you a complete account of the system, and
                expound.
              </CrAccSubText>
              <Flex>
                {register && (<Input type="text" placeholder="E-mailinizi girin" />)}
                <Button color={buttonColor}>Get Started</Button>
              </Flex>
            </div>
            <div className={`col-md-6 ${order}`}>
              <Images src={imagePath} />
            </div>
          </div>
        </div>
      </CreateAccountArea>
    );
  }
}
