import React from 'react';
import ReactDOM from 'react-dom';

export default function App() {
  return <h1>Hello</h1>;
}

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}
