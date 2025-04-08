import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function throttle(func, delay) {
    let lastTime = 0;

    return function (...args) {
      const now = new Date().getTime();
      if (now - lastTime >= delay) {
        lastTime = now;
        func(...args);
      }
    };
  }


  function resizer() {
    setCount((prevCount) => prevCount + 1);
  }

  const throttledListener = throttle(resizer, 2000);

  useEffect(() => {
    window.addEventListener('resize', throttledListener);

    // Clean up on component unmount
    return () => {
      window.removeEventListener('resize', throttledListener);
    };
  }, []);

  return (
    <p>
      {count}
    </p>
  );
}

export default App;
