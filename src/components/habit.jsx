import React, {Component} from 'react';
//rcc + tab
class Habit extends Component {
    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    }

    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    }

    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    }

    render() {
        const {name, count} = this.props.habit;
        return (
            <li className="habit-container">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button button-plus" onClick={this.handleIncrement}>
                    <i className="fas fa-plus-circle"></i>
                </button>
                <button className="habit-button button-minus" onClick={this.handleDecrement}>
                    <i className="fas fa-minus-circle"></i>
                </button>
                <button className="habit-button button-trash" onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;