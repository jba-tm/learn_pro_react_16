import React from "react";


export class SupplierEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                id: props.supplier.id || "",
                name: props.supplier.name || "",
                city: props.supplier.city || "",
                products: props.supplier.products || [],
            }
        }

        this.formElements = {
            id: {label: 'ID', name: 'id'},
            name: {label: 'Name', name: 'name'},
            city: {label: 'City', name: 'city'},
            products: {label: 'Products', name: 'products'},
        }
    }

    handleChange = e => {
        // let formData = this.state.formData
        let formData = JSON.parse(JSON.stringify(this.state.formData))
        formData[e.target.name] = e.target.name === 'products' ? e.target.value.split(',') : e.target.value
        this.setState({
            formData: formData
        })
    }

    handleClick = () => {
        this.props.saveCallback({
            ...this.state.formData,
            products: this.state.formData.products.map(val => Number(val))
        })
    }

    render() {
        return (
            <div className="m-2">
                {Object.values(this.formElements).map(elem => (
                    <div className="form-group" key={elem.name}>
                        <label key={elem.name}>{elem.label}</label>
                        <input className="form-control" name={elem.name} id={elem.name}
                               disabled={elem.name === 'id'}
                               value={this.state.formData[elem.name]}
                               onChange={this.handleChange}/>
                    </div>
                ))}
                <div className="text-center">
                    <button onClick={this.handleClick} className="btn btn-primary m-1">
                        Save
                    </button>
                    <button onClick={this.props.cancelCallback} className="btn btn-secondary">
                        Cancel
                    </button>
                </div>
            </div>
        );
    }
}