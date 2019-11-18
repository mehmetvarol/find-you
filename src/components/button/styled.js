import styled from "styled-components";
import media from "../../util/media";

export const Button = styled.button`
  border-radius: 23px;
  background-color: ${p => (p.color ? p.color : "white")};
  padding: 13px 52px;
  color: ${p => (p.textColor ? p.textColor : "white")};
  border: ${p => (p.border ? "solid 1px #506270" : "none")};
  font-size:16px;

  ${media.sm`
    padding: 10px 45px;
  `}
`;
