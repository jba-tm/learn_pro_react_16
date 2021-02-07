import React from "react";

export const ForwardFormField = React.forwardRef((props, ref) =>
    <FormField { ...props } fieldRef={ ref } />
)

export class FormField extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            fieldValue:''
        }
    }

    handleChange =e=>{
        this.setState({fieldValue: e.target.value})
    }

    render() {
        return (
            <div className="form-group">
                <label htmlFor="">{this.props.label}</label>
                <input type="text"
                       value={this.state.fieldValue}
                       onChange={this.handleChange}
                       ref={this.props.fieldRef}
                       className="form-control"/>
            </div>
        );
    }

}