import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types' // 类型的限制


class ItemC extends Component {
  // state = {  
  //   list: ['react', 'vue', 'angular']   
  // }
  constructor(props) {
    super(props);
    this.childClick = this.childClick.bind(this);
  }
  render() { 
    return ( 
       <Fragment>
         {/* 循环列表 绑定key */}
         {/* 父组件像子组件传参 */}
          {
            this.props.content.map((item, index) => {
              return <li key={index} onClick={this.childClick}>{item}</li>
            })
          }
       </Fragment>
     );
  }

  childClick(e) {
    this.props.show(e);
  }
}

ItemC.propTypes={
  content:PropTypes.array,
  show:PropTypes.func.isRequired, // 必填项
}

ItemC.defaultProps = {
  show: function() {
    console.log(Math.random()*10)
  }
}

export default ItemC;