import React, {PureComponent} from 'react';

class ResetButton extends PureComponent {

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