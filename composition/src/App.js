import React from "react";
// import {Message} from "./Message";
// import {ActionButton} from "./ActionButton";
// import {ThemeSelector} from "./ThemeSelector";
// import {GeneralList} from "./GeneralList";
import {SortedList} from "./SortedList";
// import {ProFeature} from "./ProFeature";
// import {ProController} from "./ProController";
// import {LogToConsole} from "./LogToConsole";
//
// const ProList = ProController(LogToConsole(SortedList, "Sorted", true, true, true));
import {ProModeContext} from './ProModeContext';
import {ProModeToggle} from './ProModeToggle';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // counter: 0
            names: ["Zoe", "Bob", "Alice", "Dora", "Joe"],

            cities: ["London", "New York", "Paris", "Milan", "Boston"],
            // proMode: false,
            proContextData: {
                proMode: false,
                toggleProMode: this.toggleProMode,
            },
            superProContextData: {
                proMode: false,
                toggleProMode: this.toggleSuperMode
            }
        }
    }

    toggleProMode = () => {
        this.setState({
            proContextData: {
                proMode: !this.state.proContextData.proMode,
                toggleProMode: this.toggleProMode
            }
        });

        // this.setState(state => state.proContextData.proMode
        //     = !state.proContextData.proMode);
    }

    toggleSuperMode = () => {
        this.setState({
            superProContextData: {
                proMode: !this.state.superProContextData.proMode,

                toggleProMode: this.toggleSuperMode
            }
        })
        // this.setState(state => state.superProContextData.proMode
        //     = !state.superProContextData.proMode);
    }

    // toggleProMode = () => {
    //     this.setState({proMode: !this.state.proMode});
    // }


    // incrementCounter = () => {
    //     this.setState({counter: this.state.counter + 1})
    // }

    // render() {
    //     return (
    //         <div className="m-2 text-center">
    //             <ThemeSelector>
    //                 <Message theme="primary"
    //                          message={ `Counter: ${this.state.counter}`} />
    //                 <ActionButton theme="secondary"
    //                               text="Increment" callback={ this.incrementCounter } />
    //             </ThemeSelector>
    //         </div>
    //     );
    // }

    // render() {
    //     return (
    //         <div className="container-fluid">
    //             <div className="row">
    //                 <div className="col-6">
    //                     <GeneralList list={this.state.names} theme="primary"/>
    //                 </div>
    //                 <div className="col-6">
    //                     <SortedList list={this.state.names}/>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }

    // render() {
    //     return (
    //         <div className="container-fluid">
    //             <div className="row">
    //                 <div className="col-3">
    //                     <GeneralList list={this.state.names} theme="primary"/>
    //                 </div>
    //                 <div className="col-3">
    //                     <ProList list={this.state.names}/>
    //
    //                 </div>
    //                 <div className="col-3">
    //                     <GeneralList list={this.state.cities} theme="secondary"/>
    //                 </div>
    //                 <div className="col-3">
    //                     <ProList list={this.state.cities}/>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }

    // render() {
    //     return (
    //         <div className="container-fluid">
    //             <div className="row">
    //                 <div className="col-12 text-center p-2">
    //                     <div className="form-check">
    //                         <input type="checkbox" className="form-check-input"
    //                                value={this.state.proMode}
    //                                onChange={this.toggleProMode}/>
    //                         <label className="form-check-label">Pro Mode</label>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="row">
    //                 <div className="col-6">
    //                     <GeneralList list={this.state.names}
    //                                  theme="primary"/>
    //                 </div>
    //                 <div className="col-6">
    //                     <ProFeature pro={this.state.proMode}
    //                                 render={text =>
    //                                     <React.Fragment>
    //                                         <h4 className="text-center">{text}</h4>
    //                                         <SortedList list={this.state.names}/>
    //                                     </React.Fragment>
    //                                 }/>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }


    // render() {
    //     return (
    //         <div className="container-fluid">
    //             <div className="row">
    //                 <div className="col-12 text-center p-2">
    //                     <div className="form-check">
    //                         <input type="checkbox" className="form-check-input"
    //                                value={this.state.proMode}
    //                                onChange={this.toggleProMode}/>
    //                         <label className="form-check-label">Pro Mode</label>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="row">
    //                 <div className="col-6">
    //                     <GeneralList list={this.state.names}
    //                                  theme="primary"/>
    //                 </div>
    //                 <div className="col-6">
    //                     <SortedList proMode={this.state.proMode}
    //                                 list={this.state.names}/>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }

    // render() {
    //     return (
    //         <div className="container-fluid">
    //             <div className="row">
    //                 <div className="col-12 text-center p-2">
    //                     <div className="form-check">
    //                         <input type="checkbox" className="form-check-input"
    //                                value={this.state.proContextData.proMode}
    //                                onChange={this.toggleProMode}/>
    //                         <label className="form-check-label">Pro Mode</label>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="row">
    //                 <div className="col-6">
    //                     <GeneralList list={this.state.names}
    //                                  theme="primary"/>
    //                 </div>
    //                 <div className="col-6">
    //                     <ProModeContext.Provider value={this.state.proContextData}>
    //                         <SortedList list={this.state.names}/>
    //                     </ProModeContext.Provider>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }

    // render() {
    //     return (
    //         <div className="container-fluid">
    //             <ProModeContext.Provider value={this.state.proContextData}>
    //                 <div className="row">
    //                     <div className="col-12 text-center p-2">
    //                         <ProModeToggle label="Pro Mode"/>
    //                     </div>
    //                 </div>
    //                 <div className="row">
    //                     <div className="col-6">
    //                         <GeneralList list={this.state.names}
    //                                      theme="primary"/>
    //                     </div>
    //                     <div className="col-6">
    //                         <SortedList list={this.state.names}/>
    //                     </div>
    //                 </div>
    //             </ProModeContext.Provider>
    //         </div>
    //     )
    // }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 text-center p-2">
                        <ProModeContext.Provider value={this.state.proContextData}>
                            <ProModeToggle label="Pro Mode"/>
                        </ProModeContext.Provider>
                    </div>
                    <div className="col-6 text-center p-2">
                        <ProModeContext.Provider
                            value={this.state.superProContextData}>
                            <ProModeToggle label="Super Pro Mode"/>
                        </ProModeContext.Provider>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <ProModeContext.Provider value={this.state.proContextData}>
                            <SortedList list={this.state.names}/>
                        </ProModeContext.Provider>
                    </div>
                    <div className="col-6">
                        <ProModeContext.Provider
                            value={this.state.superProContextData}>
                            <SortedList list={this.state.cities}/>
                        </ProModeContext.Provider>
                    </div>
                </div>
            </div>
        )
    }

}

export default App;
