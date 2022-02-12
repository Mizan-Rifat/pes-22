import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const Main = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default Main;

if (document.getElementById('app')) {
  ReactDOM.render(<Main />, document.getElementById('app'));
}
