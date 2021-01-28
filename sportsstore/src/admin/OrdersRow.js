import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShippingFast, faExclamationCircle} from "@fortawesome/free-solid-svg-icons";


class OrdersRow extends React.Component {
    calcTotal = (products) => products.reduce((total, p) => total += p.quantity * p.product.price, 0).toFixed(2);
    getShipping = (order) => order.shipped ? <FontAwesomeIcon icon={faShippingFast}/> :<FontAwesomeIcon icon={faExclamationCircle}/>

    render() {
        return (
            <tr>
                <td>{this.props.order.id}</td>
                <td>{this.props.order.name}</td>
                <td>{this.props.order.email}</td>
                <td className="text-right">
                    ${this.calcTotal(this.props.order.products)}
                </td>
                <td className="text-center">
                    <button onClick={this.props.toggleShipped} className="btn btn-sm btn-block bg-muted">
                        {this.getShipping(this.props.shipped)}
                        <span>{this.props.order.shipped?'Shipped':'Pending'}</span>
                    </button>
                </td>
            </tr>
        );
    }

}