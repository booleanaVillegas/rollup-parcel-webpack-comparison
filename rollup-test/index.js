
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div onClick={()=>console.log("I'm a react app with Rollup")}>I am Rollup!</div>
);

ReactDOM.render(<App />, document.getElementById('app'));