import { React, useState } from "react";

const Title = (props) => {
  const [counter, setCounter] = useState(0);

  const handleOnClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={() => handleOnClick()}></button>
      <h1>{counter}</h1>
    </div>
  );
};

export default Title;
