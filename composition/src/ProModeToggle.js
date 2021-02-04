// import React, {Component} from "react";
// import {ProModeContext} from "./ProModeContext";
//
// // export class ProModeToggle extends Component {
// //     render() {
// //         return <ProModeContext.Consumer>
// //             {contextData => (
// //                 <div className="form-check">
// //                     <input type="checkbox" className="form-check-input"
// //                            value={contextData.proMode}
// //                            onChange={contextData.toggleProMode}/>
// //                     <label className="form-check-label">
// //                         {this.props.label}
// //                     </label>
// //                 </div>
// //             )
// //             }
// //         </ProModeContext.Consumer>
// //     }
// // }
//
// export class ProModeToggle extends Component {
//     static contextType = ProModeContext;
//     render() {
//         return (
//             <div className="form-check">
//                 <input type="checkbox" className="form-check-input"
//                        value={ this.context.proMode }
//                        onChange={ this.context.toggleProMode } />
//                 <label className="form-check-label">
//                     { this.props.label }
//                 </label>
//             </div>
//         )
//     }
// }

import React, { useContext } from "react";
import { ProModeContext } from "./ProModeContext";
export function ProModeToggle(props) {
    const context = useContext(ProModeContext);
    return (
        <div className="form-check">
            <input type="checkbox" className="form-check-input"
                   value={ context.proMode }
                   onChange={ context.toggleProMode } />
            <label className="form-check-label">
                { props.label }
            </label>
        </div>
    )
}