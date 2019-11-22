import React, { Component } from 'react'
import { Plan, SubPlan} from "./styled";

export default class Pricing extends Component {
  render() {
    return (
      <div className="container">
        <Plan>Pricing Plan</Plan>
        <SubPlan>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</SubPlan>
      </div>
    )
  }
}
