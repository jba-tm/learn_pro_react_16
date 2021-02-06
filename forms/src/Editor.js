import React, {Component} from "react";
import {FormValidator} from "./FormValidator";
import {ValidationMessage} from "./ValidationMessage";

import {ValidateForm} from "./wholeFormValidation";

export class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            // flavor: 'Vanilla',
            // toppings: [],
            // twoScoops: false,
            // order: '',
            // email: '',
            // terms: false,

            email: "",
            emailConfirm: ""
        }
        this.rules = {
            name: {required: true, minlength: 3, alpha: true},
            // email: { required: true, email: true },
            // order: { required: true },
            // terms: {true: true},
            email: {required: true, email: true, equals: "emailConfirm"},
            emailConfirm: {required: true, email: true, equals: "email"},
        }
        // this.flavors = ["Chocolate", "Double Chocolate",
        //     "Triple Chocolate", "Vanilla"];
        // this.toppings = ["Sprinkles", "Fudge Sauce",
        //     "Strawberries", "Maple Syrup"]
    }


    updateFormValue = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    updateFormValueCheck = (event) => {
        this.setState({[event.target.name]: event.target.checked});
    }

    // updateFormValue = e => {
    //     this.setState({[e.target.name]: e.target.value}, () => this.props.submit(this.state))
    // }

    // updateFormValueOptions = (event) => {
    //     let options = [...event.target.options]
    //         .filter(o => o.selected).map(o => o.value)
    //     this.setState({[event.target.name]: options}, () => this.props.submit(this.state))
    // }


    // updateFormValueCheck = event => {
    //     this.setState({[event.target.name]: event.target.checked}, () => this.props.submit(this.state))
    // }

    // updateFormValueCheck = e => {
    //     let toppings = this.state.toppings
    //     if (e.target.checked) {
    //         toppings.push(e.target.name)
    //         this.setState({toppings: toppings},
    //             () => this.props.submit(this.state))
    //     } else {
    //         const index = toppings.indexOf(e.target.name)
    //         toppings.splice(index, 1)
    //         this.setState({toppings: toppings},() => this.props.submit(this.state))
    //     }
    //
    //     // this.setState(state => {
    //     //     if (e.target.checked) {
    //     //         toppings.push(e.target.name)
    //     //         return {toppings: toppings}
    //     //     } else {
    //     //         let index = toppings.indexOf(e.target.name)
    //     //         console.log(index)
    //     //         return {toppings: toppings.splice(index, 1)}
    //     //     }
    //     // }, () => this.props.submit(this.state))
    // }

// render() {
//     return <div className="h5 bg-info text-white p-2">
//         <div className="form-group">
//             <label htmlFor="">Name</label>
//             <input type="text" className="form-control" name="name" value={this.state.name}
//                    onChange={this.updateFormValue}/>
//         </div>
//         <div className="form-group">
//             <label htmlFor="">Ice cream flavors</label>
//             <select name="flavor" id="flavor" value={this.state.flavor} onChange={this.updateFormValueOptions}
//                     className="form-control">
//                 {this.flavors.map(flavor => <option value={flavor} key={flavor}>{flavor}</option>)}
//             </select>
//         </div>
//         <div className="form-group">
//             <label htmlFor="">Ice cream toppings</label>
//             <select name="toppings" id="toppings" multiple={true}
//                     value={this.state.toppings} onChange={this.updateFormValueOptions}
//                     className="form-control">
//                 {this.toppings.map(top => <option value={top} key={top}>{top}</option>)}
//             </select>
//         </div>
//     </div>
// }

