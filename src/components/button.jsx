
import React, { useState } from 'react';


    const ButtonCounter = () => {
        // Initialize the counter state to 0
        const [count, setCount] = useState(0);
      
        // Event handler for button click
        const handleClick = () => {
          setCount(count + 1);
        };
  return (
    <div>
              <p>Button clicked {count} times</p>
              <button onClick={handleClick}>Click me</button>
      
    </div>
  )
}

export default button
