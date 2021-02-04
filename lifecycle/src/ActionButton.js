import React from "react";

export class ActionButton extends React.Component {
    render() {
        // console.log(`Render ActionButton (${this.props.text}) Component `);
        return (
            <button onClick={this.props.callback} className="btn btn-primary m-2">
                {this.props.text}
            </button>
        );
    }
}