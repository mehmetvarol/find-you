import React, { Component } from "react";
import { Button } from "./styled";

export default class MasterButton extends Component {
  render() {
    const { title, color, textColor, border, fontSize} = this.props;
    return (
      <Button color={color} textColor={textColor} border={border} fontSize={fontSize}>
        {title}
      </Button>
    );
  }
}
