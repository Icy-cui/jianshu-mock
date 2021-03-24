import React, { PureComponent } from "react";
import { RmdWapper, RmdItem } from "../style";
import { connect } from "react-redux";

export class Recommend extends PureComponent {
  render() {
    const { list } = this.props;
    return (
        <RmdWapper>
        {list.map((item) => {
          return (
              <RmdItem key={item.get("id")} imgUrl={item.get("imgUrl")}></RmdItem>
          );
        })}
        </RmdWapper>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(["home", "recommendList"]),
});

// const mapDispatchToProps = ()=>{

// }

export default connect(mapStateToProps, null)(Recommend);
