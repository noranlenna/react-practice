import React, {useEffect, useState} from 'react';

function ByulHooksUseEffectOne(props) {
	const [count, setCount] = useState(1);
	const [name, setName] = useState('');

	const handleCountUpdate = ()=>{
		setCount(count + 1)
	}

	const handleInputChange = (e)=>{
		setName(e.target.value)
	}



	// 마운트 될 경우에만 실행됨.
	useEffect(()=>{
		console.log("Mount")
	}, [])

	// 렌더링 될 때 마다 실행됨.
	useEffect(()=>{
		console.log("Rendering...")
	}, )
	// count가 변할때만 실행됨.
	useEffect(()=>{
		console.log("Count Rendering...")
	}, [count])
	// name이 변할때만 실행됨.
	useEffect(()=>{
		console.log("Name Rendering...")
	}, [name])


	return (
		<div>
			<button type="button" onClick={handleCountUpdate}>Update</button>
			<span>count : {count}</span>
			<input type="text" value={name} onChange={handleInputChange}/>
			<span>name : {name}</span>
		</div>
	);
}

export default ByulHooksUseEffectOne;