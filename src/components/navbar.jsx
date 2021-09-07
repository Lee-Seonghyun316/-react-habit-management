import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-container">
                <i className="fas fa-heartbeat"></i>
                <span className="habits-title">Habit Management</span>
                <span className="habits-count">{this.props.habitsCount}</span>
            </div>
        );
    }
}

export default Navbar;