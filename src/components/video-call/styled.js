import styled from "styled-components";
import media from "../../util/media";
export const Area = styled.div`
  width: 100%;
  height: 664px;
  margin-top: 283px;
  background-color: #eff8ff;

  ${media.sm`
    .container{
      display:block !important;
    }
  `}
`;

export const Video = styled.div`
  width: 50%;
  padding-top: 120px;

  ${media.sm`
    width:100%;
    padding-top:20px;
  `}
`;
export const Call = styled.p`
  font-size: 60px;
  font-weight: normal;
  line-height: 1.25;
  text-align: left;
  color: #15354b;
  ${media.sm`
  font-size: 40px;
  text-align: center;
  `}
`;
export const CallSub = styled.p`
  font-size: 16px;
  font-weight: normal;
  line-height: 2.13;
  text-align: left;
  color: #506270;
  margin-top: 55px;
`;
export const Download = styled.span`
  font-size: 28px;
  font-weight: normal;
  line-height: 2;
  text-align: left;
  color: #15354b;
  margin-top: 55px;
  margin-bottom: 70px;
  ${media.sm`
  text-align: center;
  `}
`;
export const ImageOne = styled.img``;
export const ImageTwo = styled.img``;
export const Iphone = styled.img`
  position: absolute;
  right: -175px;
  top: -105px;

  ${media.sm` 
    position:initial;
    width:310px;
  `}
`;
