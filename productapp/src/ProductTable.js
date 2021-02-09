import React from "react";
import {ProductTableRow} from "./ProductTableRow";

export class ProductTable extends React.Component {
    render() {
        return (
            <table className="table table-sm table-striped table-bordered">
                <thead>
                <tr>
                    <th colSpan="5"
                        className="bg-primary text-white text-center h4 p-2">
                        Products
                    </th>
                </tr>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th className="text-right">Price</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {this.props.products.map(product => <ProductTableRow
                    key={product.id}
                    product={product}
                    deleteCallback={this.props.deleteCallback}
                    editCallback={this.props.editCallback}/>)}
                </tbody>
            </table>
        );
    }
}