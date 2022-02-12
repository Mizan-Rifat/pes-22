import React from 'react';
import CreatePemission from './CreatePemission';
import Permissions from './Role';

const Permission = () => {
  return (
    <div className="container">
      <Permissions />
      <div className="my-3">
        <hr />
      </div>
      <CreatePemission />
    </div>
  );
};

export default Permission;
