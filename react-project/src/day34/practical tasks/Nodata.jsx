import React, { useState } from 'react'

function Nodata() {

  const initialUsers = [
    { id: 1, name: "Vijay", age: 24, city: "Hyderabad" }
  ];

  const [users, setUsers] = useState(initialUsers);

  return (
    <div
      className="bg-warning p-3 rounded"
      style={{ width: 420, minHeight: 220 }}
    >
      <h4 className="text-center mb-3 text-dark">
        User List
      </h4>

      
      <div className="d-flex gap-2 mb-3 justify-content-center">
        <button
          className="btn btn-danger btn-sm"
          onClick={() => setUsers([])}
        >
          Clear
        </button>

        <button
          className="btn btn-success btn-sm"
          onClick={() =>
            setUsers([
              ...users,
              { id: Date.now(), name: "New User", age: 22, city: "Chennai" }
            ])
          }
        >
          Add User
        </button>

        <button
          className="btn btn-primary btn-sm"
          onClick={() => setUsers(initialUsers)}
        >
          Reset
        </button>
      </div>

      
      {users.length === 0 ? (
        <p className="text-center text-danger fw-bold">
          No data available
        </p>
      ) : (
        <ul className="list-group">
          {users.map(user => (
            <li key={user.id} className="list-group-item">
              {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Nodata;
