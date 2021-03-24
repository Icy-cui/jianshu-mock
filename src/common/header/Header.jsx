import React, { Component } from "react";
import { actionCreators } from "./store/index";
//logout的时候需要修改状态
import { actionCreators as loginActCreators } from "../../page/login/store";
//redux: 与最外层的store（数据）进行连接
import { connect } from "react-redux";
// 动画效果库
import { CSSTransition } from "react-transition-group";
import {
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
  SearchInfoList,
} from "./style";

// react router
import { Link } from "react-router-dom";

export class Header extends Component {
  getListArea() {
    const { focused, list, page, totalPage, mouseIn } = this.props;

    const newList = list.toJS(list);
    const pageList = [];
    if (newList.length) {
      // 按照每十条显示
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        // console.log(newList[i]);
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        );
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={this.props.handleMouseEnter}
          onMouseLeave={this.props.handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => this.props.handlePageChange(page, totalPage)}
            >
              换一换
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return;
    }
  }

  render() {
    const { focused, list, login, logout } = this.props;
    return (
      <HeaderWapper>
        <Link to="/">
          <Logo href="/" />
        </Link>
        <Nav>
          <NavItem className="left-navitem active">Home</NavItem>
          <NavItem className="left-navitem">下载App</NavItem>
          {login ? (
            <NavItem className="right-navitem" onClick={logout}>
              退出
            </NavItem>
          ) : (
            <Link to={"/login"}>
              <NavItem className="right-navitem">登录</NavItem>
            </Link>
          )}

          <NavItem className="right-navitem">Aa</NavItem>
          <SearchWapper>
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={() => this.props.handleInputFocus(list)}
                onBlur={this.props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            {this.getListArea()}
          </SearchWapper>
        </Nav>
        <Addition>
          <NavButton className="reg">注册</NavButton>
          <Link to="/write">
            <NavButton className="writting">写文章</NavButton>
          </Link>
        </Addition>
      </HeaderWapper>
    );
  }
}

// 组件和store做连接时，state 如何映射到 props
const mapStateToProps = (state) => {
  // state 是 store中的所有数据，这样就可以在当前代码中使用 this.props.
  return {
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    login: state.getIn(["login", "login"]),
  };
};

// 组件要改变store中的内容要调用 dispatch 方法
const mapDispatchToProps = (dispatch) => {
  // dispatch 就是 store 的 dispatch 方法：传递action到store中去
  return {
    handleInputFocus(list) {
      if (list.size === 0) {
        dispatch(actionCreators.getList());
      }

      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handlePageChange(page, totalPage) {
      // console.log(page, totalPage);
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
    logout() {
      dispatch(loginActCreators.logout());
    },
  };
};

//redux: 与最外层的store（数据）进行连接：export的是一个容器组件
export default connect(mapStateToProps, mapDispatchToProps)(Header);
