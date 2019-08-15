import React,  { Component, Fragment } from "react";

import ItemC from './item'

/**
 * 组件和普通JSX语法区别
 * 
 * 你自定义的组件必须首写字母要进行大写，而JSX是小写字母开头的。
 */
class Test extends Component {

  constructor(props) {
    super(props); // 固定写法
    this.state = { 
      testText: "+ 文案",
      clickText: "还没有点击",
      list: ['react', 'vue', 'angular']   
    }
    this.show = this.show.bind(this); // 等同于代码里面绑定this
  }

  render(){
    return (
      <Fragment>
        <div>测试 Fragment 组件 {this.state.testText}</div>
        <ul className="my-list">
            {/* 注册点击事件  react注释都这么优秀 */}
            <li onClick={this.show.bind(this)}>I love React1</li>
            <li onClick={this.show.bind(this)}>I love React2</li>
            <li onClick={this.show.bind(this)}>I love React3</li>
        </ul>
        <div>
          点击的内容 ： {this.state.clickText}
        </div>
        {/* 子组件调用父组件的方法， 需要将父组件方法传递给子组件 */}
        <ItemC content={this.state.list} 
                // show={this.show}
        ></ItemC>
      </Fragment>
    )
  }; 
  // 定义方法
  show(e) {
    console.log(e.target)
    // 动态修改 state的值 React是禁止直接操作state
    this.setState({
      clickText: 1
    })
  }
}

export default Test; 