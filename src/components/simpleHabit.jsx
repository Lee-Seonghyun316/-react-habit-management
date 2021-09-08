import '../app.css';
import React, {useRef, useState, useCallback, useEffect} from 'react';
//React Hook
const SimpleHabit = () => {
    //useState : 리액트가 기억하고 있는 값 : 초기화 되지 않음.
    const [count, setCount] = useState(0);
    const spanRef = useRef();
    //useRef(): 한번 만들고 메모리 저장 후 재사용
    // const spanRef = createRef(); : 호출시마다 새로운 레퍼런스 생성

    const handleIncrement = useCallback(() => {
        setCount(count + 1);
    });
    //동일한 콜백함수 전달 

    useEffect(() => {
        console.log(`mounted & updated!: ${count}`);
    }, [count]);
    //mount & unmount 합친 것 , deps: []하면 맨처음에만 호출, [변경 시 호출되는 원하는 값]도 가능
    return (
        <li className="habit-container">
            <span ref={spanRef} className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button button-plus" onClick={handleIncrement}>
                <i className="fas fa-plus-circle"></i>
            </button>
        </li>
    );
};

export default SimpleHabit;