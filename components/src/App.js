import React, {useState} from "react";
import {Summary} from "./Summary";
import ReactDOM from "react-dom";


// function reverseNames() {
//     names.reverse();
//     ReactDOM.render(<App />, document.getElementById('root'));
// }
//
// function promoteName(name) {
//     names = [name, ...names.filter(val => val !== name)];
//     ReactDOM.render(<App />, document.getElementById('root'));
// }

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            names: ["Bob", "Alice", "Dora"]
        }
        this.incrementCounter = this.incrementCounter.bind(this)
        this.reverseNames = this.reverseNames.bind(this)
        this.promoteName = this.promoteName.bind(this)
    }

    incrementCounter(increment) {
        this.setState({
            counter: this.state.counter + increment
        })
    }

    reverseNames() {
        this.setState({
            names: this.state.names.reverse()
        })
    }

    promoteName(name) {
        this.setState({
            names: [name, ...this.state.names.filter(val=>val!==name)]
        })
    }

    render() {

        return (

            <table className="table table-sm table-striped">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Letters</th>
                </tr>
                </thead>
                <tbody>
                {this.state.names.map((name, index) =>
                    <tr key={name}>
                        <Summary index={index} name={name}
                                 reverseCallback={this.reverseNames}
                                 promoteCallback={this.promoteName}
                                 counter={this.state.counter}
                                 incrementCallback={this.incrementCounter}
                        />
                    </tr>
                )}
                </tbody>
            </table>
        );
    }

}

// export default function App() {
//     const [counter, setCounter] = useState(0);
//
//     const incrementCounter = (increment) => setCounter(counter + increment);
//
//     return (
//         <table className="table table-sm table-striped">
//             <thead>
//             <tr><th>#</th><th>Name</th><th>Letters</th></tr>
//             </thead>
//             <tbody>
//             { names.map((name, index) =>
//                 <tr key={ name }>
//                     <Summary index={index} name={name}
//                              reverseCallback={reverseNames}
//                              promoteCallback={promoteName}
//                              counter={ counter }
//                              incrementCallback={ incrementCounter }
//                     />
//                 </tr>
//             )}
//             </tbody>
//         </table>
//     )
// }
