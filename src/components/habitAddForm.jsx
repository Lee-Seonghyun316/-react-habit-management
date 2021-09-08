//rsi Tab : function component 만들기
import React, {memo} from 'react';
//momo : PureComponent와 같이 Props가 업데이트 되지 않으면 안에 있는 함수 호출하지 않음.

const HabitAddForm = memo(props => {
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = event => {
        //submit 했을 때, 리프레쉬 일어나지 않도록 처리
        event.preventDefault();
        //input.value 받아오기
        const name = inputRef.current.value;
        name && props.onAdd(name);
        formRef.current.reset();
    };

    return (
        <form ref={formRef} className="habit-add-form" onSubmit={onSubmit}>
            <input
                ref={inputRef}
                type="text"
                className="add-input"
                placeholder="Habit..."/>
            <button className="add-button">Add</button>
        </form>
    );
});
export default HabitAddForm;