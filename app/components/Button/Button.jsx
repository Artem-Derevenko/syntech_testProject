import React, { Component } from 'react';

class Button extends Component {
    render() {
        const { className, event, eventName } = this.props;

        return (
            <button type="button"
                className={className}
                onClick={event}
            >
                {eventName}
            </button>
        )
    }
}

export default Button;