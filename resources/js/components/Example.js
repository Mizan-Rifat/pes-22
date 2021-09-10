import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  const login = () => {
    axios.get('/sanctum/csrf-cookie').then(response => {
      axios
        .post('/login', {
          email: 'mizan@mail.com',
          password: '12345678'
        })
        .then(res => {
          console.log({ res });
        });
    });
  };
  const getCurrentUser = () => {
    axios.get('/user').then(res => {
      console.log({ res });
    });
  };
  const logout = () => {
    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post('/logout').then(res => {
        console.log({ res });
      });
    });
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">Example Component</div>

            <div className="card-body">I'm an example component!</div>
            <button className="btn btn-primary mb-2" onClick={getCurrentUser}>
              Get User
            </button>
            <button className="btn btn-primary mb-2" onClick={login}>
              Login
            </button>
            <button className="btn btn-primary mb-2" onClick={logout}>
              LogOut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}
