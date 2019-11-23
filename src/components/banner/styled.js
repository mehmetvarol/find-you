import styled from "styled-components";
import media from "../../util/media";

export const BannerImage = styled.div`
  width: 100%;
  margin-top: 60px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("/images/banner.png");
`;

export const BannerText = styled.p`
  font-size: 48px;
  font-weight: normal;
  font-style: normal;
  line-height: 1.3;
  text-align: center;
  color: #15354b;

  ${media.sm`
    margin-top: 0;
    font-size: 24px;
  `}
`;

export const BannerSub = styled(BannerText)`
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 100px;
  padding: 0 200px;

  ${media.sm`
    font-size: 12px;
    margin-top: 0;
    padding: 0;
    margin-bottom: 30px;
  `}
`;
export const BannerBody = styled.div`
  width: 100%;
  height: 587px;
  margin-top: 90px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("/images/banner-body.png");
  ${media.sm`
    margin: 0;
    margin: 50px 0;
    height:160px;
  `}
`;
