import axios from 'axios';
import React, { useState, useEffect } from 'react';
import List from '../../components/List';

const Permissions = () => {
  const [permisssions, setPermissions] = useState([]);

  const handleDelete = id => {
    console.log({ id });
    axios.delete(`/api/permissions/${id}`).then(res => {
      console.log({ res });
    });
  };

  useEffect(() => {
    axios.get('/api/permissions').then(res => {
      setPermissions(res.data);
    });
    // axios
    //   .post(`/api/roles`, {
    //     name: 'super_admin'
    //   })
    //   .then(res => {
    //     console.log({ res });
    //   });
  }, []);

  return (
    <>
      <List title="Permissions" data={permisssions} handleDelete={handleDelete} />
    </>
  );
};

export default Permissions;
