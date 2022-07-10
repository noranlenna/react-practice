## 별코딩의 리엑트

--- 
### [useEffect 깔끔하게 마스터하기](https://www.youtube.com/watch?v=kyodvzc5GHU&list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO&index=2&ab_channel=%EB%B3%84%EC%BD%94%EB%94%A9)

1. useEffect의 두번째 인자값은 Dependency array를 넣을 수 있으며, array 안에 state 값을 넣으면, 해당하는 state가 변할 때만 useEffect가 실행된다.

2. Dependency Array를 빈 값으로 두면, 해당 컴포넌트가 mount 될 때만 실행된다.

3. console.log에 메시지가 2번 출력, mount 할 때, unmount 메시지가 나오는 것은, use strict 모드가 활성화 되어 있으면 현상이 발생한다.