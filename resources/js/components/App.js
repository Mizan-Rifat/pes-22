import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleLoginFormChange = e => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };
  const handleRegistration = async e => {
    e.preventDefault();
    const csrf = await axios.get('/sanctum/csrf-cookie');
    console.log({ csrf });
    if (csrf) {
      const res = await axios.post('/api/register', formData);
      console.log({ res });
    }
  };
  const handleLogin = async e => {
    e.preventDefault();
    const csrf = await axios.get('/sanctum/csrf-cookie');
    console.log({ csrf });
    if (csrf) {
      const res = await axios.post('/api/login', loginData);
      console.log({ res });
    }
  };

  useEffect(async () => {
    const user = await axios.get('/api/user');
    console.log({ user });
  }, []);
  return (
    <div className="container p-3">
      <form className="row g-3" onSubmit={handleRegistration}>
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            name="password_confirmation"
            className="form-control"
            id="confirmPassword"
            onChange={handleChange}
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>

      <hr />
      <h3>Login</h3>

      <form className="row g-3" onSubmit={handleLogin}>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            onChange={handleLoginFormChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            onChange={handleLoginFormChange}
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
