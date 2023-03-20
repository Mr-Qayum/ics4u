import "./OptimusPrime.css";
import { useState, useRef } from "react";

export const OptimusPrime = () => {
  const [isVisible, setIsVisible] = useState(true);
  const count = useRef(0);

  const hide = () => {
    setIsVisible(!isVisible);
    if (!isVisible) {
      count.current++;
    }
  };

  return (
    <div id="optimus-container">
      <p>{count.current}</p>
      <button onClick={() => hide()}>Hide</button>
      {isVisible && (
        <img
          className="optimus"
          src="https://cdn.shopify.com/s/files/1/0054/4371/5170/products/667pin.png?v=1627414689"
        />
      )}
    </div>
  );
};
