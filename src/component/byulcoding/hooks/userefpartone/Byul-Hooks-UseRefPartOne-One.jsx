import React, { useState, useRef } from "react";

function ByulHooksUseRefPartOneOne(props) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log("Rendering...");
  console.log(countRef); // 값을 접근하고 싶을땐, xxx.current

  const increaseCountState = () => {
    setCount(count + 1);
  };
  // ref는 실행시키면 렌더링이 되지 않음.
  // ref의 장점 : 매번 바뀔때마다 렌더링이 되면 성능이 안좋아지므로 컴포넌트 내에 자주 바뀌는 값에 사용하면 좋다.
  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log(`Ref : ${countRef.current}`);
  };

  return (
    <div>
      <p>State : {count}</p>
      <p>Ref : {countRef.current}</p>
      <button type="button" onClick={increaseCountState}>
        Increase Count
      </button>
      <button type="button" onClick={increaseCountRef}>
        Increase Ref
      </button>
    </div>
  );
}

export default ByulHooksUseRefPartOneOne;
