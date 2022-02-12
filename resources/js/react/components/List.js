import React from 'react';

const List = ({ data, title, handleDelete }) => {
  return (
    <>
      <h3>{title}</h3>
      <ul className="list-group list-group-flush">
        {data.map(item => (
          <li className="list-group-item d-flex justify-content-between align-items-center">
            {item.name}
            <button className="btn" onClick={() => handleDelete(item.id)}>
              <span className="badge bg-danger rounded-pill">X</span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
