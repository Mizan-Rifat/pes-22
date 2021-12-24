import axios from 'axios';
import React from 'react';

const App = () => {
  const handleRegistration = () => {
    axios.post('/');
  };
  return <button onClick={handleRegistration}> Register</button>;
};

export default App;
