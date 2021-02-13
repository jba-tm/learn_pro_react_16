// // import React from "react";
// // import {
// //     BrowserRouter as Router,
// //     // NavLink,
// //     // Link,
// //     Route, Switch, Redirect,
// //     withRouter,
// //     Prompt
// // } from "react-router-dom";
// // import {ProductDisplay} from "./ProductDisplay";
// // import {SupplierDisplay} from "./SupplierDisplay";
// // import {RouteInfo} from "./routing/RouteInfo";
// // import {ToggleLink} from "./routing/ToggleLink";
// // import {CustomPrompt} from "./routing/CustomPrompt";
// //
// // const RouteInfoHOC = withRouter(RouteInfo)
// //
// // export class Selector extends React.Component {
// //     // constructor(props) {
// //     //     super(props);
// //     //     this.state = {
// //     //         selection: React.Children.toArray(props.children)[0].props.name
// //     //     }
// //     // }
// //     //
// //     // setSelection = e => {
// //     //     this.setState({selection: e.target.name})
// //     // }
// //
// //     // render() {
// //     //     return (
// //     //         <div className="container-fluid">
// //     //             <div className="row">
// //     //                 <div className="col-2">
// //     //                     {React.Children.map(this.props.children, c => (
// //     //                         <button name={c.props.name}
// //     //                                 onClick={this.setSelection}
// //     //                                 className={`btn btn-block m-2 ${this.state.selection === c.props.name
// //     //                                     ? "btn-primary active" : "btn-secondary"}`}>
// //     //                             {c.props.name}
// //     //                         </button>
// //     //                     ))}
// //     //                 </div>
// //     //                 <div className="col">
// //     //                     {React.Children.toArray(this.props.children).filter(c => c.props.name === this.state.selection)}
// //     //                 </div>
// //     //             </div>
// //     //         </div>
// //     //     );
// //     // }
// //
// //     // render() {
// //     //     return (
// //     //         <Router>
// //     //             <div className="container-fluid">
// //     //                 <div className="row">
// //     //                     <div className="col-12">
// //     //                         <div><Link to="/products">Products</Link></div>
// //     //                         <div><Link to="/suppliers">Suppliers</Link></div>
// //     //                     </div>
// //     //                     <div className="col">
// //     //                         <Route path="/products" component={ProductDisplay}/>
// //     //                         <Route path="/suppliers" component={SupplierDisplay}/>
// //     //                     </div>
// //     //                 </div>
// //     //             </div>
// //     //
// //     //         </Router>
// //     //     );
// //     // }
// //
// //     //
// //     // render() {
// //     //     return (
// //     //         <Router>
// //     //             <div className="container-fluid">
// //     //                 <div className="row">
// //     //                     <div className="col-12">
// //     //                         <div><Link to="/products">Products</Link></div>
// //     //                         <div><Link to="/suppliers">Suppliers</Link></div>
// //     //                     </div>
// //     //                     <div className="col">
// //     //                         <Route path="/products" render={routeProps =>
// //     //                             <ProductDisplay myProp="myValue"/>
// //     //                         }/>
// //     //                         <Route path="/suppliers" render={routeProps =>
// //     //                             <>
// //     //                                 <h4 className="bg-info text-center text-white p-2">
// //     //                                     Suppliers
// //     //                                 </h4>
// //     //                                 <SupplierDisplay/>
// //     //                             </>
// //     //                         }/>
// //     //                     </div>
// //     //                 </div>
// //     //             </div>
// //     //
// //     //         </Router>
// //     //     );
// //     // }
// //
// //     // renderMessage = msg => <h5 className="bg-info text-white m-2 p-2">{msg}</h5>
// //
// //     // render() {
// //     //     return (
// //     //         <Router>
// //     //             <div className="container-fluid">
// //     //                 <div className="row">
// //     //                     <div className="col-2">
// //     //                         <div><Link to="/data">Data</Link></div>
// //     //                         <div><Link to="/data/one">Link #1</Link></div>
// //     //                         <div><Link to="/data/two">Link #2</Link></div>
// //     //                         <div><Link to="/people/bob">Bob</Link></div>
// //     //                     </div>
// //     //                     <div className="col">
// //     //                         <Route path="/data/" exact={true}
// //     //                                render={ () => this.renderMessage("Route #1") } />
// //     //                         <Route path="/data/two"
// //     //                                render={ () => this.renderMessage("Route #2") } />
// //     //                     </div>
// //     //                 </div>
// //     //             </div>
// //     //         </Router>
// //     //     );
// //     // }
// //
// //     // render() {
// //     //     return <Router>
// //     //         <div className="container-fluid">
// //     //             <div className="row">
// //     //                 <div className="col-2">
// //     //                     <div><Link to="/data">Data</Link></div>
// //     //                     <div><Link to="/data/one">Link #1</Link></div>
// //     //                     <div><Link to="/data/two">Link #2</Link></div>
// //     //                     <div><Link to="/data/three">Link #3</Link></div>
// //     //                     <div><Link to="/people/bob">Bob</Link></div>
// //     //                     <div><Link to="/people/alice">Alice</Link></div>
// //     //                 </div>
// //     //                 <div className="col">
// //     //                     {/*<Route path={["/data/one", "/people/bob" ] } exact={ true }*/}
// //     //                     {/*       render={ () => this.renderMessage("Route #1") } />*/}
// //     //                     {/*<Route path={["/data", "/people" ] }*/}
// //     //                     {/*       render={ () => this.renderMessage("Route #2") } />*/}
// //     //                     <Route path={["/data/(one|three)", "/people/b*" ] }
// //     //                            render={ () => this.renderMessage("Route #1") } />
// //     //                 </div>
// //     //             </div>
// //     //         </div>
// //     //     </Router>
// //     // }
// //
// //     // render() {
// //     //     return (
// //     //         <Router>
// //     //             <div className="container-fluid">
// //     //                 <div className="row">
// //     //                     <div className="col-2">
// //     //                         <div><Link to="/">Default URL</Link></div>
// //     //                         <div><Link to="/products">Products</Link></div>
// //     //                         <div><Link to="/suppliers">Suppliers</Link></div>
// //     //                         <div><Link to="/old/data">Old Link</Link></div>
// //     //                     </div>
// //     //                     <div className="col">
// //     //                         <Switch>
// //     //                             <Route path="/products" component={ProductDisplay}/>
// //     //                             <Route path="/suppliers" component={SupplierDisplay}/>
// //     //                             <Route render={() =>
// //     //                                 this.renderMessage("Fallback Route")}/>
// //     //                         </Switch>
// //     //                     </div>
// //     //                 </div>
// //     //             </div>
// //     //         </Router>
// //     //     )
// //     // }
// //
// //     // render() {
// //     //     return <Router>
// //     //         <div className="container-fluid">
// //     //             <div className="row">
// //     //                 <div className="col-2">
// //     //                     <div><Link to="/">Default URL</Link></div>
// //     //                     <div><Link to="/products">Products</Link></div>
// //     //                     <div><Link to="/suppliers">Suppliers</Link></div>
// //     //                     <div><Link to="/old/data">Old Link</Link></div>
// //     //                 </div>
// //     //                 <div className="col">
// //     //                     <Switch>
// //     //                         <Route path="/products" component={ProductDisplay}/>
// //     //                         <Route path="/suppliers" component={SupplierDisplay}/>
// //     //                         <Redirect from="/old/data" to="/suppliers"/>
// //     //                         <Redirect to="/products"/>
// //     //                     </Switch>
// //     //                 </div>
// //     //             </div>
// //     //         </div>
// //     //     </Router>
// //     // }
// //
// //     // render() {
// //     //     return <Router>
// //     //         <div className="container-fluid">
// //     //             <div className="row">
// //     //                 <div className="col-2">
// //     //                     <Link className="m-2 btn btn-block btn-primary"
// //     //                           to="/">Default URL</Link>
// //     //                     <Link className="m-2 btn btn-block btn-primary"
// //     //                           to="/products">Products</Link>
// //     //                     <Link className="m-2 btn btn-block btn-primary"
// //     //                           to="/suppliers">Suppliers</Link>
// //     //                     <Link className="m-2 btn btn-block btn-primary"
// //     //                           to="/old/data">Old Link</Link>
// //     //                 </div>
// //     //                 <div className="col">
// //     //                     <Switch>
// //     //                         <Route path="/products" component={ProductDisplay}/>
// //     //                         <Route path="/suppliers" component={SupplierDisplay}/>
// //     //                         <Redirect from="/old/data" to="/suppliers"/>
// //     //                         <Redirect to="/products"/>
// //     //                     </Switch>
// //     //                 </div>
// //     //             </div>
// //     //         </div>
// //     //     </Router>
// //     // }
// //
// //     // render() {
// //     //     return <Router>
// //     //         <div className="container-fluid">
// //     //             <div className="row">
// //     //                 <div className="col-2">
// //     //                     <NavLink className="m-2 btn btn-block btn-primary"
// //     //                              activeClassName="active" exact={true}
// //     //                              to="/">Default URL</NavLink>
// //     //                     <NavLink className="m-2 btn btn-block btn-primary"
// //     //                              activeClassName="active"
// //     //                              to="/products">Products</NavLink>
// //     //                     <NavLink className="m-2 btn btn-block btn-primary"
// //     //                              activeClassName="active"
// //     //                              to="/suppliers">Suppliers</NavLink>
// //     //                     <NavLink className="m-2 btn btn-block btn-primary"
// //     //                              activeClassName="active"
// //     //                              to="/old/data">Old Link</NavLink>
// //     //                 </div>
// //     //                 <div className="col">
// //     //                     <Switch>
// //     //                         <Route path="/products" component={ProductDisplay}/>
// //     //                         <Route path="/suppliers" component={SupplierDisplay}/>
// //     //                         <Redirect from="/old/data" to="/suppliers"/>
// //     //                         <Redirect to="/products"/>
// //     //                     </Switch>
// //     //                 </div>
// //     //             </div>
// //     //         </div>
// //     //     </Router>
// //     // }
// //
// //     // render() {
// //     //     return <Router>
// //     //         <div className="container-fluid">
// //     //             <div className="row">
// //     //                 <div className="col-2">
// //     //                     <NavLink className="m-2 btn btn-block btn-primary"
// //     //                              activeClassName="active"
// //     //                              to="/products">Products</NavLink>
// //     //                     <NavLink className="m-2 btn btn-block btn-primary"
// //     //                              activeClassName="active"
// //     //                              to="/suppliers">Suppliers</NavLink>
// //     //                     <NavLink className="m-2 btn btn-block btn-primary"
// //     //                              activeClassName="active" to="/info">Route Info</NavLink>
// //     //                 </div>
// //     //                 <div className="col">
// //     //                     <Switch>
// //     //                         <Route path="/products" component={ProductDisplay}/>
// //     //                         <Route path="/suppliers" component={SupplierDisplay}/>
// //     //                         <Route path="/info" component={ RouteInfo } />
// //     //                         <Redirect to="/products"/>
// //     //                     </Switch>
// //     //                 </div>
// //     //             </div>
// //     //         </div>
// //     //     </Router>
// //     // }
// //
// //     // render() {
// //     //     return <Router>
// //     //         <div className="container-fluid">
// //     //             <div className="row">
// //     //                 <div className="col-2">
// //     //                     <NavLink className="m-2 btn btn-block btn-primary"
// //     //                              activeClassName="active"
// //     //                              to="/products">Products</NavLink>
// //     //                     <NavLink className="m-2 btn btn-block btn-primary"
// //     //                              activeClassName="active"
// //     //                              to="/suppliers">Suppliers</NavLink>
// //     //                     <NavLink className="m-2 btn btn-block btn-primary"
// //     //                              activeClassName="active"
// //     //                              to="/info/match">Match</NavLink>
// //     //                     <NavLink className="m-2 btn btn-block btn-primary"
// //     //                              activeClassName="active"
// //     //                              to="/info/location">Location</NavLink>
// //     //                 </div>
// //     //                 <div className="col">
// //     //                     <Switch>
// //     //                         <Route path="/products" component={ ProductDisplay} />
// //     //                         <Route path="/suppliers" component={ SupplierDisplay } />
// //     //                         <Route path="/info/:datatype" component={ RouteInfo } />
// //     //                         <Redirect to="/products" />
// //     //                     </Switch>
// //     //                 </div>
// //     //             </div>
// //     //         </div>
// //     //     </Router>
// //     // }
// //
// //     // render() {
// //     //     return <Router>
// //     //         <div className="container-fluid">
// //     //             <div className="row">
// //     //                 <div className="col-2">
// //     //                     <NavLink className="m-2 btn btn-block btn-primary"
// //     //                              activeClassName="active"
// //     //                              to="/products">Products</NavLink>
// //     //                     <NavLink className="m-2 btn btn-block btn-primary"
// //     //                              activeClassName="active"
// //     //                              to="/suppliers">Suppliers</NavLink>
// //     //                     <NavLink className="m-2 btn btn-block btn-primary"
// //     //                              activeClassName="active"
// //     //                              to="/info/match">Match</NavLink>
// //     //                     <NavLink className="m-2 btn btn-block btn-primary"
// //     //                              activeClassName="active"
// //     //                              to="/info/location">Location</NavLink>
// //     //                     <NavLink className="m-2 btn btn-block btn-primary"
// //     //                              activeClassName="active" to="/info">All Info</NavLink>
// //     //                 </div>
// //     //                 <div className="col">
// //     //                     <Switch>
// //     //                         <Route path="/products" component={ ProductDisplay} />
// //     //                         <Route path="/suppliers" component={ SupplierDisplay } />
// //     //                         <Route path="/info/:datatype?" component={ RouteInfo } />
// //     //                         <Redirect to="/products" />
// //     //                     </Switch>
// //     //                 </div>
// //     //             </div>
// //     //         </div>
// //     //     </Router>
// //     // }
// //
// //     // render() {
// //     //     return <Router>
// //     //         <div className="container-fluid">
// //     //             <div className="row">
// //     //                 <div className="col-2">
// //     //                     <ToggleLink to="/products">Products</ToggleLink>
// //     //                     <ToggleLink to="/suppliers">Suppliers</ToggleLink>
// //     //                     <ToggleLink to="/info/match">Match</ToggleLink>
// //     //                     <ToggleLink to="/info/location">Location</ToggleLink>
// //     //                     <ToggleLink to="/info" exact={ true }>All Info</ToggleLink>
// //     //                 </div>
// //     //                 <div className="col">
// //     //                     <Switch>
// //     //                         <Route path="/products" component={ ProductDisplay} />
// //     //                         <Route path="/suppliers" component={ SupplierDisplay } />
// //     //                         <Route path="/info/:datatype?" component={ RouteInfo } />
// //     //                         <Redirect to="/products" />
// //     //                     </Switch>
// //     //                 </div>
// //     //             </div>
// //     //         </div>
// //     //     </Router>
// //     // }
// //
// //     // render() {
// //     //     return <Router>
// //     //         <div className="container-fluid">
// //     //             <div className="row">
// //     //                 <div className="col-2">
// //     //                     <ToggleLink to="/products">Products</ToggleLink>
// //     //                     <ToggleLink to="/suppliers">Suppliers</ToggleLink>
// //     //                     <ToggleLink to="/info/match">Match</ToggleLink>
// //     //                     <ToggleLink to="/info/location">Location</ToggleLink>
// //     //                     <ToggleLink to="/info" exact={true}>All Info</ToggleLink>
// //     //                 </div>
// //     //                 <div className="col">
// //     //                     <RouteInfoHOC/>
// //     //                     <Switch>
// //     //                         <Route path="/products" component={ProductDisplay}/>
// //     //                         <Route path="/suppliers" component={SupplierDisplay}/>
// //     //                         <Route path="/info/:datatype?" component={RouteInfo}/>
// //     //                         <Redirect to="/products"/>
// //     //                     </Switch>
// //     //                 </div>
// //     //             </div>
// //     //         </div>
// //     //     </Router>
// //     // }
// //
// //     // render() {
// //     //     return <Router>
// //     //         <div className="container-fluid">
// //     //             <div className="row">
// //     //                 <div className="col-2">
// //     //                     <ToggleLink to="/products">Products</ToggleLink>
// //     //                     <ToggleLink to="/suppliers">Suppliers</ToggleLink>
// //     //                     <ToggleLink to="/info/match">Match</ToggleLink>
// //     //                     <ToggleLink to="/info/location">Location</ToggleLink>
// //     //                     <ToggleLink to="/info" exact={true}>All Info</ToggleLink>
// //     //                 </div>
// //     //                 <div className="col">
// //     //                     <Prompt message={loc =>
// //     //                         `Do you want to navigate to ${loc.pathname}`}/>
// //     //                     <RouteInfoHOC/>
// //     //                     <Switch>
// //     //                         <Route path="/products" component={ProductDisplay}/>
// //     //                         <Route path="/suppliers" component={SupplierDisplay}/>
// //     //                         <Route path="/info/:datatype?" component={RouteInfo}/>
// //     //                         <Redirect to="/products"/>
// //     //                     </Switch>
// //     //                 </div>
// //     //             </div>
// //     //         </div>
// //     //     </Router>
// //     // }
// //
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             showPrompt: false,
// //             message: "",
// //             callback: () => {
// //             }
// //         }
// //     }
// //
// //     customGetUserConfirmation = (message, navCallback) => {
// //         this.setState({
// //             showPrompt: true, message: message,
// //             callback: (allow) => {
// //                 navCallback(allow);
// //                 this.setState({showPrompt: false})
// //             }
// //         });
// //     }
// //
// //     render() {
// //         return <Router getUserConfirmation={this.customGetUserConfirmation}>
// //             <div className="container-fluid">
// //                 <div className="row">
// //                     <div className="col-2">
// //                         <ToggleLink to="/products">Products</ToggleLink>
// //                         <ToggleLink to="/suppliers">Suppliers</ToggleLink>
// //                         <ToggleLink to="/info/match">Match</ToggleLink>
// //                         <ToggleLink to="/info/location">Location</ToggleLink>
// //                         <ToggleLink to="/info" exact={true}>All Info</ToggleLink>
// //                     </div>
// //                     <div className="col">
// //                         <CustomPrompt show={this.state.showPrompt}
// //                                       message={this.state.message}
// //                                       callback={this.state.callback}/>
// //                         <Prompt message={loc =>
// //                             `Do you want to navigate to ${loc.pathname}?`}/>
// //                         <RouteInfoHOC/>
// //                         <Switch>
// //                             <Route path="/products" component={ProductDisplay}/>
// //                             <Route path="/suppliers" component={SupplierDisplay}/>
// //                             <Route path="/info/:datatype?" component={RouteInfo}/>
// //                             <Redirect to="/products"/>
// //                         </Switch>
// //                     </div>
// //                 </div>
// //             </div>
// //         </Router>
// //     }
// // }
//
// import React, {Component} from "react";
// import {BrowserRouter as Router, Route, Switch, Redirect, Prompt}
//     from "react-router-dom";
// // import { ProductDisplay } from "./ProductDisplay";
// // import { SupplierDisplay } from "./SupplierDisplay";
// //import { RouteInfo } from "./routing/RouteInfo";
// import {ToggleLink} from "./routing/ToggleLink";
// import {CustomPrompt} from "./routing/CustomPrompt";
//
// //const RouteInfoHOC = withRouter(RouteInfo)
// export class Selector extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             showPrompt: false,
//             message: "",
//             callback: () => {
//             }
//         }
//     }
//
//     customGetUserConfirmation = (message, navCallback) => {
//         this.setState({
//             showPrompt: true, message: message,
//             callback: (allow) => {
//                 navCallback(allow);
//                 this.setState({showPrompt: false})
//             }
//         });
//     }
//
//     render() {
//         const routes = React.Children.map(this.props.children, child => ({
//             component: child,
//             name: child.props.name,
//             url: `/${child.props.name.toLowerCase()}`
//         }));
//         return <Router getUserConfirmation={this.customGetUserConfirmation}>
//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-2">
//                         {routes.map(r => <ToggleLink key={r.url} to={r.url}>
//                             {r.name}
//                         </ToggleLink>)}
//                     </div>
//                     <div className="col">
//                         <CustomPrompt show={this.state.showPrompt}
//                                       message={this.state.message}
//                                       callback={this.state.callback}/>
//                         <Prompt message={loc =>
//                             `Do you want to navigate to ${loc.pathname}?`}/>
//                         <Switch>
//                             {routes.map(r => <Route key={r.url} path={r.url}
//                                                     render={() => r.component}/>)}
//                             <Redirect to={routes[0].url}/>
//                         </Switch>
//                     </div>
//                 </div>
//             </div>
//         </Router>
//     }
// }


import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Redirect}
    from "react-router-dom";
import {ToggleLink} from "./routing/ToggleLink";
//import { CustomPrompt } from "./routing/CustomPrompt";
import {RoutedDisplay} from "./routing/RoutedDisplay";

export class Selector extends Component {
    render() {
        const routes = React.Children.map(this.props.children, child => ({
            component: child,
            name: child.props.name,
            url: `/${child.props.name.toLowerCase()}`,
            datatype: child.props.datatype
        }));
        return <Router getUserConfirmation={this.customGetUserConfirmation}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        {routes.map(r => <ToggleLink key={r.url} to={r.url}>
                            {r.name}
                        </ToggleLink>)}
                    </div>
                    <div className="col">
                        <Switch>
                            {routes.map(r =>
                                <Route key={r.url}
                                       path={`/:datatype(${r.datatype})/:mode?/:id?`}
                                       component={RoutedDisplay(r.datatype)}/>
                            )}
                            <Redirect to={routes[0].url}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    }
}