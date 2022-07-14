## 별코딩의 리엑트

--- 
### [useContext + Context API](https://www.youtube.com/watch?v=LwvXVEHS638&ab_channel=%EB%B3%84%EC%BD%94%EB%94%A9)

1. const[state, setState] = useState(초기값). state에는 현재값, setState는 state를 변경하는 함수. setState 사용 시, 재렌더링이 된다.

2. state를 변경할 때, 이전 state 값을 참조해야 하면, setState 인자로 prevState 콜백함수를 이용하여 newState를 리턴하도록 한다.

3. useState에 값을 받아올 때, 무거운 작업을 할 때, useState 인자로 콜백함수를 넣는다. 