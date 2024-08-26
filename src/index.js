import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";
number.innerText = 0;

// reducer 함수
const countModifier = (count = 0, action) => {
  console.log(count, action);
  // Switch ~ case 구문으로 변경
  if (action.type === ADD) {
    return count + 1;
  } else if (action.type === MINUS) {
    return count - 1;
  } else {
    return count;
  }
};

// store 생성
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

// store의 state의 변화를 감지(구독)
countStore.subscribe(onChange);

// dispatch => store의 action 호출
add.addEventListener("click", () => countStore.dispatch({ type: ADD }));
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));
