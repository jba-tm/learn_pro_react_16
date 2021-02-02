import React from "react";
import { ThemeButton } from "./ThemeButton";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Ready',
            theme: 'secondary',
            counter: 0,
        }
        this.handleEvent = this.handleEvent.bind(this)
        // this.handleEvent = this.handleCount.bind(this)
    }

    selectTheme = (newTheme) => {
        this.setState({
            theme: newTheme,
            message: `Theme: ${newTheme}`
        });
    }

    handleCount = (event) => {
        event.persist()
        this.setState({counter: this.state.counter + 1},
            () => this.setState({message: `${event.type}: ${this.state.counter}`}));
    }

    handleEvent(e) {
        if (e.type === "mousedown") {
            this.setState({message: "Down"});
        } else if (e.type === 'mouseenter') {
            this.setState({message: 'Mouse enter'})
        } else {
            this.setState({message: 'Up'});
        }
    }

    handleInfo = (event, newTheme) => {
        event.persist();
        this.setState({
            counter: this.state.counter + 1,
            theme: newTheme
        }, () => this.setState({ message: `${event.type}: ${this.state.counter}`}));
    }

    toggleCheckBox = (event) => {
        if (this.state.counter === 0) {
            event.preventDefault();
        }
    }

    handleClick= (event) => {
        console.log(`App: Type: ${event.type} `
            + `Target: ${event.target.tagName} `
            + `CurrentTarget: ${event.currentTarget.tagName}`);
    }

    render() {
        return (
            <div className="m-2"  onClick={ this.handleClick }>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox"
                           onClick={ this.toggleCheckBox }/>
                    <label>This is a checkbox</label>
                </div>
                <div className="h4 bg-primary text-white text-center p-2">
                    {this.state.message}
                </div>
                <div className="text-center">
                    <button className="btn btn-primary"
                            onMouseEnter={this.handleEvent}
                            onMouseDown={this.handleEvent}
                            onMouseUp={this.handleEvent}>
                        Click Me
                    </button>

                </div>
                <div className="text-center m-2">

                    <button className="btn btn-primary"
                            onClick={this.handleCount}>
                        Click Me
                    </button>
                </div>
                <div className={`h4 bg-${this.state.theme} text-white text-center p-2`}>
                    {this.state.message}
                </div>
                <div className="text-center">
                    <button className="btn btn-primary"
                            onClick={e=>this.handleInfo(e, "primary")}>
                        Normal
                    </button>
                    <button className="btn btn-danger m-1"
                            onClick={e=>this.handleInfo(e, 'danger')}>
                        Danger
                    </button>
                </div>
                <div className="m-2"  onClick={ this.handleClick }>
                    <ThemeButton theme="primary" callback={ this.selectTheme } />
                    <ThemeButton theme="danger" callback={ this.selectTheme } />
                </div>
            </div>
        );
    }
}


export default App;
