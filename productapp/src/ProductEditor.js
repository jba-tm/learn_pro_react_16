import React from "react";

export class ProductEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                id: props.product.id || "",
                name: props.product.name || "",
                category: props.product.category || "",
                price: props.product.price || ""
            }
        }

        this.formElements = {
            id: {label: "ID", name: "id"},
            name: {label: "Name", name: "name"},
            category: {label: "Category", name: "category"},
            price: {label: "Price", name: "price"}
        }
    }

    handleChange = e => {
        let formData = Array.from(this.state.formData)
        formData[e.target.name] = e.target.value
        this.setState({
            formData: formData
        })
    }

    handleClick = e => {
        this.props.saveCallback(this.state.formData)
    }

    render() {
        return (
            <div className="m-2">
                {Object.values(this.formElements).map(elem => (
                        <div className="form-group" key={elem.name}>
                            <label htmlFor="id">{elem.label}</label>
                            <input type="text"
                                   name={elem.name}
                                   id={elem.name}
                                   value={this.state.formData[elem.name]}
                                   onChange={this.handleChange}
                                   disabled={elem.name === 'id'}
                                   className="form-control"/>
                        </div>
                    )
                )}
                <div className="text-center">
                    <button className="btn btn-primary m-1" onClick={this.handleClick}>
                        Save
                    </button>
                    <button className="btn btn-secondary"
                            onClick={this.props.cancelCallback}>
                        Cancel
                    </button>
                </div>
            </div>
        );
    }

}