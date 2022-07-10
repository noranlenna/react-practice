import React, {useEffect, useState} from 'react';
import Timer from "./component/Timer";

function ByulHooksUseEffectTwo(props) {
	const [showTimer,setShowTimer] = useState(false);
	return (
		<div>
			{showTimer && <Timer></Timer>}
			<button onClick={()=>{setShowTimer(!showTimer)}} type="button">Toggle Timer</button>
		</div>
	);
}

export default ByulHooksUseEffectTwo;