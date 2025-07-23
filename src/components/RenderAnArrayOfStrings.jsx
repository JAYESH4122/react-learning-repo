import React from "react";

const RenderAnArrayOfStrings = () => {
  const fruits = ["Apple", "Banana", "Cherry"];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default RenderAnArrayOfStrings;