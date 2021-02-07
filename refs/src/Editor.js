import React from "react";
import {ValidationDisplay} from "./ValidationDisplay";
import {GetValidationMessages} from "./ValidationMessages";

export class Editor extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = {
    //     //     name: '',
    //     //     category: '',
    //     //     price: '',
    //     // // }
    //     // this.nameRef = React.createRef()
    //     // this.categoryRef = React.createRef()
    //     // this.priceRef = React.createRef()
    // }


    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    // handleAdd = () => {
    //     // this.props.callback(this.state)
    //     // this.setState(
    //     //     {
    //     //         name: '',
    //     //         category: '',
    //     //         price: '',
    //     //     },
    //     //     () => this.nameRef.current.focus()
    //     // )
    //     this.props.callback({
    //         name: this.nameRef.current.value,
    //         category: this.categoryRef.current.value,
    //         price: this.priceRef.current.value
    //     })
    //
    //     this.nameRef.current.value = ''
    //     this.categoryRef.current.value = ''
    //     this.priceRef.current.value = ''
    //     this.nameRef.current.focus()
    // }


    // render() {
    //     return (
    //         <>
    //             <div className="form-group p-2">
    //                 <label htmlFor="name">Name</label>
    //                 <input type="text"
    //                        name="name"
    //                        defaultValue="Tomato"
    //                     // value={this.state.name}
    //                     // onChange={this.handleChange}
    //                        autoFocus={true}
    //                        id="name"
    //                        ref={this.nameRef}
    //                        className="form-control"/>
    //             </div>
    //             <div className="form-group p-2">
    //                 <label htmlFor="category">Category</label>
    //                 <input type="text"
    //                        name="category"
    //                     // value={this.state.category}
    //                     // onChange={this.handleChange}
    //                        id="category"
    //                        ref={this.categoryRef}
    //                        className="form-control"/>
    //             </div>
    //             <div className="form-group p-2">
    //                 <label htmlFor="price">Price</label>
    //
    //                 <input type="text"
    //                        name="price"
    //                        id="price"
    //                     // value={this.state.price}
    //                     // onChange={this.handleChange}
    //                        ref={this.priceRef}
    //                        className="form-control"/>
    //             </div>
    //             <div className="text-center">
    //                 <button className="btn btn-primary" onClick={this.handleAdd}>
    //                     Submit
    //                 </button>
    //             </div>
    //         </>
    //     );
    // }

    // Creating Refs Using a Callback
    // constructor(props) {
    //     super(props);
    //     this.formElements = {
    //         // name: {},
    //         // category: {},
    //         // price: {},
    //
    //         name: { label: "Name", name: "name" },
    //         category: { label: "Category", name: "category" },
    //         price: { label: "Price", name: "price" }
    //     }
    // }
    //
    // setElement = (element) => {
    //     if (element !== null) {
    //         this.formElements[element.name].element = element
    //     }
    //     console.log(this.formElements)
    // }
    //
    // handleAdd = () => {
    //     let data = {};
    //     Object.values(this.formElements).forEach(
    //         v => {
    //             data[v.element.name] = v.element.value
    //             v.element.value = ''
    //         }
    //     )
    //     this.props.callback(data)
    //     this.formElements.name.element.focus()
    // }
    //
    //
    // // render() {
    // //     return (
    // //         <>
    // //             <div className="form-group p-2">
    // //                 <label htmlFor="name">Name</label>
    // //                 <input type="text"
    // //                        name="name"
    // //                        autoFocus={true}
    // //                        id="name"
    // //                        ref={this.setElement}
    // //                        className="form-control"/>
    // //             </div>
    // //             <div className="form-group p-2">
    // //                 <label htmlFor="category">Category</label>
    // //                 <input type="text"
    // //                        name="category"
    // //                        id="category"
    // //                        ref={this.setElement}
    // //                        className="form-control"/>
    // //             </div>
    // //             <div className="form-group p-2">
    // //                 <label htmlFor="price">Price</label>
    // //
    // //                 <input type="text"
    // //                        name="price"
    // //                        id="price"
    // //                        ref={this.setElement}
    // //                        className="form-control"/>
    // //             </div>
    // //             <div className="text-center">
    // //                 <button className="btn btn-primary" onClick={this.handleAdd}>
    // //                     Submit
    // //                 </button>
    // //             </div>
    // //         </>
    // //     );
    // // }
    //
    // render() {
    //     return (
    //         <>
    //             {Object.values(this.formElements).map(elem=><div className="form-group p-2" key={elem.name}>
    //                 <label htmlFor={elem.name}>{elem.label}</label>
    //                 <input type="text"
    //                        name={elem.name}
    //                        autoFocus={elem.name==='name'}
    //                        ref={this.setElement}
    //                        className="form-control"/>
    //             </div>)}
    //             <div className="text-center">
    //                 <button className="btn btn-primary" onClick={this.handleAdd}>Add</button>
    //             </div>
    //         </>
    //     );
    // }

    // Validating Uncontrolled Form Components

