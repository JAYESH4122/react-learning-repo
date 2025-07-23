const RenderAnArrayOfObjects = () => {
  const users = [
    {
      id: 1,
      name: "Alice",
      age: 21,
    },
    {
      id: 2,
      name: "Subu",
      age: 15,
    },
  ];

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RenderAnArrayOfObjects;
