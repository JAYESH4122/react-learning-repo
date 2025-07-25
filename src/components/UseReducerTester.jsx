import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment_age": {
      return { age: state.age + 5 };
    }
    case "reset_age": {
      return { age: (state.age = 0) };
    }
    case "decrement_age": {
      return { age: state.age - 3 };
    }
  }
}

export default function Counter() { 
  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <>  
      <button
        onClick={() => {
          dispatch({ type: "increment_age" });
        }}  
      >
        Increment age
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset_age" });
        }}
      >
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement_age" });
        }}
      >
        decrement age
      </button>
      <p>Hello! You are {state.age}</p>
    </>
  );
}
