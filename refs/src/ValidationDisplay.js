import React from "react";

export class ValidationDisplay extends React.Component {
    render() {
        return (
            this.props.errors ? this.props.errors.map(err =>
                    <div key={err} className="small bg-danger text-white mt-1 p-1">
                        {err}
                    </div>)
                : null
        );
    }
}