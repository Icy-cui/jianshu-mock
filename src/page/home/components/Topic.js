import React, { PureComponent } from "react";
import { TopicWapper, TopicItem } from "../style";
import {connect} from 'react-redux'

export class Topic extends PureComponent {
  render() {
    return (
      <TopicWapper>{this.props.list.map((item)=>{
          return <TopicItem key={item.get('id')}>{item.get('title')}</TopicItem>
      })}
      </TopicWapper>
    );
  }
}
const mapStateToProps = (state)=>({
    list: state.getIn(['home', 'topicList'])
})

// const mapDispatchToProps = ()=>{

// }



export default connect(mapStateToProps, null)(Topic);;
