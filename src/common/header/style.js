import styled from "styled-components";
import logoPic from "../../statics/logo.png";

const HeaderWapper = styled.div `
  z-index:1;
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

const Logo = styled.a `
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  height: 56px;
  width: 100px;
  background: url(${logoPic});
  background-size: contain;
`;

const Nav = styled.div `
  margin: 0 auto;
  height: 100%;
  width: 900px;
  padding-left: 50px;
  padding-right: 170px;
  boxing-sizing: border-box;
`;

const NavItem = styled.div `
  line-height: 56px;
  padding: 0 20px;
  font-size: 17px;
  color: #333;
  cursor: pointer;
  &.left-navitem {
    float: left;
  }
  &.right-navitem {
    color: #969696;
    float: right;
  }
  &.active {
    color: #ea6f5a;
  }
`;

const SearchWapper = styled.div `
  position: relative;
  float: left;
`;

const NavSearch = styled.input.attrs({
    placeholder: "search",
})
`
  &:: placeholder {
    color: #999;
  }
  &.focused {
    width: 200px;
  }
  &.slide-enter {
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 200pxpx;
  }
  &.slide-exit {
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active {
    width: 140px;
  }
  width: 140px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0px 40px 0px 20px;
  border: none;
  boxing-sizing: border-box;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
`;

const SearchInfo = styled.div `
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgb(0, 0, 0, 0.2);
  background: #fff;
`;

const SearchInfoTitle = styled.div `
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;
const SearchInfoSwitch = styled.span `
  float: right;
  font-size: 13px;
  color: #969696;
  cursor: pointer;
`;

const SearchInfoItem = styled.a `
  display: block;
  float: left;
  margin-right: 10px;
  margin-bottom: 13px;
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
`;

const SearchInfoList = styled.div `
  overflow: hidden;
`

const Addition = styled.div `
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

const NavButton = styled.div `
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  cursor: pointer;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`;

export {
    HeaderWapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    NavButton,
    Addition,
    SearchWapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
};