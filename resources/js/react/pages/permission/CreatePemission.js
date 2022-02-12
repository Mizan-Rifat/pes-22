import React, { useState } from 'react';
import axios from 'axios';

const CreatePemission = () => {
  const [name, setName] = useState('');
  const handleSubmit = async e => {
    e.preventDefault();
    const permission = await axios.post('/api/permissions', { name });
    if (permission) {
      console.log({ permission });
    }
  };
  return (
    <>
      <h3>Create Permission</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            value={name}
            className="form-control"
            onChange={e => setName(e.target.value)}
            id="name"
            placeholder="Name"
          />
        </div>
        <button className="btn btn-primary">Create</button>
      </form>
    </>
  );
};

export default CreatePemission;
