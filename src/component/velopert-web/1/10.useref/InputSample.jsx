import React, { useState, useRef } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });
  const nameRef = useRef();

  const { name, nickname } = inputs;

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleOnReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
    nameRef.current.focus();
  };

  return (
    <div>
      <input
        type="text"
        name={"name"}
        placeholder={"이름"}
        onChange={handleOnChange}
        value={name}
        ref={nameRef}
      />
      <input
        type="text"
        name="nickname"
        placeholder={"닉네임"}
        onChange={handleOnChange}
        value={nickname}
      />
      <button type="button" onClick={handleOnReset}>
        Reset
      </button>
      <div className="">
        <b>값 : </b> {name}({nickname})
      </div>
    </div>
  );
}

export default InputSample;
