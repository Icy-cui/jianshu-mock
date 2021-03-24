import styled from "styled-components";

export const DetailWapper = styled.div `
  display: flex;
  justify-content: center;
  padding: 10px 16px 0;
  margin: 0 auto;
  width: 1000px;
  background-color: #f9f9f9;
  color: rgb(64, 64, 64);
  font-size: 16px;
`;

export const DetailLeft = styled.div `
  float: left;
  width: 730px;
  padding: 32px 32px;
  background-color: white;
  color: rgb(64, 64, 64);
  .header {
    margin: 0 0 32px 15px;
    font-size: 30px;
    font-weight: 700;
    word-break: break-word;
  }
`;

export const DetailRight = styled.div `
  box-sizing: border-box;
  display: block;
  float: right;
  width: 260px;
  background-color: white;
  padding: 16px 16px;
`;

export const Content = styled.div `
  color: rgb(64, 64, 64);
  img{
    ${'' /* width: 100%; */}
    margin: 0;
    padding-bottom: 25px;
    text-align: center;
    font-size: 0;
  }
  p{
    margin: 25px 0; 
    font-size: 16px; 
    line-height: 30px;
  }
`;