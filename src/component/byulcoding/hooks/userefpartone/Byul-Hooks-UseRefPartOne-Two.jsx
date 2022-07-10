import React, {useState, useRef} from 'react';

function ByulHooksUseRefPartOneTwo(props) {
  const [renderer, setRenderer] = useState(0);

  const doRendering = () => {
    setRenderer(renderer + 1);
  };

	// ref는 컴포넌트가 마운트와 상관없이 같은 값을 유지한다.
  const countRef = useRef(0);
	// 변수는 컴포넌트가 렌더링 되는 시점에 새롭게 초기화가 된다.
  let countVar = 0;

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log(`ref : ${countRef.current}`);
  };

  const increaseVar = () => {
    countVar = countVar + 1;
    console.log(`var : ${countVar}`);
  };

	// 렌더를 하기 전에는 값을 유지하지만, 새로 렌더링이 되면 var는 0이 된다.
  const printResults = () => {
    console.log(`ref : ${countRef.current}, var : ${countVar}`);
  };

  return (
    <div>
      <p>Ref : {countRef.current}</p>
      <p>Var : {countVar}</p>
      <button type="button" onClick={printResults}>
        Result
      </button>
      <button type="button" onClick={doRendering}>
        Render
      </button>
      <button type="button" onClick={increaseRef}>
        {" "}
        Increase Ref
      </button>
      <button type="button" onClick={increaseVar}>
        Increase Var
      </button>
    </div>
  );
}

export default ByulHooksUseRefPartOneTwo;