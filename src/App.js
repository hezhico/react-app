import React from 'react';
// import logo from './logo.svg';// 加载本地图片
import './App.css';
import Test  from './components/test'


// JSX就是Javascript和XML结合的一种格式。React发明了JSX，可以方便的利用HTML语法来创建虚拟DOM，
// 当遇到<，JSX就当作HTML解析，遇到{就当JavaScript解析.

function App() {
  return (
    // 样式class
    <div className="App">
      <header className="App-header">
        <Test></Test>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
