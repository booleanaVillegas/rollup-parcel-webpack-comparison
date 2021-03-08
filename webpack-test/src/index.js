
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div onClick={()=>console.log("I'm a react app with webpack")}>I am Webpack!</div>
);

ReactDOM.render(<App />, document.getElementById('app'));