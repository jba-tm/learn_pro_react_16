import React from "react";

export class ValueInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldValue: 0
        }
    }

    handleChange = e => {
        this.setState({
                fieldValue: e.target.value
            },
            () => this.props.changeCallback(this.props.id, this.state.fieldValue)
        )
    }

    render() {
        return (
            <div className="form-group p-2">
                <label htmlFor="">Value #{this.props.id}</label>
                <input type="text"
                       className="form-control"
                       onChange={this.handleChange}
                       value={this.state.fieldValue}/>
            </div>
        );
    }
}