import React, { useState } from "react";

const heavyWork = () => {
  console.log("엄청 무거운 작업!!");
  return ["홍길동", "김민수"];
};

function ByulHooksUseStateTwo() {
  /**
   * state 초기값을 불러올 때, 값을 바로 넣는 것이 아니라, 콜백을 넣어준다.
   */
  const [names, setNames] = useState(() => {
    return heavyWork();
  });

  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  const handleUpload = () => {
    setNames((prevState) => {
      console.log(prevState);
      return [input, ...prevState];
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button type="button" onClick={handleUpload}>
        Upload
      </button>
      {names.map((name, index) => {
        return <p key={index}>{name}</p>;
      })}
    </div>
  );
}

export default ByulHooksUseStateTwo;
