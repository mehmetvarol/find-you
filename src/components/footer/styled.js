import styled from "styled-components";

export const Image = styled.img``;
export const FooterWrapper = styled.div`
  margin-top: 170px;
`;

export const FooterMenu = styled.ul`
  list-style-type: none;
  li:first-child {
    font-size: 20px;
    font-weight: 900;
    line-height: 1.5;
    text-align: left;
    color: #222222;
    margin-bottom: 40px;
  }
  li {
    a {
      text-decoration: none;
      font-size: 16px;
      font-weight: normal;
      line-height: 2.5;
      text-align: left;
      color: #506270;
    }
  }
`;

export const Social = styled.ul`
  display:flex;
  justify-content:space-around;
  list-style-type: none;

`;
