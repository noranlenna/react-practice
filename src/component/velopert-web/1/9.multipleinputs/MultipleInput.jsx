import React, { useState } from "react";

function MultipleInput() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });
  /**
   * input의 개수가 여러개일 경우, useState를 여러번 사용해선 안된다.
   * input에 name을 설정하고, 이벤트가 발생할 때 값을 참조하는 방식으로 state에 접근한다.
   * useState의 값은 항상 객체 형태로 상태관리 한다.
   */
  const { name, nickname } = inputs;

  /**
   * 리엑트에서 객체를 수정할 때에는 값을 직접 수정해선 안된다.
   * 새로운 객체를 복사한 뒤, 그 객체에 값을 변경한 후,
   * 해당 객체를 사용하도록 한다.
   */
  const handleOnChange = (e) => {
		// event.target 객체 내의 value, name 비구조화 할당
    const { value, name } = e.target;
    setInputs({
      ...inputs, // 객체 복사
      [name]: value, // input 태그의 name, value를 할당한다.
    });
  };

  const handleOnReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        placeholder={name}
        onChange={handleOnChange}
      />
      <input
        type="text"
        name="nickname"
        value={nickname}
        placeholder={nickname}
        onChange={handleOnChange}
      />
      <button type="button" onClick={handleOnReset}>RESET</button>
      <div className="">
        <b>값 : </b>
        이름
      </div>
    </div>
  );
}

export default MultipleInput;
