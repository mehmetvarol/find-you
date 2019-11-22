import styled from "styled-components";
import media from "../../util/media";
export const Card = styled.div`
  width: 100%;
  height: 738px;
  border-radius: 15px;
  border: solid 1px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  padding: 80px 60px;
  margin: 0 25px;

  ${media.sm`
    width:100%;
    margin:0;
    margin-bottom:20px;
  `}
`;

export const Image = styled.img`
  width: 124px;
  height: 142px;
  background-repeat: no-repeat;
  object-fit: contain;
  ${media.sm`
    margin: 0 37%;
    transform: translateX(-50%);
  `}
`;

export const Money = styled.div`
  margin-top: 30px;
  margin-bottom: 40px;
  position: relative;
  .dolar {
    vertical-align: top;
    position: absolute;
    top: 10px;
    left: -9px;
  }
  .money {
    font-size: 40px;
  }
  .month {
    font-size: 20px;
  }
`;

export const DataInfo = styled.p`
  font-size: 18px;
  font-weight: normal;
  line-height: 2.67;
  text-align: left;
  color: #506270;
  ${media.sm`
    line-height:2.00;
  `}
`;

export const Try = styled.span`
  font-size: 16px;
  font-weight: normal;
  line-height: 2.67;
  text-align: left;
  margin-left: 25px;
  color: ${p => (p.color ? p.color : "none")};
  ${media.sm`
    display:block;
  `}
`;
