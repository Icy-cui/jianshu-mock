import React, { Component } from "react";
//redux: 与最外层的store（数据）进行连接
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export class Write extends Component {
  render() {
    const { loginStatus } = this.props;
    if (loginStatus) {
      return <div>write article here ~</div>;
    } else {
      return <Redirect to="/login" />;
    }
  }
}
const mapState = (state) => ({
  loginStatus: state.getIn(["login", "login"]),
});

export default connect(mapState, null)(Write);
