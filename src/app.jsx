import './app.css';
import Habits from "./components/habits";
import React, {Component} from 'react';
import Navbar from "./components/navbar";

class App extends Component {

    state = {
        habits: [
            {id: 1, name: 'Reading', count: 0},
            {id: 2, name: 'Pilates', count: 0},
            {id: 3, name: 'Web Development', count: 0},
        ],
    };

    handleIncrement = habit => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count++;
        this.setState({habits});
    };

    handleDecrement = habit => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        const count = habits[index].count - 1;
        habits[index].count = count < 0 ? 0 : count;
        this.setState({habits});
    };

    handleDelete = habit => {
        const habits = this.state.habits.filter(item => item.id !== habit.id);
        this.setState({habits});
    };

    handleAdd = name => {
        let habits = [...this.state.habits];
        const id = habits[habits.length - 1].id + 1;
        habits = [...habits, {id : id, name : name, count : 0,}];
        this.setState({habits});
        console.log(habits);
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
            </>
        );
    }
}


export default App;
