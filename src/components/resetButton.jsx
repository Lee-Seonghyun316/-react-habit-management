import React, {Component} from 'react';

class ResetButton extends Component {

    handleReset = () => {
        this.props.onReset();
    };

    render() {
        return (
            <div className="reset-button-container">
                <button className="reset-button" onClick={this.handleReset}>
                    Reset Count
                </button>
            </div>
        );
    }
}

export default ResetButton;