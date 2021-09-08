import './app.css';
import Habits from "./components/habits";
import React, {Component} from 'react';
import Navbar from "./components/navbar";
import ResetButton from "./components/resetButton";

class App extends Component {

    state = {
        habits: [
            {id: 1, name: 'Reading', count: 0},
            {id: 2, name: 'Pilates', count: 0},
            {id: 3, name: 'Web Development', count: 0},
        ],
    };

    handleIncrement = habit => {
        //성능 개선 이전
        // const habits = [...this.state.habits];
        // const index = habits.indexOf(habit);
        // habits[index].count++;

        //성능 개선 이후 : 새로운 객체로 반환 -> PureComponent에 반영
        const habits = this.state.habits.map(item => {
            if(item.id === habit.id){
                return {...habit, count: habit.count + 1};
            }
            return  item;
        });
        this.setState({habits});
    };

    handleDecrement = habit => {
        const habits = this.state.habits.map(item => {
            if(item.id === habit.id){
                const count = habit.count - 1;
                return {...habit, count : count < 0 ? 0 : count };
            }
            return  item;
        });
        this.setState({habits});
    };

    handleDelete = habit => {
        const habits = this.state.habits.filter(item => item.id !== habit.id);
        this.setState({habits});
    };

    handleAdd = name => {
        let habits = [...this.state.habits];
        const id = habits.length > 0 ? habits[habits.length - 1].id + 1 : 1;
        habits = [...habits, {id: id, name: name, count: 0,}];
        this.setState({habits});
    };

    handleReset = () => {
        //성능 개선 이전
        // const habits = this.state.habits.map(habit => {
        //         habit.count  = 0;
        //         return habit;
        //     });
        
        //성능 개선 이후
        const habits = this.state.habits.map(habit => {
            if (habit.count !== 0){
                return {...habit, count:0};
            }
            return habit;
        });
        this.setState({habits});
    };

    render() {
        return (
            <>
                <Navbar habitsCount={this.state.habits.filter(item => item.count > 0).length}/>
                <Habits
                    habits={this.state.habits}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                    onAdd={this.handleAdd}
                >
                </Habits>
                <ResetButton
                    onReset={this.handleReset}
                />
            </>
        );
    }
}


export default App;
