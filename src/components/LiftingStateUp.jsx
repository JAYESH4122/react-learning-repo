import React, { useState } from "react";

function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <section>
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button type="submit" onClick={() => setIsActive(true)}>
          Show more
        </button>
      )}
    </section>
  );
}

const LiftingStateUp = () => {
  return (
    <div>
      <h2>ALmaty, Kazakhstan</h2>
      <Panel title="About">With a population of about 2 million</Panel>
      <Panel title="Etymology">The name comes from kazha word</Panel>
    </div>
  );
};

export default LiftingStateUp;

