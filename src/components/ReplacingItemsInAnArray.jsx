import React, { useState } from "react";

const ReplacingItemsInAnArray = () => {
  let intialCounters = [0, 0, 0];
  const [counters, setCounters] = useState(intialCounters);
  const handleClick = (index) => {
    const nextUpdated = counters.map((c, i) => {
      if (index === i) {
        return c + 1;
      } else {
        return c;
      }
    });

    setCounters(nextUpdated);
  };
  return (
    <div>
      <ul>
        {counters.map((counter, i) => (
          <li key={i}>
            {counter}{" "}
            <button
              onClick={() => {
                handleClick(i);
              }}
            >
              +1
            </button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReplacingItemsInAnArray;
