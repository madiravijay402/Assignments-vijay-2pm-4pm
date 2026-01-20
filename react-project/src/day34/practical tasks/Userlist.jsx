import React from 'react'

function Userlist() {
  const users = [
    { id: 1, name: "Vijay", age: 24, city: "Hyderabad" },
    { id: 2, name: "Ajay", age: 22, city: "Mumbai" },
    { id: 3, name: "Sanjay", age: 21, city: "Delhi" },
  ];

  return (
    <div className="container mt-3" style={{marginBottom:20}}>
      <h3 className="text-center mb-3">
        User list from array of objects
      </h3>

      <div
        className="bg-light d-flex justify-content-center align-items-center rounded"
        style={{ width: 420, minHeight: 300 }}
      >
        <ul className="list-group w-100 px-3">
          {users.map(user => (
            <li
              key={user.id}
              className="list-group-item d-flex justify-content-between align-items-center mb-3"
              style={{ marginBottom: "20px" }}
            >
              <span className="fw-semibold">
                {user.name}
              </span>

              <span className="badge bg-success">
                {user.city}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Userlist;
