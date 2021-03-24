import React, { Component } from "react";
import { LoginWapper, LoginBox,Input,Button } from "./style";
import { actionCreators } from "./store/index";
//redux: 与最外层的store（数据）进行连接
import { connect } from "react-redux";
import {Redirect} from "react-router-dom";

export class Login extends Component {
  render() {
    const {loginStatus} = this.props;
    if(!loginStatus){
      return (
        <LoginWapper>
          <LoginBox>
              <Input placeholder="login" ref={(input) =>{this.account = input}} />
              <Input placeholder="password" type="password" ref={(input) =>{this.password = input}}/>
              <Button onClick={() =>{this.props.login(this.account, this.password)}}>submit</Button>
          </LoginBox>
        </LoginWapper>
      );
    }else{
      return <Redirect to='/' />
    }
    
  }
}
const mapState = (state) => ({
  loginStatus: state.getIn(['login','login'])
});

const mapDispatch = (dispatch) => ({
  login(accountELe, passwordEle){
    dispatch(actionCreators.login(accountELe.value, passwordEle.value))
    // console.log(accountELe.value, passwordEle.value)
  }
});

export default connect(mapState, mapDispatch)(Login);
