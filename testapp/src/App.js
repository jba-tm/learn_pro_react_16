import React from "react";
import {Result} from "./Result";
import {ValueInput} from "./ValueInput";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title || "Simple Addition",
            fieldValues: [],
            total: 0,
        }
    }

    updateFieldValue = (id, value) => {
        let fieldValues = this.state.fieldValues
        fieldValues[id]=Number(value)
        this.setState({
            fieldValues: fieldValues
        })
    }

    updateTotal = () => {
        this.setState({
            total: this.state.fieldValues.reduce((total, val) => total += val, 0)
        })
    }

    render() {
        // throw new Error("something went wrong");
        return (
            <div className="m-2">
                <h5 className="bg-primary text-white text-center p-2">
                    {this.state.title}
                </h5>
                <Result result={this.state.total}/>
                <ValueInput id="1" changeCallback={this.updateFieldValue}/>
                <ValueInput id="2" changeCallback={this.updateFieldValue}/>
                <ValueInput id="3" changeCallback={this.updateFieldValue}/>
                <div className="text-center">
                    <button onClick={this.updateTotal} className="btn btn-primary">
                        Total
                    </button>
                </div>
            </div>
        );
    }

}

export default App;
