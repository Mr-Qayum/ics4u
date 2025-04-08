import { useState } from 'react';

function App() {
  const [message, setMessage] = useState("");

  function debounce(func, delay) {
    let timer;

    return function (...args) {
      clearTimeout(timer);
      setMessage("");
      timer = setTimeout(() => {
        func(...args);
      }, delay)
    }
  }

  const handleSearch = debounce(() => {
    setMessage("Fetching API...");
  }, 400);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onInput={() => handleSearch()}
      />
      <p>{message}</p>
    </div>
  );
}

export default App;