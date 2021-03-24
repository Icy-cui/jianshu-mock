import React, { PureComponent } from "react";
import { HomeWapper, HomeLeft, HomeRight, BackTop } from "./style";
import { actionCreators } from "./store";

import List from "./components/List";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Writer from "./components/Writer";

import { connect } from "react-redux";

export class Home extends PureComponent {

  handleScrollToTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <HomeWapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="https://momentum.photos/img/51c9b1b2-df0f-4523-bf9d-0603da7c5d0c.jpg?momo_cache_bg_uuid=73fe482d-94b6-44ac-94e2-0d70988a9161"
            alt=""
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.props.showScroll ? (
          <BackTop onClick={this.handleScrollToTop}>返回顶部</BackTop>
        ) : null}
      </HomeWapper>
    );
  }

  // 组件挂载好了以后，发送ajax请求数据
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }
}

const mapStateToProps = (state) => ({
  showScroll: state.getIn(["home", "showScroll"]),
});

const mapDispatchToProps = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo());
  },

  changeScrollTopShow() {
    // console.log(document.documentElement.scrollTop)
    if (document.documentElement.scrollTop > 300) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
