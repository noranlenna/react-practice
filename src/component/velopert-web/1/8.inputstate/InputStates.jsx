import React, { useState } from "react";

function InputStates() {
  const [text, setText] = useState("");

  const hanleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnReset = () => {
    setText("");
  };
  return (
    <div>
      <input type="text" name="" id="" onChange={hanleOnChange}/>
      <button type="button" onClick={handleOnReset}>초기화</button>
      <div className="">
        <b>값 : {text}</b>
      </div>
    </div>
  );
}

export default InputStates;
