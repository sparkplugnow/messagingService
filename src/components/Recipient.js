import React, { Component } from 'react';

class Recipient extends Component {
    render() {
        return (
            <div>
                <ul className="list-group">
                    <a className="list-group-item">
                        {this.props.fullName}
                    </a>
                </ul>
            </div>
        );
    }
}

export default Recipient;