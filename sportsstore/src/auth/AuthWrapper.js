import React, { Component } from "react";
import { AuthContext } from "./AuthContext";

export const authWrapper = (WrappedComponent)=>
    class extends Component{
        render() {
            return (
                <AuthContext.Comsumer>
                    {context=><WrappedComponent {...this.props} {...context}/>}
                </AuthContext.Comsumer>
            );
        }
    }