// render() {
//     return <div className="h5 bg-info text-white p-2">
//         <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <input className="form-control"
//                    name="name"
//                    id="name"
//                    value={this.state.name}
//                    onChange={this.updateFormValue}/>
//         </div>
//         <div className="form-group">
//             <label>Ice Cream Flavors</label>
//             {this.flavors.map(flavor =>
//                 <div className="form-check" key={flavor}>
//                     <input className="form-check-input"
//                            type="radio" name="flavor"
//                            value={flavor}
//                            id={flavor}
//                            checked={this.state.flavor === flavor}
//                            onChange={this.updateFormValue}/>
//                     <label htmlFor={flavor} className="form-check-label">
//                         {flavor}
//                     </label>
//                 </div>
//             )}
//         </div>
//         <div className="form-group">
//             <div className="form-check">
//                 <input type="checkbox" name="twoScoops" checked={this.state.twoScoops}
//                        id="twoScoops" onChange={this.updateFormValueCheck} className="form-check-input"/>
//                 <label htmlFor="twoScoops">Two Scoops</label>
//             </div>
//         </div>
//     </div>
// }

    // render() {
    //     return <div className="h5 bg-info text-white p-2">
    //         <div className="form-group">
    //             <label>Name</label>
    //             <input className="form-control"
    //                    name="name"
    //                    value={this.state.name}
    //                    onChange={this.updateFormValue}/>
    //         </div>
    //         <div className="form-group">
    //             <label>Ice Cream Toppings</label>
    //             {this.toppings.map(top =>
    //                 <div className="form-check" key={top}>
    //                     <input className="form-check-input"
    //                            type="checkbox" name={top}
    //                            value={this.state[top]}
    //                            id={top}
    //                            checked={this.state.toppings.indexOf(top) > -1}
    //                            onChange={this.updateFormValueCheck}/>
    //                     <label htmlFor={top} className="form-check-label">{top}</label>
    //                 </div>
    //             )}
    //         </div>
    //     </div>
    // }


    // render() {
    //     return <div className="h5 bg-info text-white p-2">
    //         <div className="form-group">
    //             <label>Name</label>
    //             <input className="form-control"
    //                    name="name"
    //                    value={ this.state.name }
    //                    onChange={ this.updateFormValue } />
    //         </div>
    //         <div className="form-group">
    //             <label>Order</label>
    //             <textarea className="form-control" name="order"
    //                       value={ this.state.order }
    //                       onChange={ this.updateFormValue } />
    //         </div>
    //     </div>
    // }

    // render() {
    //     return <div className="h5 bg-info text-white p-2">
    //         <FormValidator data={ this.state } rules={ this.rules }
    //                        submit={ this.props.submit }>
    //             <div className="form-group">
    //                 <label>Name</label>
    //                 <input className="form-control"
    //                        name="name"
    //                        value={ this.state.name }
    //                        onChange={ this.updateFormValue } />
    //                 <ValidationMessage field="name" />
    //             </div>
    //             <div className="form-group">
    //                 <label>Email</label>
    //                 <input className="form-control"
    //                        name="email"
    //                        value={ this.state.email }
    //                        onChange={ this.updateFormValue } />
    //                 <ValidationMessage field="email" />
    //             </div>
    //             <div className="form-group">
    //                 <label>Order</label>
    //                 <textarea className="form-control"
    //                           name="order"
    //                           value={ this.state.order }
    //                           onChange={ this.updateFormValue } />
    //                 <ValidationMessage field="order" />
    //             </div>
    //         </FormValidator>
    //     </div>
    // }

    // render() {
    //     return <div className="h5 bg-info text-white p-2">
    //         <FormValidator data={this.state} rules={this.rules}
    //                        submit={this.props.submit}>
    //             <div className="form-group">
    //                 <label>Name</label>
    //                 <input className="form-control"
    //                        name="name"
    //                        value={this.state.name}
    //                        onChange={this.updateFormValue}/>
    //                 <ValidationMessage field="name"/>
    //             </div>
    //             <div className="form-group">
    //                 <div className="form-check">
    //                     <input className="form-check-input"
    //                            type="checkbox" name="terms"
    //                            checked={this.state.terms}
    //                            onChange={this.updateFormValueCheck}/>
    //                     <label className="form-check-label">
    //                         Agree to terms
    //                     </label>
    //                 </div>
    //                 <ValidationMessage field="terms"/>
    //             </div>
    //         </FormValidator>
    //     </div>
    // }

    // render() {
    //     return <div className="h5 bg-info text-white p-2">
    //         <FormValidator data={ this.state } rules={ this.rules }
    //                        submit={ this.props.submit }>
    //             <div className="form-group">
    //                 <label>Name</label>
    //                 <input className="form-control"
    //                        name="name"
    //                        value={ this.state.name }
    //                        onChange={ this.updateFormValue } />
    //                 <ValidationMessage field="name" />
    //             </div>
    //             <div className="form-group">
    //                 <label>Email</label>
    //                 <input className="form-control"
    //                        name="email"
    //                        value={ this.state.email }
    //                        onChange={ this.updateFormValue } />
    //                 <ValidationMessage field="email" />
    //             </div>
    //             <div className="form-group">
    //                 <label>Confirm Email</label>
    //                 <input className="form-control"
    //                        name="emailConfirm"
    //                        value={ this.state.emailConfirm }
    //                        onChange={ this.updateFormValue } />
    //                 <ValidationMessage field="emailConfirm" />
    //             </div>
    //         </FormValidator>
    //     </div>
    // }
    render() {
        return <div className="h5 bg-info text-white p-2">
            <FormValidator data={this.state} rules={this.rules}
                           submit={this.props.submit}
                           validateForm={ValidateForm}>
                <ValidationMessage field="form"/>
                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control"
                           name="name"
                           value={this.state.name}
                           onChange={this.updateFormValue}/>
                    <ValidationMessage field="name"/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input className="form-control"
                           name="email"
                           value={this.state.email}
                           onChange={this.updateFormValue}/>
                    <ValidationMessage field="email"/>
                </div>
                <div className="form-group">
                    <label>Confirm Email</label>
                    <input className="form-control"
                           name="emailConfirm"
                           value={this.state.emailConfirm}
                           onChange={this.updateFormValue}/>
                    <ValidationMessage field="emailConfirm"/>
                </div>
            </FormValidator>
        </div>
    }
}