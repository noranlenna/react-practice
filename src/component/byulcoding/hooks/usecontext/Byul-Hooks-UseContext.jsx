import React, {useState} from 'react';
import Page from "./component/Page";
// import {ThemeContext} from "./context/ThemeContext";

function ByulHooksUseContext() {
	const [isDark, setIsDark] = useState(false) ;
	return (
		<div>
			{/*<ThemeContext.Provider value={{isDark,setIsDark}}>*/}
			<Page isDark={isDark} setIsDark={setIsDark}></Page>
			{/*</ThemeContext.Provider>*/}
		</div>
	);
}

export default ByulHooksUseContext;