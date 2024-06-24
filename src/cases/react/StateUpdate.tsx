import { useState } from 'react';

// Bu kodda Increment butonuna tıklandığında sayacın değeri ne olur? Neden?

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default Counter;