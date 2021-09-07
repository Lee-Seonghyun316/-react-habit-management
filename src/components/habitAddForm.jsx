import React, {Component} from 'react';

class HabitAddForm extends Component {
    //Dom 요소 조작
    inputRef = React.createRef();

    onSubmit = event => {
        //submit 했을 때, 리프레쉬 일어나지 않도록 처리
        event.preventDefault();
        //input.value 받아오기
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
    };

    render() {
        return (
            <form className="add-form" onSubmit={this.onSubmit}>
                <input
                    ref={this.inputRef}
                    type="text"
                    className="add-input"
                    placeholder="Habit"/>
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAddForm;