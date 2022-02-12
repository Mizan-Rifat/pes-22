import React, { useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Permission from './pages/permission';
import Login from './pages/auth/Login';
import Users from './pages/users/Users';
import User from './pages/users/User';
import Home from './pages/home';

const App = () => {
  useEffect(() => {
    // axios.get('/api/user').then(res => {
    //   console.log({ res });
    // });
    // axios.get('/api/user-permissions/1').then(res => {
    //   console.log({ res });
    // });
    axios.get('/api/permissions').then(res => {
      console.log({ res });
    });
  }, []);
  return (
    <div className="container mt-3">
      <Link to="/">Home</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="permission" element={<Permission />} />
        <Route path="login" element={<Login />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:userId" element={<User />} />
        {/* <Route path=":userId" element={<User />} />
        </Route> */}
      </Routes>
    </div>
  );
};

export default App;
