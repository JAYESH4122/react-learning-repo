import React, { useState } from "react";

const UpdatingObjState = () => {
  const [person, setPerson] = useState({
    firstName: "nikhil",
    lastName: "vinod",
    email: "nikhil@gmail.com",
  });

  const handleChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"  
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={person.email}
          onChange={handleChange}
        />
      </label>
      <p></p>
    </div>
  );
};

export default UpdatingObjState;
