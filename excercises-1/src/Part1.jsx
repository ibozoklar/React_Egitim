
import React, { useState } from 'react';

function Part1() {
  
    const initialSize = 50;
  
    const [size, setSize] = useState(initialSize);
  
    const increaseSize = () => {
      setSize(currentSize => currentSize + 100);
    };
  
    return (
      <div>
        <button
          onClick={increaseSize}
          style={{
            width: `${size}px`,
            height: `${size}px`,
          }}
        >
          Click here
        </button>
      </div>
    );
  }

export default Part1
