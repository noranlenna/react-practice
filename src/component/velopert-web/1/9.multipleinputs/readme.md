## 벨로퍼트와 함께하는 모던 리액트 

---
### [9. 여러개의 input 상태 관리하기](https://react.vlpt.us/basic/09-multiple-inputs.html)

1. input의 개수가 여러개인 경우, useState를 여러번 사용하면 안된다. input name properties에 state를 설정하고, 이벤트가 발생할 때, 값을 참조하는 방식으로 state에 접근한다.
2. useState의 값은 항상 객체 형태로 상태관리를 한다.
3. 리엑트에서 객체를 수정할 때에는 값을 직접 수정해선 안된다. 새로운 객체를 복사한 뒤, 복사한 객체에 값을 변경한 후, 해당 객체를 사용하도록 한다.


리엑트가 컴포넌트가 렌더링 되는 과정.
https://stackoverflow.com/a/24719289/10694438

