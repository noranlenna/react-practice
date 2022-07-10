import React, { useState, useRef, useEffect } from "react";

function ByulHooksUseRefPartOneThree(props) {
  const [count, setCount] = useState(1);
  const renderCount = useRef(1);

  // 무한 루프...
  // const [renderCount, setRenderCount] = useState(1);
  // useEffect(()=>{
  //   console.log('Rendering...')
  //   setRenderCount(renderCount + 1)
  // })

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log(`Render Count : ${renderCount.current}`);
  });

  return (
    <div>
      <p>Count : {count}</p>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count
      </button>
    </div>
  );
}

export default ByulHooksUseRefPartOneThree;
