import styled from "styled-components";
import media from "../../util/media";

export const Row = styled.div`
  margin-top: 257px;
  ${media.sm`
    margin-top:20px;
  `}
`;
export const Subs = styled.div`
  margin-bottom: 40px;
  font-size: 40px;
  font-weight: normal;
  line-height: 1.4;
  text-align: left;
  color: #15354b;
  ${media.sm`
  margin-bottom: 20px;
  text-align: center;
  `}
`;
export const Button = styled.div`
  margin-top: 50px;
  ${media.sm`
    margin-top:30px;
    margin:0 30%;
  `}
`;

export const SubsSub = styled.p`
  font-size: 16px;
  font-weight: normal;
  line-height: 2.13;
  text-align: left;
  color: #506270;
  ${media.sm`
  text-align: center;
  `}
`;
