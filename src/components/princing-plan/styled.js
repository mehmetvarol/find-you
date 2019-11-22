import styled from "styled-components";
import media from "../../util/media";

export const Plan = styled.p`
  margin-top: 200px;
  font-size: 40px;
  font-weight: normal;
  line-height: 1.95;
  text-align: center;
  color: #15354b;
  margin-bottom: 0;
  ${media.sm` 
    margin-top:100px;
  `}
`;
export const SubPlan = styled.p`
    font-size: 16px;
    font-weight: normal;
    line-height: 1.90;
    text-align: center;
    color: #506270;
    padding: 0 10%;

    ${media.sm`
      padding:7px;
    `};
`;
