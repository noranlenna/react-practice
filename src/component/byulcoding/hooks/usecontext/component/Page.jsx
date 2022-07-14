import React from 'react';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

// page 컴포넌트에서는 전혀 사용되지 않는다.
function Page({isDark, setIsDark}) {
	return (
		<div className="page">
			<Header isDark={isDark}></Header>
			<Content isDark={isDark}></Content>
			<Footer isDark={isDark} setIsDark={setIsDark}></Footer>
		</div>
	);
}

export default Page;