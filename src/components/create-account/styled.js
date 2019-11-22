import styled from "styled-components";

export const CreateAccountArea = styled.div`
  margin-top: 200px;
`;

export const CrAccText = styled.span`
  margin-top:100px;
  font-size: 40px;
  font-weight: normal;
  line-height: 1.95;
  text-align: left;
  color: #15354b;
`;

export const CrAccSubText = styled.p`
  font-size: 16px;
  font-weight: normal;
  line-height: 2.13;
  text-align: left;
  color: #506270;
`;

export const Input = styled.input`
  margin-right: 30px;
  background: #ecfbfa;
  border: none;
  border-radius: 8px;
  padding: 14px 51px;
  ::placeholder {
    color: #80e0dd;
    
  }
  &:focus{
    outline:0;
  }
`;

export const Button = styled.button`
  border-radius: 8px;
  background-color: ${p => (p.color ? p.color : "none")};
  border: none;
  color: #fff;
  padding: 14px 34px;
  font-size: 15px;
  &:focus{
    outline:0;
  }
`;

export const Images = styled.img`
  background-repeat:no-repeat;
  width:100%;
  height:100%;
  border:none;
  object-fit:contain;
`;