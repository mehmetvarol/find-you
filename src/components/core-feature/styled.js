import styled from "styled-components";
import media from "../../util/media";

export const CoreArea = styled.div`
  width: 100%;
  margin-top: 176px;
  height: 497px;
  background-color: #eff8ff;

  ${media.sm`
    height:1000px;
    .mobile{
      display:block !important;
     }
  `}
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 350px;
  span {
    font-size: 28px;
    font-weight: normal;
    line-height: 1.14;
    text-align: left;
    color: #15354b;
    margin-top: 35px;
  }
  p {
    margin-top: 30px;
    font-size: 16px;
    font-weight: normal;
    line-height: 2;
    text-align: left;
    color: #506270;
  }

  ${media.sm`
    span{
      margin-top:20px;
    }
  `}
`;

export const CardItem = styled.div`
  width: 94px;
  height: 92px;
  border-radius: 10px;
  margin-top: 107px;
  background-color: ${p => (p.BgColor ? p.BgColor : "black")};

  ${media.sm`
    margin-top:20px;
  `}
`;
