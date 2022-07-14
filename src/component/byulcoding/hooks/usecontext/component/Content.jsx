import React from 'react';

function Content({isDark}) {
	return (
		<header
			className={"content"}
			style={{
				backgroundColor: isDark ? "black" : "lightgray",
				color: isDark ? "white" : "black",
			}}
		>
			<h1>Text 2</h1>
		</header>
	);
}

export default Content;