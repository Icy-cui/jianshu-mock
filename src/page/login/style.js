import styled from "styled-components";

export const LoginWapper = styled.div `
  z-index: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 56px;
  margin-top: 8px;
  background: #eee;
`;

export const LoginBox = styled.div `
  width: 400px;
  height: 220px;
  margin: 80px auto;
  background: #fff;
  padding-top: 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input `
  display: block;
  width: 200px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  margin: 10px auto;
  color: #777;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const Button = styled.div `
  width: 220px;
  height: 30px;
  padding: 2px 3px;
  line-height: 30px;
  border-radius: 10%;
  color: #fff;
  background: #3194d0;
  border-radius: 15px;
  margin: 10px auto;
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
`;