    // constructor(props) {
    //     super(props);
    //     this.formElements = {
    //         name: {
    //             label: "Name", name: "name",
    //             validation: {required: true, minLength: 3}
    //         },
    //         category: {
    //             label: "Category", name: "category",
    //             validation: {required: true, minLength: 5}
    //         },
    //         price: {
    //             label: "Price", name: "price",
    //             validation: {type: "number", required: true, min: 5}
    //         }
    //     }
    //     this.state = {
    //         errors: {}
    //     }
    // }
    //
    // setElement = (element) => {
    //     if (element !== null) {
    //         this.formElements[element.name].element = element;
    //     }
    // }
    //
    // handleAdd = () => {
    //     if (this.validateFormElements()) {
    //         let data = {};
    //         Object.values(this.formElements)
    //             .forEach(v => {
    //                 data[v.element.name] = v.element.value;
    //                 v.element.value = "";
    //             });
    //         this.props.callback(data);
    //         this.formElements.name.element.focus();
    //     }
    // }
    //
    // validateFormElement = name => {
    //     let errors = GetValidationMessages(this.formElements[name].element);
    //     this.setState(state => state.errors[name] = errors)
    //     return errors.length === 0
    // }
    //
    // validateFormElements = () => {
    //     let valid = true
    //     Object.keys(this.formElements).forEach(name => {
    //         if (!this.validateFormElement(name)) {
    //             valid = false
    //         }
    //     })
    //     return valid
    // }
    //
    // render() {
    //     return (
    //         <>
    //             {Object.values(this.formElements).map(elem =>
    //                 <div key={elem.name} className="form-group p-2">
    //                     <label htmlFor={elem.name}>{elem.label}</label>
    //                     <input type="text"
    //                            name={elem.name}
    //                            autoFocus={elem.name === 'name'}
    //                            ref={this.setElement}
    //                            onChange={() => this.validateFormElement(elem.name)}
    //                            {...elem.validation}
    //                            className="form-control"/>
    //                     <ValidationDisplay errors={this.state.errors[elem.name]}/>
    //                 </div>)}
    //                 <div className="text-center">
    //                     <button onClick={this.handleAdd} className="btn btn-primary">
    //                         Add
    //                     </button>
    //                 </div>
    //         </>
    //     );
    // }


    // Understanding Refs and the Lifecycle

    constructor(props) {
        super(props);
        this.formElements = {
            name: {label: "Name", name: "name", validation: {required: true, minLength: 3}},
            category: {
                label: "Category", name: "category",
                validation: {required: true, minLength: 5}
            },
            price: {
                label: "Price", name: "price",
                validation: {type: "number", required: true, min: 5}
            }
        }
        this.state = {
            errors: {},
            wrapContent: false
        }
    }

    setElement = (element) => {
        if (element !== null) {
            this.formElements[element.name].element = element;
        }
    }
    handleAdd = () => {
        if (this.validateFormElements()) {
            let data = {};
            Object.values(this.formElements)
                .forEach(v => {
                    data[v.element.name] = v.element.value;
                    v.element.value = "";
                });
            this.props.callback(data);
            this.formElements.name.element.focus();
        }
    }
    validateFormElement = (name) => {
        let errors = GetValidationMessages(this.formElements[name].element);
        this.setState(state => state.errors[name] = errors);
        return errors.length === 0;
    }
    validateFormElements = () => {
        let valid = true;
        Object.keys(this.formElements).forEach(name => {
            if (!this.validateFormElement(name)) {
                valid = false;
            }
        })
        return valid;
    }
    toggleWrap = () => {
        this.setState({
            wrapContent: !this.state.wrapContent
        })
    }

    wrapContent = content => this.state.wrapContent ? <div className="bg-secondary p-2">
        <div className="bg-light">{content}</div>
    </div> : content

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return Object.values(this.formElements).map(item=>{
            return {name:[item.name], value: item.element.value}
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        snapshot.forEach(item=>{
            let element= this.formElements[item.name].element
            if(element.value!==item.value){
                element.value =item.value
            }
        })
    }

    render() {
        return this.wrapContent(
            <React.Fragment>
                <div className="form-group text-center p-2">
                    <div className="form-check">
                        <input className="form-check-input"
                               type="checkbox"
                               checked={this.state.wrapContent}
                               onChange={this.toggleWrap}/>
                        <label className="form-check-label">Wrap Content</label>
                    </div>
                </div>
                {
                    Object.values(this.formElements).map(elem =>
                        <div className="form-group p-2" key={elem.name}>
                            <label>{elem.label}</label>
                            <input className="form-control"
                                   name={elem.name}
                                   autoFocus={elem.name === "name"}
                                   ref={this.setElement}
                                   onChange={() => this.validateFormElement(elem.name)}
                                   {...elem.validation} />
                            <ValidationDisplay
                                errors={this.state.errors[elem.name]}/>
                        </div>)
                }
                <div className="text-center">
                    <button className="btn btn-primary" onClick={this.handleAdd}>
                        Add
                    </button>
                </div>
            </React.Fragment>)
    }
}
