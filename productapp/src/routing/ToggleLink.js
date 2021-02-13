// import React, {Component} from "react";
// import {Route} from "react-router-dom";
//
// export class ToggleLink extends Component {
//     handleClick = (history) => {
//         history.push(this.props.to);
//     }
//
//     // render() {
//     //     return <Route exact={this.props.exact}
//     //                   path={this.props.to}
//     //                   children={routeProps => {
//     //                       const baseClasses = this.props.className || "m-2 btn btn-block";
//     //                       const activeClass = this.props.activeClass || "btn-primary";
//     //                       const inActiveClass = this.props.inActiveClass || "btn-secondary"
//     //                       const combinedClasses =
//     //                           `${baseClasses} ${routeProps.match ? activeClass : inActiveClass}`
//     //                       return <Link to={this.props.to} className={combinedClasses}>
//     //                           {this.props.children}
//     //                       </Link>
//     //                   }}/>
//     // }
//
//     render() {
//         return <Route path={this.props.to} exact={this.props.exact}
//                       children={routeProps => {
//                           const baseClasses = this.props.className || "m-2 btn btn-block";
//                           const activeClass = this.props.activeClass || "btn-primary";
//                           const inActiveClass = this.props.inActiveClass || "btn-secondary"
//                           const combinedClasses =
//                               `${baseClasses} ${routeProps.match ? activeClass : inActiveClass}`
//                           return <button className={combinedClasses}
//                                          onClick={() => this.handleClick(routeProps.history)}>
//                               {this.props.children}
//                           </button>
//                       }}/>
//     }
// }

import React, {Component} from "react";
import {Route, Redirect} from "react-router-dom";

export class ToggleLink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doRedirect: false
        }
    }

    handleClick = () => {
        this.setState({doRedirect: true},
            () => this.setState({doRedirect: false}));
    }

    render() {
        return <Route path={this.props.to} exact={this.props.exact}
                      children={routeProps => {
                          const baseClasses = this.props.className || "m-2 btn btn-block";
                          const activeClass = this.props.activeClass || "btn-primary";
                          const inActiveClass = this.props.inActiveClass || "btn-secondary"
                          const combinedClasses =
                              `${baseClasses} ${routeProps.match ? activeClass : inActiveClass}`
                          return <React.Fragment>
                              {this.state.doRedirect && <Redirect to={this.props.to}/>}
                              <button className={combinedClasses} onClick={this.handleClick}>
                                  {this.props.children}
                              </button>
                          </React.Fragment>
                      }}/>
    }
}