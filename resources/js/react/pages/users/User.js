import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [permissions, setPermissions] = useState([]);
  const [userPermissions, setUserPermissions] = useState([]);

  const handleChange = e => {
    console.log(e.target.value);
    if (userPermissions.indexOf(e.target.value) == -1) {
      setUserPermissions([...userPermissions, e.target.value]);
    } else {
      setUserPermissions(userPermissions.filter(permission => permission !== e.target.value));
    }
  };

  useEffect(() => {
    axios.get(`/api/users/${userId}`).then(res => {
      console.log({ res });
      setUser(res.data);
      setUserPermissions(res.data.permissions.map(permission => permission.id));
    });
    // axios.get(`/api/user-permissions/${userId}`).then(res => {
    //   console.log({ res });
    //   setPermissions(res.data);
    // });
    axios.get(`/api/permissions`).then(res => {
      console.log({ res });
      setPermissions(res.data);
    });
  }, []);

  return (
    <div>
      <h3>{user.name}</h3>
      <h5>Permissions</h5>
      <ul className="list-group">
        {permissions.map((permission, index) => (
          <li className="list-group-item">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id={`permission-${permission.id}`}
                value={permission.id}
                onChange={handleChange}
                checked={userPermissions.some(perm => perm === permission.id)}
              />
              <label className="form-check-label" htmlFor={`permission-${permission.id}`}>
                {permission.name}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;
