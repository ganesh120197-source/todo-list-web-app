import React, { useRef, useState } from "react";

function App() {
  const renderCount = useRef(0);
  const [count, setCount] = useState(0);

  renderCount.current += 1;

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Renders: {renderCount.current}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default App;





