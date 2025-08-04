import React, { useState } from "react";

const PreservingState = () => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");

  function TextField({ text }) {
    return (
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    );
  }

  return (
    <div>
      <TextField text={text} />
      <button onClick={() => setCounter(counter + 1)}>
        Clicked {counter} times
      </button>
    </div>
  );
};

export default PreservingState;
